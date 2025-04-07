package com.hopelens.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

@Service
public class PredictionService {

    public String getPrediction(String inputData) {
        RestTemplate restTemplate = new RestTemplate();
        String pythonApiUrl = "http://localhost:5000/predict";
        
        // Prepare headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(inputData, headers);
        
        try {
            // Send input data to Python API
            ResponseEntity<String> response = restTemplate.postForEntity(pythonApiUrl, entity, String.class);
            return response.getBody();
        } catch (Exception e) {
            // Mock response if Python API is unavailable
            return "{\"prediction\": -1, \"message\": \"Mocked Prediction: No response from model API\"}";
        }
    }
}