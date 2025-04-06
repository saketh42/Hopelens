package com.HopeLens.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.HopeLens.model.InputData;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PredictionService {
    public String getPrediction (InputData data) {
        String pythonUrl = "https://localhost:5000/predict";

        // Prepare JSON payload
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("features", data.getFeatures());

        // HTTP headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Wrap everything in an HTTP entity
        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        // Use RestTemplate to call FastAPI
        RestTemplate restTemplate = new RestTemplate();
        try {
            ResponseEntity<String> response = restTemplate.postForEntity(pythonUrl, requestEntity, String.class);

            // Parse JSON string response
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());

            // You can customize how much you want to return
            int percentage = root.get("percentage").asInt();
            String message = root.get("message").asText();

            return percentage + "% chance - " + message;
        } catch (org.springframework.web.client.RestClientException e) {
            return "HTTP request error: " + e.getMessage();
        } catch (com.fasterxml.jackson.core.JsonProcessingException e) {
            return "JSON parsing error: " + e.getMessage();
        } catch (Exception e) {
            return "Unexpected error: " + e.getMessage();
        }
    }
}
