import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the FaBars and FaTimes icons

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white text-black w-full fixed top-0 p-6 z-40">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="text-black">Edfers Miguel Medenilla</Link>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-8">
                    <li><Link to="/" className="hover:text-gray-500 transition-colors">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
                    <li><Link to="/features" className="hover:text-gray-500 transition-colors">Service</Link></li>
                    <li><Link to="/service" className="hover:text-gray-500 transition-colors">Contact</Link></li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <button
                    className="lg:hidden block text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Toggle between icons */}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md w-full absolute top-full left-0 flex flex-col items-start p-6 space-y-4 z-50">
                    <Link to="/" className="block text-black hover:text-gray-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="block text-black hover:text-gray-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/features" className="block text-black hover:text-gray-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Service</Link>
                    <Link to="/service" className="block text-black hover:text-gray-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
