package com.hopelens.controller;
  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.hopelens.services.PredictionService;

@RestController
@RequestMapping("/api")
public class PredictionController {

    @Autowired
    private PredictionService predictionService;

    @PostMapping("/predict")
    public ResponseEntity<String> predict(@RequestBody String inputData) {
        String result = predictionService.getPrediction(inputData);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/status")
    public ResponseEntity<String> checkStatus() {
        return ResponseEntity.ok("Spring Boot Backend is running!");
    }
}