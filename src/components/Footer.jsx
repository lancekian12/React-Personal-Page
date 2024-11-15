import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'; // Importing icons from react-icons


function Footer() {
    return (
        <footer className="bg-black text-white p-4 text-center">
            <p>&copy; 2023 Edfers Miguel Medenilla. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.facebook.com/people/Edfers-Miguel-Medenilla/pfbid02kRJEppEzKUg2SqzAyPK9m22wzEHAA8GuXuRtPUuMv5C7E4fAGwUaWqN7oHMhTY1ol/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} className="hover:text-blue-600" />
                </a>
                <a href="https://www.instagram.com/medenillaedfersmiguel/profilecard/?igsh=MWw2YmI4dTk2aHN4aw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} className="hover:text-pink-600" />
                </a>
                <a href="mailto:edfersmedenilla6@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaGoogle size={30} className="hover:text-red-600" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;