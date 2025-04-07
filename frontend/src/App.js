import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
       {/* <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/predict" element={<Predict />} />
         <Route path="/resources" element={<Resources />} />
         <Route path="/about" element={<About />} />
       </Routes> */}
      <Navbar/>
    </Router>
  )
}

export default App;