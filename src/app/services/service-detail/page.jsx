'use client';

import Breadcrumb from '../../breadcrumb';
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

    const [activeTab, setActiveTab] = useState('tab-list-2')

    const services = [
        {
            id: 'tab-list-1',
            title: 'Private Security',
            image: '/img1.jpg',
            content1: 'Private security is a crucial aspect of modern safety measures. It involves professional security services tailored to protect individuals, properties, and assets. Our private security solutions are designed to provide peace of mind through comprehensive risk assessment, strategic planning, and expert implementation.',
            content2: 'We offer a range of private security services including personal bodyguards, residential security, and corporate security details. Our team of highly trained professionals is equipped with the latest security technologies and techniques to ensure maximum protection. We understand that each client has unique security needs, and we pride ourselves on delivering customized solutions that address specific concerns and potential threats.',
            content3: 'With our private security services, clients can expect round-the-clock vigilance, rapid response to potential security breaches, and a proactive approach to identifying and mitigating risks. We work closely with our clients to develop security protocols that seamlessly integrate with their lifestyle or business operations, ensuring safety without compromising convenience or privacy.'
        },
        {
            id: 'tab-list-2',
            title: 'Transport Security',
            image: '/slider1.jpeg',
            content1: 'Transport security is an essential component in safeguarding goods, vehicles, and personnel during transit. Our transport security services are designed to protect valuable assets and ensure safe passage from origin to destination. We employ a combination of advanced tracking technologies, secure vehicles, and trained personnel to mitigate risks associated with transportation.',
            content2: 'Our transport security solutions cover a wide range of scenarios, including high-value cargo transport, secure courier services, and armored vehicle operations. We utilize state-of-the-art GPS tracking systems, real-time monitoring, and secure communication channels to maintain constant oversight of transport operations. Our team is trained to handle various situations, from routine deliveries to high-risk transports, ensuring that every journey is completed safely and efficiently.',
            content3: 'In addition to physical security measures, we also provide comprehensive logistics planning and route optimization to minimize potential risks. Our transport security services are tailored to meet the specific needs of each client, whether it is a one-time high-value transport or ongoing secure delivery operations. With our expertise, clients can have confidence in the safety and integrity of their transported goods and personnel.'
        },
        {
            id: 'tab-list-3',
            title: 'Home Security',
            image: '/slider2.jpeg',
            content1: 'Home security is paramount in creating a safe and comfortable living environment. Our home security services offer comprehensive protection for residential properties, giving homeowners peace of mind whether they are at home or away. We provide state-of-the-art security systems, professional monitoring, and expert consultation to safeguard your home and loved ones.',
            content2: 'Our home security solutions include advanced alarm systems, video surveillance, smart home integration, and access control measures. We conduct thorough assessments of your property to identify potential vulnerabilities and design a security plan tailored to your specific needs. Our systems are equipped with features like motion detection, remote monitoring via smartphone apps, and integration with emergency services for rapid response.',
            content3: 'Beyond technology, we also offer personalized security consultations to educate homeowners on best practices for maintaining a secure home environment. This includes advice on physical security measures, creating family emergency plans, and staying vigilant against potential threats. With our home security services, you can rest assured that your home is protected by the most advanced and reliable security measures available.'
        },
        {
            id: 'tab-list-4',
            title: 'Self Security',
            image: '/slider3.jpeg',
            content1: 'Self security is about empowering individuals with the knowledge and skills to protect themselves in various situations. Our self security services focus on personal safety education, situational awareness training, and practical self-defense techniques. We believe that by enhancing an individuals ability to recognize and respond to potential threats, we can significantly improve their overall safety and confidence.',
            content2: 'Our self security programs cover a wide range of topics, including personal safety in public spaces, travel security, cyber security awareness, and basic self-defense moves. We offer both group workshops and one-on-one training sessions, tailored to meet the specific needs and concerns of each participant. Our instructors are experienced security professionals who provide practical, real-world advice and techniques.',
            content3: 'In addition to physical safety, our self security services also address digital safety and privacy protection. We provide guidance on securing personal information online, recognizing and avoiding scams, and maintaining privacy in an increasingly connected world. By combining physical and digital security knowledge, our self security services offer a comprehensive approach to personal safety in today complex environment.'
        },
    ]

    if (!mounted) {
        return null;
    }

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
                            <li><a href="../about-us" className="hover:text-rosesecondary p-3">ABOUT</a></li>
                            <li className="relative group">
                                <span className="hover:text-rosesecondary p-3">SERVICES</span>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="./" className="hover:text-rosesecondary">Service Page</a></li>
                                    <li className="py-2"><a href="./service-detail" className="hover:text-rosesecondary">Service Detail Page</a></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <span className="hover:text-rosesecondary p-3">BLOG</span>
                                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                                    <li className="py-2"><a href="../posts" className="hover:text-rosesecondary">Blog Page</a></li>
                                    <li className="py-2"><a href="../../../posts/blog-detail" className="hover:text-rosesecondary">Blog Detail Page</a></li>
                                </ul>
                            </li>
                            <li><a href="../contact-us" className="hover:text-rosesecondary p-3">CONTACT</a></li>
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
                                <li className="py-2"><a href="/" className="hover:text-rosesecondary">Home One</a></li>
                                <li className="py-2"><a href="/" className="hover:text-rosesecondary">Boxed Layout Page</a></li>
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
                                <li className="py-2"><a href="./" className="hover:text-rosesecondary">Service Page</a></li>
                                <li className="py-2"><a href="./service-detail" className="hover:text-rosesecondary">Service Detail Page</a></li>
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
                                <li className="py-2"><a href="../posts" className="hover:text-rosesecondary">Blog Page</a></li>
                                <li className="py-2"><a href="../posts/blog-detail" className="hover:text-rosesecondary">Blog Detail Page</a></li>
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

            {/* Our Services Start */}
            <div className="section-service bg-mild py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/4">
                            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 mb-8 lg:mb-0">
                                {services.map((service) => (
                                    <li key={service.id} className="flex-shrink-0">
                                        <button
                                            onClick={() => setActiveTab(service.id)}
                                            className={`service-link px-5 py-3 transition-colors w-full text-left ${activeTab === service.id
                                                ? 'bg-gray text-white'
                                                : 'bg-white text-gray hover:bg-gray hover:text-mild'
                                                }`}
                                        >
                                            {service.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-3/4">
                            <div className="tab-content">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`tab-pane ${activeTab === service.id ? 'block' : 'hidden'}`}
                                    >
                                        <div className="service-details-content">
                                            <div className="service-details-lg-image mb-6 w-full">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={800}
                                                    height={400}
                                                    className="rounded-lg w-full h-[400px] object-scale-down"
                                                />
                                            </div>
                                            <div className="service-details-cont">
                                                <h4 className="service-title text-2xl font-bold mb-4">{service.title}</h4>
                                                <p className="mb-4">{service.content1}</p>
                                                <p className="mb-4">{service.content2}</p>
                                                <p>{service.content3}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services End */}

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

                <div className="text-gray py-4">
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
