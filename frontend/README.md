# 🌸 HopeLens – Mental Health Risk Assessment Tool

**HopeLens** is a simple and beautiful React-based web application that uses machine learning to provide early insights into mental health risk factors. It offers a confidential, AI-powered assessment based on a few key questions.

## ✨ Features

- 🎯 **Risk Prediction** – Analyze potential risk based on personal and emotional factors.
- 👥 **User-Friendly UI** – Clean, responsive interface with easy-to-use select menus.
- 🧠 **ML-Powered Backend** – Connects to a backend API that runs a predictive ML model.
- 🚩 **Crisis Help Reminder** – Displays help information if risk is detected.
- 🔒 **Privacy-Focused** – No user data is stored.

## 📁 Project Structure

```
HopeLens/
├── components/
│   ├── Navbar.js
|   ├── Button.js
|   ├── Card.js
|   ├── logo.js
|   ├── Select.js
│   └── Footer.js
├── pages/
│   ├── Home.js
│   ├── Predict.js
|   ├── Resources.js
│   └── About.js
├── assets/
│   └── umbrella.jpg
├── App.js
├── index.js
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14
- A backend ML API running on `http://localhost:8080/api/predict`

### Installation

```bash
git clone https://github.com/yourusername/hopelens.git
cd hopelens
npm install
```

### Running the App

```bash
npm start
```

This will launch the frontend on `http://localhost:3000`.

> ⚠️ Make sure your backend API is running at `http://localhost:8080/api/predict`.

## 🧠 How It Works

The prediction form (`/predict`) asks the user for the following inputs:

- Age
- Number of Friends
- Depression status
- Social fear
- Gender
- Income group
- Weight category

These are sent to the backend as a feature array, and the backend returns a message (e.g., `"You're at low risk"`), which is then displayed to the user.

## 💡 Example Backend Payload

```json
{
  "feature": [25, 2, 1, 0, 1, 0, 2]
}
```

### Example Response

```json
{
  "message": "You're at moderate risk"
}
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📃 License

This project is licensed under the MIT License.

