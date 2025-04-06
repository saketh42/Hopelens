package com.HopeLens.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HopeLens.services.PredictionService;
import com.HopeLens.model.InputData;

@RestController
@RequestMapping("/api")
public class PredictionController {
    
    @Autowired
    private PredictionService predictionService;

    @PostMapping("/predict")
    public String predict(@RequestBody InputData inputData) {
        return predictionService.getPrediction(inputData);
    }
}
