import { useState, useEffect } from 'react';
import services from '../data/serviceData';
import { useNavigate } from 'react-router-dom';

function Features() {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        // Set a delay for each card to slide in one by one
        const timer = setInterval(() => {
            setVisibleIndex(prevIndex => {
                if (prevIndex < services.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(timer); // Stop when all cards are shown
                    return prevIndex;
                }
            });
        }, 200); // Adjust the delay (200ms between each card)

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="bg-background py-16 my-24">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-black">FEATURES & SERVICES</h1>
                <p className="text-textSecondary mt-4 max-w-3xl mx-auto">
                    Our Smart Electrical System Dashboard enhances the management of commercial high-rise building electrical systems through real-time monitoring, energy optimization, and predictive maintenance to ensure peak performance and sustainability.
                </p>
                <button
                    onClick={() => navigate('/service')}
                    className="mt-6 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
                >
                    Appoint Now
                </button>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`text-center p-8 border rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all transform ${index <= visibleIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                            } transition-transform duration-1000 ease-out`}
                    >
                        <div className="text-5xl text-primary mb-6">{service.icon}</div>
                        <h2 className="text-2xl font-semibold text-textPrimary">{service.title}</h2>
                        <p className="text-textSecondary mt-4 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
