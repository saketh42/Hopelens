import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col">
                <section className="flex-1 flex flex-col items-center
                justify-center px-6 py-24 md:py-32 min-h-screen"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm  p-8 md:p-12 rounded-xl shadow-sm">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Hope is always Within reach</h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Using technology to detect signs and connect people with the 
                            support they need
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/predict" 
                                className="px-6 py-3 bg-rose-500 text-white 
                                rounded-full hover:bg-rose-600 transition-colors 
                                shadow-sm">
                                    Try the predictor
                            </Link>
                            <Link
                                to="/predict" 
                                className="px-6 py-3 bg-rose-500 text-white 
                                rounded-full hover:bg-rose-600 transition-colors 
                                shadow-sm">
                                    Check Helplines
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;