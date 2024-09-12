'use client';

import Breadcrumb from '../breadcrumb';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaPaperPlane, FaGooglePlusG, FaVideo } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Page = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [menuState, setMenuState] = useState('main');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
        setMenuState('main');
    };

    const showSubMenu = (menu) => {
        setMenuState(menu);
    };

    const goBackToMainMenu = () => {
        setMenuState('main');
    };



    if (!mounted) {
        return null;
    }

    const guards = [
        {
            id: 1,
            name: 'Cheryl Murray',
            position: 'Director',
            image: '/img1.jpg',
        },
        {
            id: 2,
            name: 'Doris Welch',
            position: 'Director',
            image: '/img1.jpg',
        },
        {
            id: 3,
            name: 'Virginia Moore',
            position: 'Director',
            image: '/img1.jpg',
        },
    ];

    return (

        <main className='scroll-smooth'>
            {/* Header Start */}

            <header>
                {/* Header Top */}
                <div className="bg-gray text-white py-4 hidden lg:block">
                    <div className="container mx-auto px-[55px]">
                        <div className="flex justify-between items-center">
                            <div className="lefttopbar">
                                <p>Have any questions? +215 2145 2154</p>
                            </div>
                            <div className="righttopbar">
                                <ul className="flex space-x-7">
                                    <li><a href="#" className="hover:text-rosesecondary"><FaFacebook /></a></li>
                                    <li><a href="#" className="hover:text-rosesecondary"><FaTwitter /></a></li>
                                    <li><a href="#" className="hover:text-rosesecondary"><FaPinterest /></a></li>
                                    <li><a href="#" className="hover:text-rosesecondary"><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Bottom */}

                <div className="header-bottom-area py-4 container mx-auto flex justify-around items-center px-4 lg:px-8">
                    {/* Logo Section */}
                    <div className="w-1/4">
                        <a href="/">
                            <Image
                                src="/logo.jpg"
                                alt="logo"
                                className="w-[80px] mx-[25px]"
                                width={80}
                                height={80}
                            />
                        </a>
                    </div>

                    {/* Navigation for Large Screens */}
                    <nav className="hidden lg:flex flex-col lg:flex-row lg:w-3/4 lg:justify-end items-center px-5 text-darkblue font-bold">
                        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 px-5 py-5 items-center">
                            <li className="relative group">
                                <a href="/" className="hover:text-rosesecondary border-spacing-1 p-3">HOME</a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] h-auto hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="/" className="hover:text-rosesecondary">Home One</a></li>
                                    <li className="py-2"><a href="/" className="hover:text-rosesecondary">Boxed Layout Page</a></li>
                                </ul>
                            </li>
                            <li><a href="about-us" className="hover:text-rosesecondary p-3">ABOUT</a></li>
                            <li className="relative group">
                                <a href="services" className="hover:text-rosesecondary p-3">SERVICES</a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="services" className="hover:text-rosesecondary">Service Page</a></li>
                                    <li className="py-2"><a href="services" className="hover:text-rosesecondary">Service Detail Page</a></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <a href="posts" className="hover:text-rosesecondary p-3">BLOG</a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="posts" className="hover:text-rosesecondary">Blog Page</a></li>
                                    <li className="py-2"><a href="posts" className="hover:text-rosesecondary">Blog Detail Page</a></li>
                                </ul>
                            </li>
                            <li><a href="contact-us" className="hover:text-rosesecondary p-3">CONTACT</a></li>
                            <li>
                                <a href="/"
                                    className="relative inline-flex items-center justify-center px-10 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
       before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
       hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
       after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
       hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
       before:-z-10 after:-z-10 z-10">
                                    Buy Now
                                </a>
                            </li>
                        </ul>
                    </nav>


                    {/* Mobile/Tablet View (hamburger menu) */}
                    <div className="lg:hidden">
                        <button onClick={toggleSidebar} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Sidebar for Mobile/Tablet View */}
                <div className={`fixed top-0 left-0 w-[330px] h-full bg-mild text-black transition-transform duration-300 ease-in-out z-50 ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-5">
                        <button onClick={toggleSidebar} className="text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {menuState === 'main' && (
                        <nav className="flex flex-col space-y-4 p-5">
                            <div className="relative">
                                <button onClick={() => showSubMenu('homeSubmenu')} className="flex items-center justify-between w-full hover:text-rosesecondary py-2">
                                    HOME
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                            <a href="/about-us/" className="hover:text-rosesecondary py-2">ABOUT</a>
                            <div className="relative">
                                <button onClick={() => showSubMenu('serviceSubmenu')} className="flex items-center justify-between w-full hover:text-rosesecondary py-2">
                                    SERVICES
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => showSubMenu('blogSubmenu')} className="flex items-center justify-between w-full hover:text-rosesecondary py-2">
                                    BLOG
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                            <a href="/contact-us/" className="hover:text-rosesecondary py-2">CONTACT</a>
                        </nav>
                    )}

                    {menuState === 'homeSubmenu' && (
                        <nav className="bg-mild flex flex-col space-y-4 p-5">
                            <button onClick={goBackToMainMenu} className="flex items-center justify-between w-full hover:text-rosesecondary py-2">
                                HOME
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75-3.75M21 12H3" />
                                </svg>
                            </button>
                            <ul className="bg-mild text-black">
                                <li className="py-2"><a href="#" className="hover:text-rosesecondary">Home One</a></li>
                                <li className="py-2"><a href="#" className="hover:text-rosesecondary">Boxed Layout Page</a></li>
                            </ul>
                        </nav>
                    )}

                    {menuState === 'serviceSubmenu' && (
                        <nav className="bg-mild flex flex-col space-y-4 p-5">
                            <button onClick={goBackToMainMenu} className="flex items-center justify-between w-full hover:text-rosesecondary py-2">
                                SERVICES
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75-3.75M21 12H3" />
                                </svg>
                            </button>
                            <ul className="bg-mild text-black">
                                <li className="py-2"><a href="#" className="hover:text-rosesecondary">Service Page</a></li>
                                <li className="py-2"><a href="#" className="hover:text-rosesecondary">Service Detail Page</a></li>
                            </ul>
                        </nav>
                    )}

                    {menuState === 'blogSubmenu' && (
                        <nav className="bg-mild flex flex-col space-y-4 p-5">
                            <button onClick={goBackToMainMenu} className="flex items-center justify-between w-full hover:text-rosesecondary py-2">
                                BLOG
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0-3.75-3.75M21 12H3" />
                                </svg>
                            </button>
                            <ul className="bg-mild text-black">
                                <li className="py-2"><a href="#" className="hover:text-rosesecondary">Blog Page</a></li>
                                <li className="py-2"><a href="#" className="hover:text-rosesecondary">Blog Detail Page</a></li>
                            </ul>
                        </nav>
                    )}

                    <div className="fixed bottom-10 h-[30vh] text-black py-5 w-full z-50">
                        <div className="container mx-4">
                            <div className="justify-start items-center float-start">
                                <div>
                                    <p className="font-light">Have any questions? +215 2145 2154</p>
                                </div>
                                <div className="righttopbar mt-5">
                                    <ul className="flex flex-wrap justify-center space-x-7">
                                        <li><a href="#" className="hover:text-rosesecondary"><FaFacebook /></a></li>
                                        <li><a href="#" className="hover:text-rosesecondary"><FaTwitter /></a></li>
                                        <li><a href="#" className="hover:text-rosesecondary"><FaPinterest /></a></li>
                                        <li><a href="#" className="hover:text-rosesecondary"><FaLinkedin /></a></li>
                                    </ul>
                                </div>

                                <a href="/"
                                    className="w-[150px] mt-6 mx-16 relative inline-flex items-center justify-center px-10 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
       before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
       hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
       after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
       hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
       before:-z-10 after:-z-10 z-10">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {/* Header End */}


            {/* Hero Section Start */}

            <Breadcrumb />
            {/* Hero Section End */}


            {/* Agency Start*/}
            <div className="section-agency-benefit flex items-center justify-center md:pt-3 text-darkblue mt-20">
                <div className="container flex items-center justify-start px-0">
                    <div className="flex flex-col lg:flex-row max-w-6xl h-auto lg:h-[600px] items-start w-full">
                        {/* Content */}
                        <div className="w-full lg:w-[60%] flex items-start justify-start lg:pr-8">
                            <div className="flex items-start justify-start lg:p-12 p-8 w-full">
                                <div className="w-full flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                                        We Have 21 Years of <br /> Experience
                                    </h3>
                                    <div className="flex w-full h-1">
                                        <div className="w-[10%] h-[50%] bg-black"></div>
                                        <div className="w-[10%] h-[50%] bg-red-500"></div>
                                    </div>
                                    <br />
                                    <p className="mb-4 font-light text-lg">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                    </p>
                                    <p className="mb-6 font-light text-lg">
                                        In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                    </p>
                                    <a href="/"
                                        className="w-[180px] relative inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
before:-z-10 after:-z-10 z-10">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Image */}
                        <div className="w-full lg:w-[40%] md:w-full sm:w-full flex items-center justify-center lg:pl-8 mt-8 lg:mt-0">
                            <div className="relative h-auto w-full max-w-[400px] md:max-w-[400px] sm:max-w-[300px] px-4">
                                <Image
                                    src="/img1.jpg"
                                    alt="Security Img"
                                    className="object-cover rounded-lg shadow-md w-full h-auto"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <a
                                        className="video-popup bg-rose p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                                        href="https://www.youtube.com/watch?v=k30tMU5XdTw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="text-darkblue text-3xl"><FaVideo /></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Agency End */}


            {/* Guard Start */}
            <div className="section-team mt-10 pt-8 pb-10">
                <div className="container mx-auto px-4 mt-5">
                    <div className="flex justify-center mb-12">
                        <div className="text-center">
                            <div className="section-title">
                                <h2 className="text-4xl font-bold mb-4 text-darkblue">Our Guards</h2>
                                <div className="flex w-full h-0.5 justify-center items-center mb-4">
                                    <div className="w-[10%] h-full bg-black"></div>
                                    <div className="w-[5%] h-[4px] bg-rosesecondary"></div>
                                    <div className="w-[10%] h-full bg-black"></div>
                                </div>
                                <p className="font-light text-darkblue">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do <br /> eiusmod tempor incididunt ut labore
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Start Team Area */}
                    <div className="flex flex-wrap -mx-4">
                        {guards.map((guard) => (
                            <div key={guard.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden group hover:bg-darkblue hover:text-mild">
                                    <a href="#">
                                        <div className="overflow-hidden">
                                            <Image
                                                src={guard.image}
                                                alt={`${guard.name} Image`}
                                                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:translate-x-1 group-hover:rotate-3"
                                                width={800}
                                                height={600}
                                            />
                                        </div>
                                    </a>
                                    <hr className='text-mild' />
                                    <div className="p-4 text-center">
                                        <h4 className="text-xl font-bold"><a href="#">{guard.name}</a></h4>
                                        <span className="">{guard.position}</span>
                                        <hr className='text-mild mt-3' />
                                        <ul className="flex justify-center mt-4 space-x-4">
                                            <li><a href="#" className="hover:text-rosesecondary"><FaFacebook /></a></li>
                                            <li><a href="#" className="hover:text-rosesecondary"><FaTwitter /></a></li>
                                            <li><a href="#" className="hover:text-rosesecondary"><FaPinterest /></a></li>
                                            <li><a href="#" className="hover:text-rosesecondary"><FaLinkedin /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End Team Area */}
                </div>
            </div>

            {/* Guard End */}


            {/* Footer Start */}
            <footer className="bg-mild text-footertext">
                <div className="sm:px-4 lg:px-8 my-5 pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">ABOUT <span className="text-rosesecondary">US</span></h5>
                            <p className="text-sm leading-7">We offer a range of services designed to meet your needs, ensuring quality and professionalism at every step.</p>
                        </div>

                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">CONTACT <span className="text-rosesecondary">US</span></h5>
                            <p className="text-sm leading-7">Your address goes here, <br /> Street Crossroad123.</p>
                            <div className="text-sm mt-4 leading-7">
                                <p>P : +99 55 66 88 526</p>
                                <p>F : +55 44 77 62</p>
                                <p>E : <a href="mailto:info@yourdomain.com" className="hover:underline">info@yourdomain.com</a></p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">QUICK <span className="text-rosesecondary leading-7">LINKS</span></h5>
                            <ul className="text-sm space-y-2 leading-7">
                                <li><a href="#" className="hover:text-rose">Our Services</a></li>
                                <li><a href="#" className="hover:text-rose">Our Company</a></li>
                                <li><a href="#" className="hover:text-rose">Vision & Mission</a></li>
                                <li><a href="#" className="hover:text-rose">Our Products</a></li>
                                <li><a href="#" className="hover:text-rose">Our Team</a></li>
                            </ul>
                        </div>

                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">NEWSLETTER <span className="text-rosesecondary">NOW</span></h5>
                            <p className="text-sm mb-4 leading-7">Stay updated with the latest news and offers by subscribing to our newsletter.</p>
                            <div className="flex mb-4">
                                <input type="email" className="w-full max-w-[200px] p-2 rounded-l-md border border-gray-300 focus:border-darkblue hover:border-darkblue" />
                                <button className="bg-rose text-white px-4 rounded-r-md hover:bg-rosesecondary leading-7"><FaPaperPlane /></button>
                            </div>
                            <div className="flex space-x-2">
                                <span className="border-solid p-2 hover:bg-gray-200 group"><a href="#" className="text-gray group-hover:text-rosesecondary"><FaFacebook /></a></span>
                                <span className="border-solid p-2 hover:bg-gray-200 group"><a href="#" className="text-gray group-hover:text-rosesecondary"><FaTwitter /></a></span>
                                <span className="border-solid p-2 hover:bg-gray-200 group"><a href="#" className="text-gray group-hover:text-rosesecondary"><FaGooglePlusG /></a></span>
                                <span className="border-solid p-2 hover:bg-gray-200 group"><a href="#" className="text-gray group-hover:text-rosesecondary"><FaPinterest /></a></span>
                                <span className="border-solid p-2 hover:bg-gray-200 group"><a href="#" className="text-gray group-hover:text-rosesecondary"><FaLinkedin /></a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-gray bg-mildsecondary py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="text-center">
                                <p>Copyright © by <a href="#" className="text-rosesecondary hover:underline">Safe Forever Web</a>. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer End */}
        </main >
    )
};

export default Page;
