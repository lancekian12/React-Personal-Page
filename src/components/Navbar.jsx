// src/components/Navbar.js
// src/components/Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white text-black w-full fixed top-0 p-6  z-50">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="text-black">Edfers Miguel Medenilla</Link>
                </h1>
                <ul className="flex space-x-8">
                    <li><Link to="/" className="hover:text-accent">Works</Link></li>
                    <li><Link to="/about" className="hover:text-accent">About</Link></li>
                    <li><Link to="/service" className="hover:text-accent">Service</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
