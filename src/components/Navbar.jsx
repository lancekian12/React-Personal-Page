import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';  // Import the FaBars icon

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white text-black w-full fixed top-0 p-6 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="text-black">Edfers Miguel Medenilla</Link>
                </h1>
                <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} space-x-8`}>
                    <li><Link to="/" className="hover:text-gray-500 transition-colors">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
                    <li><Link to="/service" className="hover:text-gray-500 transition-colors">Service</Link></li>
                </ul>
                {/* Mobile Hamburger Menu */}
                <button
                    className="lg:hidden block text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars size={30} /> {/* Displaying the hamburger icon */}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
