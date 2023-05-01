package com.doco.medicine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.doco")
public class MedicineApplication {

    public static void main(String[] args) {

        SpringApplication.run(MedicineApplication.class, args);
    }

}
