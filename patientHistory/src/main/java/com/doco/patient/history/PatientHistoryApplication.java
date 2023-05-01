package com.doco.patient.history;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan("com.doco")
@EnableTransactionManagement
@EntityScan("com.doco.patient.history.model")
public class PatientHistoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatientHistoryApplication.class, args);
	}

}
