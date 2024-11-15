import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import { sendEmail } from '../components/email';
import { useState, useEffect } from 'react';

const Services = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);  // State to control visibility for animation

    useEffect(() => {
        // Trigger the slide-in animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Optional delay for smoother animation
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const message = formData.get('message');

        setLoading(true);

        const templateParams = {
            from_name: name,
            from_email: email,
            address,
            message,
        };

        sendEmail(templateParams)
            .then(() => {
                setLoading(false);
                setStatusMessage('Your message has been successfully sent!');
                setStatusType('success');
                setTimeout(() => setStatusMessage(''), 5000);  // Auto-clear after 5 seconds
            })
            .catch(() => {
                setLoading(false);
                setStatusMessage('Oops! Something went wrong. Please try again later.');
                setStatusType('error');
                setTimeout(() => setStatusMessage(''), 5000);  // Auto-clear after 5 seconds
            });
    };

    return (
        <div className="bg-background py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between mt-10">
                {/* Left Side (With Slide-in Effect) */}
                <div className={`lg:w-1/2 mb-12 lg:mb-0 mr-20 transform ${isVisible ? 'translate-x-0' : '-translate-x-[900px]'} transition-transform duration-1000 ease-out`}>
                    <h2 className="text-3xl font-semibold text-textPrimary">Contact Us</h2>
                    <h1 className="text-6xl font-bold text-textPrimary mt-2">We&apos;d Love to Hear From You!</h1>
                    <p className="text-textSecondary mt-4">Have a question or feedback? We&apos;re here to help.</p>

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

                    <div className="mt-8 flex space-x-4">
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
                <div
                    className={`lg:w-1/2 bg-white p-8 rounded-lg shadow-md ml-10 transform ${isVisible ? 'translate-x-0' : 'translate-x-[900px]'} transition-transform duration-1000 ease-out`}
                    style={{ transitionDelay: '200ms' }}  // Added delay to sync animation
                >
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
