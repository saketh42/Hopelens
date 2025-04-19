package com.HopeLens.services;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PredictionService {

    public String getPrediction(String inputData) {
        RestTemplate restTemplate = new RestTemplate();
        String pythonApiUrl = "https://hopelens-model.onrender.com/predict";  // Use the appropriate URL if deploying
        
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