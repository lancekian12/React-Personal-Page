import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // Fade-in effect on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay for fade-in effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-screen bg-white text-black flex flex-col lg:flex-row items-center justify-center relative px-10">

            {/* Right Side Profile Image with Circle Background (Mobile First) */}
            <div
                className={`relative z-10 mt-10 lg:mt-0 flex justify-center items-center order-first lg:order-last transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Gray Circle Background (Visible only on Desktop) */}
                <div
                    className={`absolute w-[350px] h-[350px] rounded-full bg-gray-200 top-20 lg:block hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-20'}`}
                ></div>

                {/* Profile Image */}
                <div
                    className={`relative z-20 w-[300px] h-[300px] rounded-full overflow-hidden bottom-20 left-4 lg:w-[600px] lg:h-[520px] lg:bottom-28 lg:left-4 transition-transform duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}`}
                >
                    <img
                        src="/picture_client-removebg-preview.png"
                        alt="Profile"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Left Side Message */}
            <div className="flex flex-col justify-center lg:w-1/2 space-y-4 text-center lg:text-left">
                <div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-black leading-6 lg:leading-10 pb-2 animate-typewriter">
                        Smart Electrical System Dashboard <br />
                        for Commercial High-Rise Building
                    </h2>
                </div>
                <div className="text-lg pb-2 text-gray-400 animate-typewriter">
                    <p>Specialized in Smart Electrical System Dashboards for</p>
                    <p>Commercial High-Rise Buildings</p>
                </div>

                {/* "Let’s Chat" Button */}
                <div
                    className={`mt-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-40px]'}`}
                >
                    <Link to="/service">
                        <button className="bg-black text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3">
                            <span>Get in Touch</span>
                            <span className="text-lg">➔</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
