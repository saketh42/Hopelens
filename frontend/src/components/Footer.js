import { Link } from "react-router-dom";
import Logo from "./logo";

function Footer() {
    return (
        <footer className="w-full py-8 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col  justify-between items-center mb-6">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Logo />
                        <span>HopeLens</span>
                    </div>
                    <div className="flex mt-4 flex-col md:flex-row gap-4 md:gap-8 items-center"> 
                        <Link to="/home" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">Home</Link>
                        <Link to="/resources" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">Resources</Link>
                        <Link to="/about" className="text-gray-600 hover:text-rose-500 transition-colors text-sm">About</Link>
                    </div>
                </div>
                <div className="mt-8 mx-auto text-center w-2/3 text-gray-500 text-sm leading-relaxed">
                    <p>
                        Hoplens is an AI-based tool designed for educational and 
                        awareness purposes only. It does not provide medical or 
                        psychological advice. For any mental health concerns, 
                        please consult a licensed professional.                    
                    </p>
                    <p className="mt-4">
                        &copy; {new Date().getFullYear()} HopeLens. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;