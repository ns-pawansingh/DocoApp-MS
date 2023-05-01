package com.doco.apigateway;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("fallback")
public class FallBackController {

    @GetMapping("/medicine")
    public Object medicineServiceFallBack(){
        return "Medicine service is down ! Please try after some time";
    }

    @GetMapping("/patient")
    public Object patientServiceFallBack(){
        return "Patient service is down ! Please try after some time";
    }

    @GetMapping("/patient/history")
   // @CircuitBreaker(name = "circuit-breaker", fallbackMethod = "")
    public Object patientHistoryServiceFallBack(){
        return "Patient History service is down ! Please try after some time";
    }
}
