'use client';
import { usePathname } from 'next/navigation';
import Breadcrumb from '../breadcrumb';
import Image from 'next/image';
import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaLinkedin,
    FaPaperPlane,
    FaGooglePlusG,
    FaVideo,
} from 'react-icons/fa';
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
    const pathname = usePathname();
    const services = [
        {
            id: 1,
            title: 'Home Security',
            description: '24/7 Monitoring for the Security of Your Home.',
            image: '/sf3.jpg',
        },
        {
            id: 2,
            title: 'Building Security',
            description:
                'Comprehensive security solutions for businesses of all sizes.',
            image: '/sf10.jpg',
        },
        {
            id: 3,
            title: 'Office Security',
            description:
                'Monitoring for the Security of Office Assets and Staff.',
            image: '/sf1.jpg',
        },
        {
            id: 4,
            title: 'Warehouse Security',
            description:
                'Safely monitoring the warehouse where goods are stored to protect against unauthorized access.',
            image: '/sf11.jpg',
        },
        {
            id: 5,
            title: 'Hotel Security',
            description:
                'Monitoring the hotel environment to ensure the security of guests and staff.',
            image: '/sf5.jpg',
        },
        {
            id: 6,
            title: 'Restaurant Security',
            description:
                'Creating a secure and trustworthy environment in the restaurant',
            image: '/sf6.jpg',
        },
        {
            id: 7,
            title: 'Store Security',
            description: 'Monitoring to prevent theft in the retail store',
            image: '/sf8.jpg',
        },
        {
            id: 8,
            title: 'Factory Security',
            description:
                'Monitoring to ensure the security of equipment and workers in the factory',
            image: '/sf7.jpg',
        },
        {
            id: 9,
            title: 'Workshop Security',
            description:
                'Monitoring to ensure the security of tools and workers in the workshop',
            image: '/sf1.jpg',
        },
    ];

    if (!mounted) {
        return null;
    }

    return (
        <main className="scroll-smooth">
            {/* Header Start */}

            <header>
                {/* Header Top */}
                <div className="bg-gray text-white py-4 hidden lg:block">
                    <div className="container mx-auto px-[55px]">
                        <div className="flex justify-between items-center">
                            <div className="lefttopbar">
                                <p>Have any questions? +959450703535</p>{' '}
                            </div>
                            <div className="righttopbar">
                                <ul className="flex space-x-7">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-rosesecondary"
                                        >
                                            <FaFacebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-rosesecondary"
                                        >
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-rosesecondary"
                                        >
                                            <FaPinterest />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-rosesecondary"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                    <li className="pl-10">
                                        <a
                                            href="/"
                                            className="hover:text-rosesecondary"
                                        >
                                            {/* @ts-ignore */}
                                            <img src="/eng.png" width={17} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/mm"
                                            className="hover:text-rosesecondary"
                                        >
                                            <img src="/mm.png" width={17} />
                                        </a>
                                    </li>
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
                                <a
                                    href="/"
                                    className={`hover:text-rosesecondary border-spacing-1 p-3 ${
                                        pathname === '/'
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    HOME
                                </a>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] h-auto hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2">
                                        <a
                                            href="/"
                                            className="hover:text-rosesecondary"
                                        >
                                            Home One
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a
                                            href="/"
                                            className="hover:text-rosesecondary"
                                        >
                                            Boxed Layout Page
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="about-us"
                                    className={`hover:text-rosesecondary p-3 ${
                                        pathname === '/about-us'
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    ABOUT
                                </a>
                            </li>
                            <li className="relative group">
                                <span
                                    className={`hover:text-rosesecondary p-3 ${
                                        pathname.startsWith('/services')
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    SERVICES
                                </span>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2">
                                        <a
                                            href="services"
                                            className="hover:text-rosesecondary"
                                        >
                                            Service Page
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a
                                            href="services/service-detail"
                                            className="hover:text-rosesecondary"
                                        >
                                            Service Detail Page
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <span
                                    className={`hover:text-rosesecondary p-3 ${
                                        pathname.startsWith('/posts')
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    BLOG
                                </span>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2">
                                        <a
                                            href="posts"
                                            className="hover:text-rosesecondary"
                                        >
                                            Blog Page
                                        </a>
                                    </li>
                                    <li className="py-2">
                                        <a
                                            href="posts/blog-detail"
                                            className="hover:text-rosesecondary"
                                        >
                                            Blog Detail Page
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="contact-us"
                                    className={`hover:text-rosesecondary p-3 ${
                                        pathname === '/contact-us'
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    CONTACT
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="relative inline-flex items-center justify-center px-10 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
       before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
       hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
       after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
       hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
       before:-z-10 after:-z-10 z-10"
                                >
                                    Get Quotation
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile/Tablet View (hamburger menu) */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleSidebar}
                            className="focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Sidebar for Mobile/Tablet View */}
                <div
                    className={`fixed top-0 left-0 w-[330px] h-full bg-mild text-black transition-transform duration-300 ease-in-out z-50 ${
                        sidebarVisible ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="p-5">
                        <button onClick={toggleSidebar} className="text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {menuState === 'main' && (
                        <nav className="flex flex-col space-y-4 p-5">
                            <div className="relative">
                                <button
                                    onClick={() => showSubMenu('homeSubmenu')}
                                    className={`flex items-center justify-between w-full hover:text-rosesecondary py-2 ${
                                        pathname === '/'
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    HOME
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <a
                                href="/about-us/"
                                className={`hover:text-rosesecondary py-2 ${
                                    pathname === '/about-us'
                                        ? 'text-rosesecondary'
                                        : ''
                                }`}
                            >
                                ABOUT
                            </a>
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        showSubMenu('serviceSubmenu')
                                    }
                                    className={`flex items-center justify-between w-full hover:text-rosesecondary py-2 ${
                                        pathname.startsWith('/services')
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    SERVICES
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => showSubMenu('blogSubmenu')}
                                    className={`flex items-center justify-between w-full hover:text-rosesecondary py-2 ${
                                        pathname.startsWith('/posts')
                                            ? 'text-rosesecondary'
                                            : ''
                                    }`}
                                >
                                    BLOG
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <a
                                href="/contact-us/"
                                className={`hover:text-rosesecondary py-2 ${
                                    pathname === '/contact-us'
                                        ? 'text-rosesecondary'
                                        : ''
                                }`}
                            >
                                CONTACT
                            </a>
                        </nav>
                    )}

                    {menuState === 'homeSubmenu' && (
                        <nav className="bg-mild flex flex-col space-y-4 p-5">
                            <button
                                onClick={goBackToMainMenu}
                                className={`flex items-center justify-between w-full hover:text-rosesecondary py-2 ${
                                    pathname === '/' ? 'text-rosesecondary' : ''
                                }`}
                            >
                                HOME
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0-3.75-3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                            <ul className="bg-mild text-black">
                                <li className="py-2">
                                    <a
                                        href="/"
                                        className="hover:text-rosesecondary"
                                    >
                                        Home One
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="/"
                                        className="hover:text-rosesecondary"
                                    >
                                        Boxed Layout Page
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}

                    {menuState === 'serviceSubmenu' && (
                        <nav className="bg-mild flex flex-col space-y-4 p-5">
                            <button
                                onClick={goBackToMainMenu}
                                className={`flex items-center justify-between w-full hover:text-rosesecondary py-2 ${
                                    pathname.startsWith('/services')
                                        ? 'text-rosesecondary'
                                        : ''
                                }`}
                            >
                                SERVICES
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0-3.75-3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                            <ul className="bg-mild text-black">
                                <li className="py-2">
                                    <a
                                        href="services"
                                        className="hover:text-rosesecondary"
                                    >
                                        Service Page
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="services/service-detail"
                                        className="hover:text-rosesecondary"
                                    >
                                        Service Detail Page
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}

                    {menuState === 'blogSubmenu' && (
                        <nav className="bg-mild flex flex-col space-y-4 p-5">
                            <button
                                onClick={goBackToMainMenu}
                                className={`flex items-center justify-between w-full hover:text-rosesecondary py-2 ${
                                    pathname.startsWith('/posts')
                                        ? 'text-rosesecondary'
                                        : ''
                                }`}
                            >
                                BLOG
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0-3.75-3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                            <ul className="bg-mild text-black">
                                <li className="py-2">
                                    <a
                                        href="posts"
                                        className="hover:text-rosesecondary"
                                    >
                                        Blog Page
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a
                                        href="posts/blog-detail"
                                        className="hover:text-rosesecondary"
                                    >
                                        Blog Detail Page
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}

                    <div className="fixed bottom-10 h-[30vh] text-black py-5 w-full z-50">
                        <div className="container mx-4">
                            <div className="justify-start items-center float-start">
                                <div>
                                    <p className="font-light">
                                        Have any questions? +215 2145 2154
                                    </p>
                                </div>
                                <div className="righttopbar mt-5">
                                    <ul className="flex flex-wrap justify-center space-x-7">
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-rosesecondary"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-rosesecondary"
                                            >
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-rosesecondary"
                                            >
                                                <FaPinterest />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="hover:text-rosesecondary"
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <a
                                    href="/"
                                    className="w-[190px] mt-6 mx-16 relative inline-flex items-center justify-center px-10 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
       before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
       hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
       after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
       hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
       before:-z-10 after:-z-10 z-10"
                                >
                                    Get Quotation
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

            {/* Our Services Start */}

            <div className="section-service bg-mild py-10 mt-10">
                <div className="container mx-auto px-4 my-10">
                    <div className="text-center mb-12 text-darkblue">
                        <h2 className="text-4xl font-bold mb-4 text-darkblue">
                            Our Services
                        </h2>
                        <div className="flex w-full h-0.5 justify-center items-center mb-4">
                            <div className="w-[4%] h-full bg-black"></div>
                            <div className="w-[3%] h-[4px] bg-rosesecondary"></div>
                            <div className="w-[4%] h-full bg-black"></div>
                        </div>
                        <p className="font-light text-darkblue">
                            In accordance with the company's motto, we are
                            working diligently 24 hours a day,{' '}
                            <br className="hidden sm:inline" /> both day and
                            night, to ensure the security of your entrusted
                            home, building, office, warehouse,{' '}
                            <br className="hidden sm:inline" /> hotel,
                            restaurant, retail store, factory, and workplace
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8 flex flex-col h-full">
                                    <div className="relative w-full h-48 sm:h-56 lg:h-72 xl:h-80 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between p-6 sm:p-4 xs:p-3">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <h4 className="mb-4 sm:text-lg xs:text-base">
                                                <a
                                                    href={`./${service.id}`}
                                                    className="text-darkblue hover:text-rose transition-colors text-2xl font-semibold"
                                                >
                                                    {service.title}
                                                </a>
                                            </h4>
                                            <p className="font-light mx-auto xs:text-xs max-w-xs">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="text-center mt-auto">
                                            <a
                                                href="/services"
                                                className="relative inline-flex items-center justify-center px-6 py-3 rounded-full text-darkblue hover:text-rose bg-none text-base font-semibold overflow-hidden transition-all duration-300 ease-in-out 
                        before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
                        hover:before:skew-x-5 hover:before:translate-x-full hover:before:scale-x-100 
                        after:content-[''] after:absolute after:inset-0 after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
                        hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
                        before:-z-10 after:-z-10 z-10
                        sm:text-sm sm:px-4 sm:py-2
                        xs:text-xs xs:px-3 xs:py-1.5"
                                            >
                                                READ MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Services End */}

            {/* Footer Start */}
            <footer className="bg-mild text-footertext">
                <div className="sm:px-4 lg:px-8 my-5 pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">
                                ABOUT{' '}
                                <span className="text-rosesecondary">US</span>
                            </h5>
                            <p className="text-sm leading-7">
                                We offer a range of services designed to meet
                                your needs, ensuring quality and professionalism
                                at every step.
                            </p>
                        </div>

                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">
                                CONTACT{' '}
                                <span className="text-rosesecondary">US</span>
                            </h5>
                            <p className="text-sm leading-7">
                                No 291,Room 5B,5 th Floor, Yazar Dirit Road,{' '}
                                <br />
                                No.7 Ward,South Okkalapa Tsp, Yangon, Myanmar
                            </p>
                            <div className="text-sm mt-4 leading-7">
                                <p>P : +95 9 45070 3535</p>
                                {/* <p>F : +55 44 77 62</p> */}
                                <p>
                                    E :{' '}
                                    <a
                                        href="mailto:info@yourdomain.com"
                                        className="hover:underline"
                                    >
                                        safeforever.services@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">
                                QUICK{' '}
                                <span className="text-rosesecondary leading-7">
                                    LINKS
                                </span>
                            </h5>
                            <ul className="text-sm space-y-2 leading-7">
                                <li>
                                    <a href="#" className="hover:text-rose">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-rose">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-rose">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-rose">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-rose">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex flex-col px-4 mb-5">
                            <h5 className="text-lg font-bold mb-4 leading-7">
                                NEWSLETTER{' '}
                                <span className="text-rosesecondary">NOW</span>
                            </h5>
                            <p className="text-sm mb-4 leading-7">
                                Stay updated with the latest news and offers by
                                subscribing to our newsletter.
                            </p>
                            <div className="flex mb-4">
                                <input
                                    type="email"
                                    className="w-full max-w-[200px] p-2 rounded-l-md border border-gray-300 focus:border-darkblue hover:border-darkblue"
                                />
                                <button className="bg-rose text-white px-4 rounded-r-md hover:bg-rosesecondary leading-7">
                                    <FaPaperPlane />
                                </button>
                            </div>
                            <div className="flex space-x-2">
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a
                                        href="#"
                                        className="text-gray group-hover:text-rosesecondary"
                                    >
                                        <FaFacebook />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a
                                        href="#"
                                        className="text-gray group-hover:text-rosesecondary"
                                    >
                                        <FaTwitter />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a
                                        href="#"
                                        className="text-gray group-hover:text-rosesecondary"
                                    >
                                        <FaGooglePlusG />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a
                                        href="#"
                                        className="text-gray group-hover:text-rosesecondary"
                                    >
                                        <FaPinterest />
                                    </a>
                                </span>
                                <span className="border-solid p-2 hover:bg-gray-200 group">
                                    <a
                                        href="#"
                                        className="text-gray group-hover:text-rosesecondary"
                                    >
                                        <FaLinkedin />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-gray bg-mildsecondary py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div className="text-center">
                                <p>
                                    Copyright © by{' '}
                                    <a
                                        href="#"
                                        className="text-rosesecondary hover:underline"
                                    >
                                        Safe Forever Co,. Ltd
                                    </a>
                                    . All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer End */}
        </main>
    );
};

export default Page;
