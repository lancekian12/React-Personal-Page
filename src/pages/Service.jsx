// src/pages/Service.js
import { useState } from 'react';

function Service() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here, you can handle form submission (e.g., sending data to the server)
    };

    return (
        <div className="w-full h-screen bg-white text-black px-6 py-12">
            {/* Service Form */}
            <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us for Our Services</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-lg font-semibold">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-lg font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                        Submit
                    </button>
                </form>
            </div>

            {/* Benefits Section (cards) */}
            <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Benefit 1</h3>
                    <p className="text-gray-600">Learn how our service helps you save time and increase productivity.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Benefit 2</h3>
                    <p className="text-gray-600">Get reliable support and assistance whenever you need it.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Benefit 3</h3>
                    <p className="text-gray-600">Enjoy premium features and benefits that help you achieve your goals.</p>
                </div>
            </div>
        </div>
    );
}

export default Service;
