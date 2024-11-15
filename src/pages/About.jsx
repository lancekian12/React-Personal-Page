import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Slide-in effect on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay for slide-in effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`bg-background text-textPrimary pt-[100px] mb-24 mt-16 transition-transform duration-1000 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="container h-[620px] mx-auto border border-black rounded-lg p-8">
                {/* About Me Text Section */}
                <div className="text-center mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <hr className="w-full border-1 border-black mx-auto" />
                </div>

                {/* Profile Image and Text Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
                    {/* Profile Image */}
                    <div className="lg:w-5/12 w-9/12 mb-4 lg:mb-0 flex-grow translate-y-[-100px]">
                        <img
                            src="/picture_client-removebg-preview.png"
                            alt="Edfers Miguel Medenilla"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Profile Description */}
                    <div className="lg:w-5/12 w-9/12 text-left flex-grow">
                        <p className="text-lg mb-4">
                            Hello, I&apos;m Edfers Miguel Medenilla, a 21-year-old residing in Aguilar, Pangasinan.
                            Passionate about electrical engineering, I specialize in creating innovative solutions
                            and designs for electrical systems. With a strong foundation in engineering,
                            I&apos;m dedicated to staying current with industry trends and technologies.
                        </p>
                        <div className="flex justify-center gap-6 mt-6">
                            {/* Social Media Icons */}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
