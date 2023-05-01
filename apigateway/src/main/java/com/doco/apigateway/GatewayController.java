package com.doco.apigateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("gateway")
public class GatewayController {
    private Logger logger = Logger.getLogger(GatewayController.class.getName());
    @GetMapping("/info")
    public String info(){
        logger.log(Level.ALL, "This is API gateway call !!!!!!");
        return "This is API gateway call !!!!!!";
    }

}
