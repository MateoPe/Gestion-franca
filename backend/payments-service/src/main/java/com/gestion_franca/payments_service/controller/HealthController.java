package com.gestion_franca.payments_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class HealthController {

    @GetMapping("health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Ok");
    }

    @GetMapping("status")
    public ResponseEntity<Map<String, Object>> stauts() {
        Map<String, Object> response = new HashMap<>();
        response.put("service", "payments-service");
        response.put("status", "UP");
        response.put("timestamp", LocalDateTime.now());
        return ResponseEntity.ok(response);
    }
}
