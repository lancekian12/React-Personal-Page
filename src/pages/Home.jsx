// src/pages/Home.js
function Home() {
    return (
        <div className="w-full h-screen bg-white text-black flex flex-col lg:flex-row items-center justify-center relative px-10">
            {/* Left Side Message */}
            <div className="flex flex-col justify-center lg:w-1/2 space-y-4 text-center lg:text-left">
                <div>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-black leading-5 pb-2">
                        Smart Electrical System Dashboard <br />
                        for Commercial High-Rise Building
                    </h2>
                </div>
                <div className="text-lg pb-2 text-gray-400">
                    <p>Specialized in Smart Electrical System Dashboards for</p>
                    <p>Commercial High-Rise Buildings</p>
                </div>

                {/* "Let’s Chat" Button */}
                <div className="mt-6">
                    <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 flex items-center space-x-3 transition-all duration-300">
                        <span>Let’s Chat</span>
                        <span className="text-lg">➔</span>
                    </button>
                </div>
            </div>

            {/* Right Side Profile Image */}
            <div className="z-10 mt-10 lg:mt-0">
                <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-gray-800">
                    <img
                        src="/picture_client-removebg-preview.png"
                        alt="Profile"
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
