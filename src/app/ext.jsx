'use client';

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaPaperPlane, FaGooglePlusG } from 'react-icons/fa';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
SwiperCore.use([Navigation]);
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [menuState, setMenuState] = useState('main');

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <button className="slick-arrow slick-prev"><i className="fa fa-angle-left"></i></button>,
        nextArrow: <button className="slick-arrow slick-next"><i className="fa fa-angle-right"></i></button>,
    };

    return (
        <main>
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
                        <a href="index.html">
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
                    <nav className="hidden lg:flex flex-col lg:flex-row lg:w-3/4 lg:justify-end items-center px-5">
                        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 px-5 py-5">
                            <li className="relative group">
                                <a href="#" className="hover:text-rosesecondary border-spacing-1 p-3">HOME</a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] h-auto hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="#" className="hover:text-rosesecondary">Home One</a></li>
                                    <li className="py-2"><a href="#" className="hover:text-rosesecondary">Boxed Layout Page</a></li>
                                </ul>
                            </li>
                            <li><a href="/src/app/about-us/page.jsx" className="hover:text-rosesecondary p-3">ABOUT</a></li>
                            <li className="relative group">
                                <a href="/src/app/services/page.jsx" className="hover:text-rosesecondary p-3">SERVICES</a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="#" className="hover:text-rosesecondary">Service Page</a></li>
                                    <li className="py-2"><a href="#" className="hover:text-rosesecondary">Service Detail Page</a></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <a href="/src/app/posts/page.jsx" className="hover:text-rosesecondary p-3">BLOG</a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="#" className="hover:text-rosesecondary">Blog Page</a></li>
                                    <li className="py-2"><a href="#" className="hover:text-rosesecondary">Blog Detail Page</a></li>
                                </ul>
                            </li>
                            <li><a href="/src/app/contact-us/page.jsx" className="hover:text-rosesecondary p-3">CONTACT</a></li>
                            <li>
                                <a className="btn bg-rosesecondary text-black hover:bg-rose hover:text-white px-9 p-3 rounded-full transition-transform duration-300 ease-linear" href="#">
                                    Buy now
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
                <div className={`fixed top-0 left-0 w-[300px] h-full bg-mild text-black transition-transform duration-300 ease-in-out z-50 ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
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
                            <a href="/src/app/about-us/page.jsx" className="hover:text-rosesecondary py-2">ABOUT</a>
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
                            <a href="/src/app/contact-us/page.jsx" className="hover:text-rosesecondary py-2">CONTACT</a>
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

                                <a className="btn bg-transparent bg-red-300 hover:bg-rose hover:text-white py-3 rounded-full w-[120px] transition-transform duration-300 ease-linear flex justify-center mt-5 mx-auto" href="#">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {/* Header End */}


            {/* Hero Section Start */}

            <div className="hero-section section h-[70vh] relative">
                {/* Background Image with reduced opacity */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img1.jpeg')", opacity: 0.9 }}></div>

                {/* Overlay to Highlight Text */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                <div className="container mx-auto h-full relative z-10">
                    <div className="flex items-center h-full" style={{ marginLeft: "70px" }}>
                        <div className="max-w-lg">
                            <div className="hero-content text-left">
                                <h5 className="text-1xl md:text-2xl font-semibold text-rosesecondary">We Provide The Best</h5>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-mild my-4 whitespace-nowrap">
                                    Security Service
                                </h1>
                                <p className="text-mild md:text-lg text-gray-200 mt-5 mb-10">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="contact-us.html" className="btn bg-rosesecondary text-black hover:bg-rose hover:text-white rounded-full px-10 py-3">
                                    Get Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}


            {/* Single Service Start */}
            <div className="bg-gray-100 w-full mb-20">
                <div className="mx-auto">
                    <div className="flex flex-wrap flex-row">

                        {/* Service1 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-mild p-6 shadow-lg h-full flex flex-row">
                                <div className="flex justify-center items-start mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-semibold mb-2">Webcam Security</h4>
                                    <p className="text-gray-700">Access complete visibility through your phone or device. We provide a complete range of security solutions, day and night vision to improve security & enhance capabilities.</p>
                                </div>
                            </div>
                        </div>
                        {/* Service1 */}

                        {/* Service2 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-graysecondary p-6 shadow-lg h-full flex flex-row">
                                <div className="flex justify-center items-start mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M12 2.714A12.04 12.04 0 003.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152C18.698 5.5 15.794 4.252 13.5 2.714z" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-semibold mb-2">Security Guard</h4>
                                    <p className="text-gray-700">Alarm services to suit the right environment. From wired to wireless systems, Remote Monitored and Integrating systems. We install all alarms to suit the needs of the location.</p>
                                </div>
                            </div>
                        </div>
                        {/* Service2 */}

                        {/* Service3 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-mild p-6 shadow-lg h-full flex flex-row">
                                <div className="flex justify-center items-start mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-semibold mb-2">Motivated Guards</h4>
                                    <p className="text-gray-700">Combining identification technology with security solutions to give you a high level of protection, whether your business has a single or multi-site entry points.</p>
                                </div>
                            </div>
                        </div>
                        {/* Service3 */}

                        {/* Service4 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-graysecondary p-6 shadow-lg h-full flex flex-row">
                                <div className="flex justify-center items-start mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-xl font-semibold mb-2">24/7 Services</h4>
                                    <p className="text-gray-700">We offer & manage ongoing maintenance of your security systems. Keeping it working as it should be and keeping up with improvements that can be made.</p>
                                </div>
                            </div>
                        </div>
                        {/* Service4 */}

                    </div>
                </div>
            </div>
            {/* Single Service End */}


            {/* Agency Start*/}
            <div className="section-agency-benefit flex items-center justify-center md:pt-3">
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
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                    </p>
                                    <p className="mb-6">
                                        In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                    </p>
                                    <a href="#" className="btn bg-rosesecondary text-base hover:bg-rose hover:text-mild transition-transform duration-300 ease-linear px-6 py-3 rounded-full mt-6 w-[160px] justify-center items-center">
                                        CONTACT US
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
                                    layout="responsive"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <a className="video-popup bg-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform" href="https://www.youtube.com/watch?v=G_G8SdXktHg">
                                        <i className="fa fa-play text-rose"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Agency End */}


            {/* Service Start */}
            <div className="section-service bg-gray-100 py-10  bg-mild">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                        <div className="flex w-full h-0.5 justify-center items-center mb-4">
                            <div className="w-[4%] h-[80%] bg-black"></div>
                            <div className="w-[3%] h-full bg-rose border-2 border-rose"></div>
                            <div className="w-[4%] h-[80%] bg-black"></div>
                        </div>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do <br />
                            eiusmod tempor incididunt ut labore
                        </p>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {/* SwiperSlide 1 */}
                        <SwiperSlide>
                            <div className="service text-center bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="thumb">
                                    <a href="service-details.html">
                                        <Image
                                            src="/img1.jpg"
                                            alt="Security Img"
                                            className="w-full sm:h-[15rem] md:h-[20rem] lg:h-[25rem] object-center"
                                            width={800}
                                            height={300}
                                        />
                                    </a>
                                </div>
                                <div className="content p-6">
                                    <h4 className="text-xl font-semibold mb-2">
                                        <a href="service-details.html">Private/Home Security</a>
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid
                                    </p>
                                    <a
                                        className="text-rose border border-none py-2 px-4 rounded inline-block hover:text-aqua hover:border-aqua transition-colors duration-300 ease-in-out"
                                        href="service-details.html"
                                    >

                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* SwiperSlide 2 */}
                        <SwiperSlide>
                            <div className="service text-center bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="thumb">
                                    <a href="service-details.html">
                                        <Image
                                            src="/img1.jpg"
                                            alt="Transport Security"
                                            className="w-full sm:h-[15rem] md:h-[20rem] lg:h-[25rem] object-center"
                                            width={800}
                                            height={200}
                                        />
                                    </a>
                                </div>
                                <div className="content p-6">
                                    <h4 className="text-xl font-semibold mb-2">
                                        <a href="service-details.html">Transport Security</a>
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid
                                    </p>
                                    <a
                                        className="text-rose border border-none py-2 px-4 rounded inline-block hover:text-aqua hover:border-aqua transition-colors duration-300 ease-in-out"
                                        href="service-details.html"
                                    >

                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* SwiperSlide 3 */}
                        <SwiperSlide>
                            <div className="service text-center bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="thumb">
                                    <a href="service-details.html">
                                        <Image
                                            src="/img1.jpg"
                                            alt="Maintain Security"
                                            className="w-full sm:h-[15rem] md:h-[20rem] lg:h-[25rem] object-center"
                                            width={800}
                                            height={200}
                                        />
                                    </a>
                                </div>
                                <div className="content p-6">
                                    <h4 className="text-xl font-semibold mb-2">
                                        <a href="service-details.html">Maintain Security</a>
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid
                                    </p>
                                    <a
                                        className="text-rose border border-none py-2 px-4 rounded inline-block hover:text-aqua hover:border-aqua transition-colors duration-300 ease-in-out"
                                        href="service-details.html"
                                    >

                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* SwiperSlide 4 */}
                        <SwiperSlide>
                            <div className="service text-center bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="thumb">
                                    <a href="service-details.html">
                                        <Image
                                            src="/img1.jpg"
                                            alt="Business Security"
                                            className="w-full sm:h-[15rem] md:h-[20rem] lg:h-[25rem] object-center"
                                            width={800}
                                            height={200}
                                        />
                                    </a>
                                </div>
                                <div className="content p-6">
                                    <h4 className="text-xl font-semibold mb-2">
                                        <a href="service-details.html">Business Security</a>
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Lorem ipsum dolor sit amet ectetur adipelitl sed do eiusmod tempor incidid
                                    </p>
                                    <a
                                        className="text-rose border border-none py-2 px-4 rounded inline-block hover:text-aqua hover:border-aqua transition-colors duration-300 ease-in-out"
                                        href="service-details.html"
                                    >

                                        READ MORE
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            { /* Service End */}


            {/*Choose Us Start} */}

            <div className="reapir-choose-us py-20 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        {/* Left Side: Why Choose Us */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="reapir-choose-inner py-5">
                                <div className="section-title title-2">
                                    <h2 className="text-3xl font-semibold">Why Choose Us</h2>
                                    <div className="flex w-full h-1 mt-3">
                                        <div className="w-[10%] h-[50%] bg-black"></div>
                                        <div className="w-[10%] h-[50%] bg-red-500"></div>
                                    </div>
                                </div>
                                <div className="choose-resone-inner mt-5">
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                    {/* Single Service */}
                                    <div className="service flex items-start mt-8">
                                        <div className="icons w-12 h-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                            </svg>

                                        </div>
                                        <div className="content mx-10">
                                            <h4 className="text-xl font-semibold">Free Estimate</h4>
                                            <p className="text-gray-600 mt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Single Service */}
                                    <div className="service flex items-start mt-8">
                                        <div className="icons w-12 h-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>

                                        </div>
                                        <div className="content mx-10">
                                            <h4 className="text-xl font-semibold">24/7 Services</h4>
                                            <p className="text-gray-600 mt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Single Service */}
                                    <div className="service flex items-start mt-8">
                                        <div className="icons w-12 h-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                                            </svg>

                                        </div>
                                        <div className="content mx-10">
                                            <h4 className="text-xl font-semibold">Flat Rate Fees</h4>
                                            <p className="text-gray-600 mt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipi elit sed do eiusmod tempor incididunt ut labor et dolore magna aliqua.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Request a Quote */}
                        <div className="w-full lg:w-1/2 px-4 py-5">
                            <div className="bg-mild contact_form_container repair-request-form bg-gray-100 px-6 rounded-lg shadow-md justify-center py-20">
                                <div className="ct-title-2 flex justify-center items-center py-30 mb-10">
                                    <span className="text-3xl font-semibold">Request a Quote</span>
                                </div>

                                <div className="repair-service-form">
                                    <form action="#">
                                        <div className="grid gap-7">
                                            <input
                                                type="text"
                                                className="w-full rounded p-3 focus:outline-none focus:ring-2 focus:ring-rosesecondary"
                                                placeholder="Name*"
                                            />
                                            <input
                                                type="text"
                                                className="w-full rounded p-3 focus:outline-none focus:ring-2 focus:ring-rosesecondary mt-2"
                                                placeholder="Subject*"
                                            />
                                            <textarea
                                                name="message"
                                                className="w-full h-32 rounded p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-rosesecondary mt-2 resize-none"
                                                placeholder="Your Message*"
                                            />
                                            <input
                                                type="submit"
                                                className="w-full bg-rosesecondary text-white mt-3 py-3 rounded hover:bg-rose transition"
                                                value="Submit Inquiry"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Choose Us End*/}


            {/* NewsLetter Start */}
            <div
  className="section-newsletter section-ptb bg-cover bg-center py-12 mb-20 mx-3 flex items-center justify-center"
  style={{ backgroundImage: `url('/img1.jpeg')`, height: '300px' }}
>
  <div className="relative container mx-auto px-4 z-10 flex flex-col items-center justify-center h-full">
    <div className="flex flex-wrap justify-center items-center text-center md:text-left">
      <div className="w-full md:w-7/12 xl:w-1/2 mb-8 md:mb-0 px-4 md:px-0">
        <div className="title text-white">
          <h4 className="text-lg font-semibold text-center md:text-left">Join Our Volunteer</h4>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-center md:text-left">
            Subscribe to Our Newsletter.
          </h2>
        </div>
      </div>

      <div className="w-full md:w-5/12 xl:w-1/2 px-4 md:px-0">
        <form action="#" className="flex justify-center w-full">
          <div className="input-box flex flex-col sm:flex-row items-center w-full space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email*"
              className="py-3 px-4 italic placeholder:italic focus:outline-none border border-mild bg-transparent w-full sm:w-[350px] md:w-[400px]"
            />
            <button
              type="submit"
              className="bg-rosesecondary hover:bg-rose text-black hover:text-mild py-3 px-6 transition-transform duration-300 ease-linear w-full sm:w-[180px]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
            {/* NewsLetter End */}


            {/* Blog Start */}


            {/* Blog End */}


            {/* Footer Start */}

            <footer className="bg-mildgray text-footertext p-5">
                <div className="container mx-auto pr-1 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col px-2 md:px-4 lg:px-6">
                            <h5 className="text-lg font-bold mb-4 leading-7">ABOUT <span className="text-rosesecondary">US</span></h5>
                            <p className="text-sm leading-7">We offer a range of services designed to meet your needs, ensuring quality and professionalism at every step.</p>
                        </div>

                        <div className="flex flex-col px-2  md:px-4 lg:px-6">
                            <h5 className="text-lg font-bold mb-4 leading-7">CONTACT <span className="text-rosesecondary">US</span></h5>
                            <p className="text-sm leading-7">Your address goes here, <br /> Street Crossroad123.</p>
                            <div className="text-sm mt-4 leading-7">
                                <p>P : +99 55 66 88 526</p>
                                <p>F : +55 44 77 62</p>
                                <p>E : <a href="mailto:info@yourdomain.com" className="hover:underline">info@yourdomain.com</a></p>
                            </div>
                        </div>

                        <div className="flex flex-col px-2  md:px-4 lg:px-6">
                            <h5 className="text-lg font-bold mb-4 leading-7">QUICK <span className="text-rosesecondary leading-7">LINKS</span></h5>
                            <ul className="text-sm space-y-2 leading-7">
                                <li><a href="#" className="hover:text-blue-500">Our Services</a></li>
                                <li><a href="#" className="hover:text-blue-500">Our Company</a></li>
                                <li><a href="#" className="hover:text-blue-500">Vision & Mission</a></li>
                                <li><a href="#" className="hover:text-blue-500">Our Products</a></li>
                                <li><a href="#" className="hover:text-blue-500">Our Team</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col px-2  md:px-4 lg:px-6">
                            <h5 className="text-lg font-bold mb-4 leading-7">NEWSLETTER <span className="text-rosesecondary">NOW</span></h5>
                            <p className="text-sm mb-4 leading-7">Stay updated with the latest news and offers by subscribing to our newsletter.</p>
                            <div className="flex mb-4">
                                <input type="email" className="w-full p-2 rounded-l-md" />
                                <button className="bg-rose text-white px-4 rounded-r-md hover:bg-rosesecondary leading-7">
                                    <FaPaperPlane />
                                </button>
                            </div>
                            <div className="flex">
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a href="#" className="text-gray group-hover:text-rosesecondary">
                                        <FaFacebook />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a href="#" className="text-gray group-hover:text-rosesecondary">
                                        <FaTwitter />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a href="#" className="text-gray group-hover:text-rosesecondary">
                                        <FaGooglePlusG />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a href="#" className="text-gray group-hover:text-rosesecondary">
                                        <FaPinterest />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a href="#" className="text-gray group-hover:text-rosesecondary">
                                        <FaLinkedin />
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 text-gray-700 py-4">
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
    );
}
