import services from '../data/serviceData';

function Features() {
    return (
        <div className="bg-background py-16 my-24">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold text-black">FEATURES & BENEFITS</h1>
                <p className="text-textSecondary mt-4 max-w-3xl mx-auto">
                    Our Smart Electrical System Dashboard enhances the management of commercial high-rise building electrical systems through real-time monitoring, energy optimization, and predictive maintenance to ensure peak performance and sustainability.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="text-center p-8 border rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
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
