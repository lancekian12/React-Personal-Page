import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-white text-black p-8 text-center mt-10 font-sans">
            {/* Footer Text */}
            <p className="text-lg">&copy; 2023 Edfers Miguel Medenilla. All rights reserved.</p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center space-x-6 mt-4">
                <a
                    href="https://www.facebook.com/people/Edfers-Miguel-Medenilla/pfbid02kRJEppEzKUg2SqzAyPK9m22wzEHAA8GuXuRtPUuMv5C7E4fAGwUaWqN7oHMhTY1ol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 transition duration-300"
                >
                    <FaFacebook size={30} />
                </a>
                <a
                    href="https://www.instagram.com/medenillaedfersmiguel/profilecard/?igsh=MWw2YmI4dTk2aHN4aw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-pink-600 transition duration-300"
                >
                    <FaInstagram size={30} />
                </a>
                <a
                    href="mailto:edfersmedenilla6@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-red-600 transition duration-300"
                >
                    <FaGoogle size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
