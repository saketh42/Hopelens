import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import umbrella from "../assets/umbrella.jpg"

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-6 bg-gradient-to-br from-rose-100 to-white-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About HopeLens</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Using machine learning to help identify risk factors and connect people with support
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img src={umbrella} alt="HopeLens Project" className="rounded-lg w-full" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  HopeLens was created with a simple but powerful mission: to leverage technology in the fight against
                  suicide. We believe that by combining machine learning with compassionate support, we can help
                  identify those at risk and connect them with the resources they need.
                </p>
                <p className="text-gray-600">
                  Our tool is designed to be a bridge to professional help, not a replacement for it. We work closely
                  with mental health professionals to ensure our approach is both effective and ethical.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-rose-500 text-2xl font-bold">1</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Data Collection</h3>
                <p className="text-gray-600 text-sm">
                  Our model was trained on anonymized data from various sources, including research studies and clinical
                  assessments.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-500 text-2xl font-bold">2</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Analysis</h3>
                <p className="text-gray-600 text-sm">
                  The machine learning model analyzes patterns and risk factors to identify potential concerns.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 text-2xl font-bold">3</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Connection</h3>
                <p className="text-gray-600 text-sm">
                  Based on the analysis, we connect individuals with appropriate resources and support systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About

