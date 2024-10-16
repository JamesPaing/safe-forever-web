'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '../breadcrumb';
import Image from 'next/image';
import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaLinkedin,
    FaPaperPlane,
    FaGooglePlusG,
    FaCalendar,
    FaUser,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Page = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [menuState, setMenuState] = useState('main');
    const [mounted, setMounted] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);

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
    const blogPosts = [
        {
            id: 1,
            title: 'ဝန်ထမ်းထူးချွန်ဆု',
            image: '/bp1.jpg',
            date: 'Aug 4, 2024',
            author: 'Admin',
            excerpt: `Save Forever (CEO)U Ye Zaw Aung နှင့် The central SSCO team မှ The Central Site ဝန်ထမ်းထူးချွန်ဆုရ SSV နှင့် Security Staff 3 ဦးအား ဂုဏ်ပြုမှတ်တမ်းလွှာနှင့်တကွ ဆုငွေများ ချီးမြှင့်ခြင်း`,
        },
        {
            id: 2,
            title: '4th year anniversary ',
            image: '/bp2.jpg',
            date: 'June 25, 2024',
            author: 'Admin',
            excerpt: `Safe Forever ကုမ္ပဏီနှစ်ပတ်လည် အထိမ်းအမှတ်🎉
ဝန်ထမ်းများအား စတုဒီသာ ဒံပေါက်များကျွေးမွေးခြင်းအလှူ 😊
နောင်နှစ်ပေါင်းများစွာ အောင်မြင်သော ကုမ္ပဏီအဖြစ် ထာဝရ ရပ်တည်နိုင်၍ မျှော်မှန်းချက်နှင့် ရည်မှန်းချက်များ တစ်ထပ်တည်းကျပါစေလို့
Safe Forever Admin Team  မှ ဆုတောင်းမေတ္တာ ပို့သအပ်ပါသည်`,
        },
        {
            id: 3,
            title: 'New Site',
            image: '/sf6.jpg',
            date: 'April 04, 2024',
            author: 'Admin',
            excerpt:
                'ယုံကြည်စွာအပ်နှံလာသော လူကြီးမင်းတို့၏ အိမ်/အဆောက်အဦ/ ရုံးခန်း/ ဂိုဒေါင်/ ဟိုတယ်/ စားသောက်ဆိုင်/အရောင်းဆိုင်/ စက်ရုံ/ အလုပ်ရုံ အစရှိသည်တို့၏ လုံခြုံရေးအတွက် ကုမ္ပဏီ၏ ဆောင်ပုဒ်နှင့်အညီ ၂၄ နာရီ နေ့/ည အထူးကြိုးစားဆောင်ရွက်လျက်ရှိပါတယ်',
        },
        {
            id: 4,
            title: 'နှစ်ပါတ်လည်',
            image: '/bp3.jpg',
            date: 'July 19, 2024',
            author: 'Admin',
            excerpt:
                'ကုမ္ပဏီနှစ်ပါတ်လည် ထူးချွန်ဆုပေးပွဲနှင့် နှစ်ပြည့်ဝန်ထမ်းများအား ဂုဏ်ပြုချီးမြှင့်ခြင်း အခမ်းအနားပြုလုပ်ခြင်း မှတ်တမ်း ဓာတ်ပုံများ',
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

            {/*Latest Blog Start */}
            <div className="section-post-grid section-pt section-pb-90 bg-white my-10 py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 text-darkblue">
                        <h2 className="text-4xl font-bold mb-4 text-darkblue">
                            Latest Blog Posts
                        </h2>
                        <div className="flex w-full h-0.5 justify-center items-center mb-4">
                            <div className="w-[4%] h-full bg-black"></div>
                            <div className="w-[3%] h-[4px] bg-rosesecondary"></div>
                            <div className="w-[4%] h-full bg-black"></div>
                        </div>
                        <p className="font-light text-darkblue">
                            Our blog posts cover a wide range of topics,{' '}
                            <br className="hidden sm:inline" /> from security
                            tips and industry trends to company updates
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md mb-4 sm:mb-6 md:mb-8 flex flex-col h-full"
                            >
                                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        // layout="fill"
                                        width={800}
                                        height={400}
                                        objectFit="cover"
                                        className="w-full h-full object-scale-down"
                                    />
                                </div>
                                <div className="flex-grow flex flex-col justify-between p-3 sm:p-4">
                                    <div>
                                        <h4 className="mb-2 sm:mb-3">
                                            <Link
                                                href={`/posts/blog-detail/${post.id}`}
                                                className="text-lg sm:text-2xl text-darkblue font-bold hover:text-rose transition-colors line-clamp-2"
                                            >
                                                {post.title}
                                            </Link>
                                        </h4>

                                        <ul className="flex flex-wrap text-xs sm:text-sm md:text-base text-darkblue mb-2 sm:mb-3 md:mb-4 space-x-2 sm:space-x-3 md:space-x-4">
                                            <li className="flex items-center mb-1 sm:mb-0">
                                                <FaCalendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                                                <span className="truncate text-darkblue hover:text-rose text-xs sm:text-sm md:text-base font-light">
                                                    {post.date}
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <FaUser className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mx-1 sm:mx-1.5 md:mx-2" />
                                                <span>By : </span>
                                                <span className="truncate text-darkblue hover:text-rose  font-light">
                                                    {' '}
                                                    {post.author}
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="h-20 sm:h-20 ">
                                            <p className="text-darkblue font-semibold">
                                                {post.excerpt.slice(0, 170)}
                                                ...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-2 sm:mt-3 md:mt-4">
                                        <a
                                            href="/posts/blog-detail"
                                            className="inline-block px-5 py-3 rounded-full text-white bg-rose hover:bg-darkblue transition-colors duration-300 float-start"
                                        >
                                            READ MORE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*Latest Blog End */}

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
