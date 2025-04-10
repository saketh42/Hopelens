# HopeLens – Mental Health Risk Assessment Platform

**HopeLens** is an end-to-end mental health risk assessment platform combining a React-based frontend, a Spring Boot backend, and a FastAPI-based machine learning prediction service. Designed with empathy and simplicity, HopeLens empowers early detection of mental health risk factors while preserving user privacy.

<br>

## Features

### Frontend (React.js)
-  **Risk Prediction Interface** – Simple form collects personal/emotional details.
-  **User-Friendly UI** – Clean, responsive interface with intuitive inputs.
-  **Crisis Help Reminder** – If risk is high, help resources are displayed.
-  **Privacy-Focused** – No user data is stored.

###  Backend (Spring Boot)
-  **API Gateway** – Acts as the mediator between frontend and ML API.
-  **Fallback Mechanism** – Provides default responses if ML API fails.
-  **Health Check Endpoint** – Quickly verify backend status.

###  ML Service (FastAPI)
-  **Risk Prediction** – Uses a trained ML model to predict suicide risk.
-  **Custom Messaging** – Risk-specific feedback returned to the user.
-  **Prototype Only** – Not intended for clinical use.

<br>

##  Combined Project Structure

```
HopeLens/
├── frontend/ (React.js)
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.js
│   └── index.js
│
├── backend/ (Spring Boot)
│   ├── controller/
│   ├── services/
│   └── HopelensApplication.java
│
├── model-api/ (FastAPI + ML)
│   ├── main.py
│   ├── best_model.pkl
│   ├── notebook/
│   ├── foreveralone.csv
│   ├── requirements.txt
│   └── Train model.ipynb
```

<br>

##  How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/hopelens.git
cd hopelens
```

### 2. Start the Machine Learning API (FastAPI)
```bash
cd model-api
pip install -r requirements.txt
uvicorn main:app --reload --port 5000
```

### 3. Start the Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```

### 4. Start the Frontend (React)
```bash
cd frontend
npm install
npm start
```

>  Make sure the ML API runs on `http://localhost:5000` and the Spring Boot backend on `http://localhost:8080`.

<br>

##  Endpoints Overview

###  Frontend
- Form submits feature array to `http://localhost:8080/api/predict`

###  Spring Boot Backend
- `POST /api/predict` → Forwards to Python ML API
- `GET /api/status` → Health check response

**Fallback Response if ML API is down:**
```json
{
  "prediction": -1,
  "message": "Mocked Prediction: No response from model API"
}
```

###  FastAPI ML Service
- `GET /` → Health Check
- `POST /predict` → Predicts risk percentage and returns a message

**Request Example:**
```json
{
  "features": [22, 1, 1, 1, 0, 1, 2]
}
```

**Response Example:**
```json
{
  "risk_percent": 70.67,
  "message": "High risk. Please seek support from a mental health professional as soon as possible."
}
```

<br>

##  Risk Interpretation Logic
| Risk % Range | Message |
|--------------|---------|
| 0–30%        | Low risk. Continue healthy habits and stay connected. |
| 31–60%       | Moderate risk. Consider speaking to a counselor. |
| 61–100%      | High risk. Please seek professional help immediately. |

<br>

##  License
This project is licensed under the **MIT License**. Educational use only. Not intended to replace medical advice.

<br>

##  Acknowledgments
- [FastAPI](https://fastapi.tiangolo.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [scikit-learn](https://scikit-learn.org/)
- [React.js](https://reactjs.org/)
- Inspired by the need for accessible mental health technology.
- [Priti Gupta](https://github.com/priti200)
