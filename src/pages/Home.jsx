function Home() {
    return (
        <div className="w-full h-screen bg-white text-black flex flex-col lg:flex-row items-center justify-center relative px-10">
            {/* Right Side Profile Image with Circle Background (Mobile First) */}
            <div className="relative z-10 mt-10 lg:mt-0 flex justify-center items-center order-first lg:order-last">
                {/* Gray Circle Background (Visible only on Desktop) */}
                <div className="absolute w-[350px] h-[350px] rounded-full bg-gray-200 top-20 lg:block hidden"></div>

                {/* Profile Image */}
                <div className="relative z-20 w-[300px] h-[300px] rounded-full overflow-hidden bottom-20 left-4 lg:w-[600px] lg:h-[520px] lg:bottom-28 lg:left-4">
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
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-black leading-6 lg:leading-10 pb-2">
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
                    <button className="bg-black text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3">
                        <span>Let’s Chat</span>
                        <span className="text-lg">➔</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
