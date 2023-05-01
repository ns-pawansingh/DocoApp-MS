package com.doco.apigateway;

import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig;
import io.github.resilience4j.circuitbreaker.CircuitBreakerRegistry;
import io.github.resilience4j.timelimiter.TimeLimiterConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.circuitbreaker.resilience4j.ReactiveResilience4JCircuitBreakerFactory;
import org.springframework.cloud.circuitbreaker.resilience4j.Resilience4JConfigBuilder;
import org.springframework.cloud.client.circuitbreaker.Customizer;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.DependsOn;

import java.time.Duration;

@SpringBootApplication
public class ApigatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatewayApplication.class, args);
	}

	@Bean("circuit-breaker")
	public Customizer<ReactiveResilience4JCircuitBreakerFactory> defaultCustomizer() {
		return factory -> factory.configureDefault(id -> new Resilience4JConfigBuilder(id)
				.circuitBreakerConfig(CircuitBreakerConfig.custom()
						.slidingWindowSize(5)
						.permittedNumberOfCallsInHalfOpenState(5)
						.failureRateThreshold(50.0F)
						.waitDurationInOpenState(Duration.ofMillis(1000))
						.enableAutomaticTransitionFromOpenToHalfOpen()
						.ignoreExceptions(NullPointerException.class)
						.build())
				.timeLimiterConfig(TimeLimiterConfig.custom().
						timeoutDuration(Duration.ofMillis(200))
						.build())
				.build());
	}


	@Bean
	@DependsOn("circuit-breaker")
	public RouteLocator myRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(p -> p
						.path("/medicine/**")
						.filters(f-> f
								.circuitBreaker((x) -> {
									x.setFallbackUri("forward:/fallback/medicine")
											.setName("circuit-breaker");
											//.addStatusCode("404");
								})
						)
						.uri("lb://medicine-service")
				)

						//.uri("http://gaoogle.com"))
				.route(p -> p
						.path("/patient/history/**")
						.uri("lb://PATIENT-HISTORY-SERVICE"))
				.route(p -> p
						.path("/patient/**")
						.uri("lb://patient-service"))

				.build();
	}


}
