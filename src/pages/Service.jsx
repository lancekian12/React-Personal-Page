import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const Services = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const message = formData.get('message');

        setLoading(true);

        const contactData = {
            type: 'contact',
            fullName: name,
            email: email,
            address: address,
            message: message,
        };

        try {
            const response = await fetch('https://my-nodejs-project-tawny.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            const result = await response.json();

            if (response.ok) {
                setLoading(false);
                setStatusMessage('Your message has been successfully sent!');
                setStatusType('success');
                setTimeout(() => setStatusMessage(''), 5000);
            } else {
                setLoading(false);
                setStatusMessage(result.message || 'Oops! Something went wrong. Please try again later.');
                setStatusType('error');
                setTimeout(() => setStatusMessage(''), 5000);
            }
        } catch (error) {
            setLoading(false);
            setStatusMessage('Oops! Something went wrong. Please try again later.');
            setStatusType('error', error);
            setTimeout(() => setStatusMessage(''), 5000);
        }
    };

    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between mt-10">
                {/* Left Side */}
                <div className={`lg:w-1/2 mb-8 lg:mb-0 lg:mr-10 transform ${isVisible ? 'translate-x-0' : '-translate-x-[900px]'} transition-transform duration-1000 ease-out`}>
                    <h2 className="text-3xl font-semibold text-textPrimary text-center lg:text-left leading-tight">Contact Us</h2>
                    <h1 className="text-4xl lg:text-6xl font-bold text-textPrimary mt-2 text-center lg:text-left leading-snug">We&apos;d Love to Hear From You!</h1>
                    <p className="text-textSecondary mt-4 text-center lg:text-left">Have a question or feedback? We’re here to help.</p>
                    <div className="mt-8">
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg mb-4">
                            <span className="text-2xl mr-4">📧</span>
                            <div>
                                <p className="text-textPrimary">Email:</p>
                                <p className="text-black">edfersmedenilla6@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg mb-4">
                            <span className="text-2xl mr-4">📞</span>
                            <div>
                                <p className="text-textPrimary">Phone:</p>
                                <p className="text-black">09565797227</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <p className="text-textPrimary">Follow us on:</p>
                        <a href="https://www.facebook.com/" target="_blank" className="text-black hover:text-blue-600 transition duration-300">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="text-black hover:text-pink-600 transition duration-300">
                            <FaInstagram size={30} />
                        </a>
                        <a href="mailto:edfersmedenilla6@gmail.com" target="_blank" className="text-black hover:text-red-600 transition duration-300">
                            <FaGoogle size={30} />
                        </a>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className={`lg:w-1/2 w-full bg-white p-6 sm:p-8 rounded-lg shadow-md transform ${isVisible ? 'translate-x-0' : 'translate-x-[900px]'} transition-transform duration-1000 ease-out`} style={{ transitionDelay: '200ms' }}>
                    {statusMessage && (
                        <div className={`mb-4 p-4 rounded-lg text-white ${statusType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {statusMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-textPrimary mb-2" htmlFor="name">Your Full Name</label>
                            <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary" type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-textPrimary mb-2" htmlFor="email">Your Email Address</label>
                            <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary" type="email" name="email" placeholder="Your Email Address" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-textPrimary mb-2" htmlFor="address">Your Address</label>
                            <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary" type="text" name="address" placeholder="Your Address" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-textPrimary mb-2" htmlFor="message">Your Message</label>
                            <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary" name="message" rows="4" placeholder="Write your message here..." required></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Services;
