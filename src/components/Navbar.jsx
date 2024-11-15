import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Close the menu whenever the route changes
        setIsMenuOpen(false);
    }, [location.pathname]); // Only trigger this effect when pathname changes

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu on link click
    };

    return (
        <nav className="bg-white text-black w-full fixed top-0 p-6 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-1xl lg:text-2xl font-bold">
                    <Link to="/" className="text-black" onClick={handleLinkClick}>
                        Edfers Miguel Medenilla
                    </Link>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-8">
                    <li><Link to="/" className="hover:text-gray-500 transition-colors" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-500 transition-colors" onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/features" className="hover:text-gray-500 transition-colors" onClick={handleLinkClick}>Service</Link></li>
                    <li><Link to="/service" className="hover:text-gray-500 transition-colors" onClick={handleLinkClick}>Contact</Link></li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <button
                    className="lg:hidden block text-black z-50"
                    onClick={() => setIsMenuOpen(prevState => !prevState)}
                >
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md w-full absolute top-16 left-0 flex flex-col items-start p-6 space-y-4 z-50">
                    <Link to="/" className="block text-black hover:text-gray-500 transition-colors" onClick={handleLinkClick}>Home</Link>
                    <Link to="/about" className="block text-black hover:text-gray-500 transition-colors" onClick={handleLinkClick}>About</Link>
                    <Link to="/features" className="block text-black hover:text-gray-500 transition-colors" onClick={handleLinkClick}>Service</Link>
                    <Link to="/service" className="block text-black hover:text-gray-500 transition-colors" onClick={handleLinkClick}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
