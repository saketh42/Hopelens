import {Link} from "react-router-dom";
import Logo from "./logo";

function Navbar() {
    return (
        <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <Logo />
                    <span className="font-semibold text-xl text-gray-800">HopeLens</span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    <Link to="/" className="text-gray-600 hover:text-rose-500 transition-colors">Home</Link>
                    <Link to="/predict" className="text-gray-600 hover:text-rose-500 transition-colors">Evalute</Link>
                    <Link to="/resources" className="text-gray-600 hover:text-rose-500 transition-colors">Resources</Link>
                    <Link to="/about" className="text-gray-600 hover:text-rose-500 transition-colors">About</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;