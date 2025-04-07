# HopeLens - AI-Powered Prediction Service

HopeLens is a Spring Boot-based backend service that integrates with a Python-based Machine Learning model (served via Flask) to deliver smart predictions based on user input. The service is built to be modular, scalable, and ready for integration with frontend or mobile apps.

## Features

- Communicates with a local Python ML API
- Fallback response in case the Python API is unavailable
- Health check endpoint
- Clean and maintainable code structure

## Tech Stack

- Java (Spring Boot)
- RestTemplate (for internal HTTP requests)

## Project Structure

```
com.hopelens
|
├── controller
│   └── PredictionController.java     // Handles HTTP requests
|
├── services
│   └── PredictionService.java        // Communicates with Python API
|
└── HopelensApplication.java          // Main Spring Boot application
```

## API Endpoints

### POST /api/predict

Sends user input to the Python ML API and returns a prediction.

**Request Body:**
```
{
  "feature": [22, 1, 1, 1, 0, 1, 2]
}
```

**Response:**
```
{
    "risk_percentage":70.66999816894531,
    "message":"High risk. Please seek support from a mental health professional as soon as possible."
}
```

**Fallback Response (if Python API is down):**
```
{
  "prediction": -1,
  "message": "Mocked Prediction: No response from model API"
}
```

### GET /api/status

Simple health check to verify if the Spring Boot backend is running.

**Response:**
```
Spring Boot Backend is running!
```

## How It Works

1. A client sends a POST request to `/api/predict` with JSON data.
2. `PredictionController` passes the data to `PredictionService`.
3. `PredictionService` uses `RestTemplate` to call the Python API at `http://localhost:5000/predict`.
4. The response is returned back to the client.
5. If the Python API is down, a fallback mock response is provided.

## Setup Instructions

1. Clone this repository.
2. Ensure the Python Flask API is running on `http://localhost:5000/predict`.
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
4. Use a tool like Postman to test the `/api/predict` endpoints.

## License

This project is licensed under the MIT License.

