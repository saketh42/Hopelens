# 🧠 Hopelens API (FastAPI)

This FastAPI app wraps around a trained machine learning model to predict the **percentage risk of suicide** based on input features. It's intended for educational or prototype use only.

<br>

## 📦 Project Structure

```
model/
├── dataset and models
|   ├── foreveralone.csv        # Dataset
|   ├── LR.pkl                  # Logistic Regressin model
|   └── RF.pkl                  # Random Forest model
├── notebook/Train model.ipynb  # File used to train the models
├── main.py                     # FastAPI server with prediction endpoint
├── best_model.pkl              # Trained scikit-learn model
├── requirements.txt            # Python dependencies
└── README.md                   # Project documentation
```

<br>

## 🚀 API Endpoints

### ✅ `GET /`

Check if the server is running.

**Response:**
```json
{
  "message": "FastAPI is running!"
}
```

<br>

### 🔮 `POST /predict`

Predicts the suicide risk percentage using a trained ML model.

**Request Body:**
```json
{
  "features": [35, 0, 0, 0, 0, 2, 1]
}
```

**Response:**
```json
{
  "risk_percent": 73.25,
  "message": "High risk. Please seek support from a mental health professional as soon as possible."
}
```

<br>

## 🌟 Risk Interpretation

| Risk % Range | Message                          |
|--------------|----------------------------------|
| 0–30%        | Low risk. Continue healthy habits and stay connected with others.        |
| 31–60%       | Moderate risk. Consider talking to a counselor or someone you trust. |
| 61–100%       | High risk. Please seek support from a mental health professional as soon as possible.    |


<br>

## 🛠️ Running the App

### 📅 Install dependencies

```bash
pip install -r requirements.txt
```

Or manually:

```bash
pip install fastapi uvicorn joblib scikit-learn
```

### ▶️ Run the FastAPI server

```bash
uvicorn main:app --reload --port 5000
```

<br>

## 🥚 Example Request

```bash
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"features": [35, 0, 0, 0, 0, 2, 1]}'
```

<br>

## ⚙️ Customizing Logic

Modify `main.py` to adjust thresholds or messages in the `/predict` route:

```python
if risk <= 30:
    message = "Low risk. Continue healthy habits and stay connected with others."
elif risk <= 60:
    message = "Moderate risk. Consider talking to a counselor or someone you trust."
else:
    message = "High risk. Please seek support from a mental health professional as soon as possible."

```

<br>

## 📢 Ethical Disclaimer

> This app is meant for **educational or prototype use only**. Suicide risk assessment should be performed by licensed professionals. Always direct users to official mental health support services.

<br>

## 📌 License

This project is licensed for personal, educational, or research purposes only.

<br>

## ❤️ Acknowledgments

Built using:
- [FastAPI](https://fastapi.tiangolo.com/)
- [scikit-learn](https://scikit-learn.org/)
- [Uvicorn](https://www.uvicorn.org/)

