"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Select from "../components/Select"
import Button from "../components/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card"

function Predict() {
  const [result, setResult] = useState(null)
  const [formData, setFormData] = useState({
    age: "",
    friends: "",
    depressed: "",
    fear: "",
    gender: "",
    income: "",
    weight: "",
  })

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check for empty fields
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill in all fields before submitting.")
      return
    }

    // Convert all input values to float
    const floatFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, parseFloat(value)])
    )

    console.log("Float form data:", floatFormData)

    // Convert to features array
    const featuresArray = [
      floatFormData.age,
      floatFormData.friends,
      floatFormData.depressed,
      floatFormData.fear,
      floatFormData.gender,
      floatFormData.income,
      floatFormData.weight,
    ]

    console.log("Sending features:", featuresArray)

    try {
      const response = await fetch("http://localhost:8080/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feature: featuresArray }),
      })

      if (!response.ok) throw new Error("Prediction API failed")

      const data = await response.json()
      console.log("Prediction result from backend:", data)

      // Assuming backend returns something like: { prediction: "You're at low risk" }
      setResult(data.message || "No prediction received.")
    } catch (err) {
      console.error("Error while fetching prediction:", err)
      setResult("Something went wrong while fetching the prediction.")
    }
  }

  // All select options (same as before)
  const age = Array.from({ length: 83 }, (_, i) => ({ value: i + 18, label: `${i + 18}` }))
  const friends = [
    { value: 0, label: "No close friends" },
    { value: 1, label: "1-2 friends" },
    { value: 2, label: "3-5 friends" },
    { value: 3, label: "More than 5" },
  ]
  const depressed = [
    { value: 1, label: "Yes" },
    { value: 0, label: "No" },
  ]
  const fear = [
    { value: 1, label: "Yes" },
    { value: 0, label: "No" },
  ]
  const gender = [
    { value: 0, label: "Male" },
    { value: 1, label: "Female" },
    { value: 2, label: "Transgender Male" },
    { value: 3, label: "Transgender Female" },
  ]
  const income = [
    { value: 2, label: "0" },
    { value: 1, label: "1 to 1 Lakh" },
    { value: 0, label: "1 Lakh to 15 Lakh" },
    { value: 3, label: "15 Lakh+" },
  ]
  const weight = [
    { value: 0, label: "Normal weight" },
    { value: 1, label: "Under weight" },
    { value: 2, label: "Over weight" },
    { value: 3, label: "Obese" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-6 bg-gradient-to-br from-rose-100  to-white-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Early Detection Tool</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This tool uses machine learning to help identify potential risk factors. All information is confidential
              and not stored.
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm shadow-sm">
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>Please answer the following questions as accurately as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Age</label>
                    <Select options={age} value={formData.age} onChange={handleChange("age")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">No. of Friends</label>
                    <Select options={friends} value={formData.friends} onChange={handleChange("friends")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Depressed</label>
                    <Select options={depressed} value={formData.depressed} onChange={handleChange("depressed")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Social Fear</label>
                    <Select options={fear} value={formData.fear} onChange={handleChange("fear")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Gender</label>
                    <Select options={gender} value={formData.gender} onChange={handleChange("gender")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Income</label>
                    <Select options={income} value={formData.income} onChange={handleChange("income")} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Weight</label>
                    <Select options={weight} value={formData.weight} onChange={handleChange("weight")} />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white px-8">
                    Analyze
                  </Button>
                </div>
              </form>
            </CardContent>

            {result && (
              <CardFooter className="border-t border-gray-100 p-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <div>
                    <p className="text-gray-700">{result}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      This is not a medical diagnosis. If you or someone you know is in crisis, please call the National
                      Suicide Prevention Lifeline at 988.
                    </p>
                  </div>
                </div>
              </CardFooter>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Predict
