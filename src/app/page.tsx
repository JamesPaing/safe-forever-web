'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaLinkedin,
    FaPaperPlane,
    FaGooglePlusG,
    FaVideo,
    FaArrowLeft,
    FaCalendar,
    FaArrowRight,
    FaUser,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

    const showSubMenu = (menu: string) => {
        setMenuState(menu);
    };

    const goBackToMainMenu = () => {
        setMenuState('main');
    };

    const pathname = usePathname();

    const services = [
        {
            id: 1,
            title: 'အိမ် Security',
            description:
                'လူကြီးမင်းတို့၏အိမ်၏ လုံခြုံရေးအတွက် ၂၄ နာရီစောင့်ကြည့်ပေးခြင်း။',
            image: '/sf3.jpg',
        },
        {
            id: 2,
            title: 'အဆောက်အဦး Security',
            description:
                'Comprehensive security solutions for businesses of all sizes.',
            image: '/sf10.jpg',
        },
        {
            id: 3,
            title: 'ရုံးခန်း Security',
            description:
                'ရုံးဝင်ပစ္စည်းများနှင့် ဝန်ထမ်းများ၏ လုံခြုံရေးအတွက်စောင့်ကြည့်ပေးခြင်း။',
            image: '/sf1.jpg',
        },
        {
            id: 4,
            title: 'ဂိုဒေါင် Security',
            description:
                'အထည်အလက်များသိမ်းဆည်းထားသော ဂိုဒေါင်ကို လုံခြုံစွာစောင့်ကြည့်ကာ တရားမဝင်ဝင်ရောက်မှုမှ ကာကွယ်ပေးခြင်း။',
            image: '/sf11.jpg',
        },
        {
            id: 5,
            title: 'ဟိုတယ် Security',
            description:
                'ဧည်သည်များနှင့် ဝန်ထမ်းများ၏ လုံခြုံရေးအတွက် ဟိုတယ်ပတ်ဝန်းကျင်ကို စောင့်ကြည့်ကာကွယ်ပေးခြင်း။',
            image: '/sf5.jpg',
        },
        {
            id: 6,
            title: 'စားသောက်ဆိုင် Security',
            description:
                'စားသောက်ဆိုင်တွင် လုံခြုံစိတ်ချရသော ပတ်ဝန်းကျင်တည်ဆောက်ပေးခြင်း။',
            image: '/sf6.jpg',
        },
        {
            id: 7,
            title: 'အရောင်းဆိုင် Security',
            description:
                'အရောင်းဆိုင်တွင် လုယက်မှုမဖြစ်အောင် စောင့်ကြည့်ကာ ကာကွယ်ပေးခြင်း။',
            image: '/sf8.jpg',
        },
        {
            id: 8,
            title: 'စက်ရုံ Security',
            description:
                'စက်ရုံတွင်ရှိသည့် ပစ္စည်းကိရိယာများနှင့် အလုပ်သမားများ၏ လုံခြုံရေးအတွက် စောင့်ကြည့်ကာကွယ်ပေးခြင်း။',
            image: '/sf7.jpg',
        },
        {
            id: 9,
            title: 'အလုပ်ရုံ Security',
            description:
                'အလုပ်ရုံတွင်ရှိသည့် ကိရိယာများနှင့် အလုပ်သမားများ၏ လုံခြုံရေးအတွက် စောင့်ကြည့်ကာကွယ်ပေးခြင်း။',
            image: '/sf1.jpg',
        },
    ];

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    const guards = [
        {
            id: 1,
            name: 'U Ye Zaw Aung',
            position: 'CEO',
            image: '/yzo.jpg',
        },
        {
            id: 2,
            name: 'U Ye Zaw Aung',
            position: 'CEO',
            image: '/yzo.jpg',
        },
        {
            id: 3,
            name: 'U Ye Zaw Aung',
            position: 'CEO',
            image: '/yzo.jpg',
        },
    ];

    return (
        <main className="scroll-smooth">
            {/* Header Start */}

            <header>
                {/* Header Top */}
                <div className="bg-gray text-white py-4 hidden lg:block">
                    <div className="container mx-auto px-[55px]">
                        <div className="flex justify-between items-center">
                            <div className="lefttopbar">
                                <p>Have any questions? +959450703535</p>
                            </div>
                            <div className="righttopbar">
                                <ul className="flex space-x-7">
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://web.facebook.com/profile.php?id=100063777263919"
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

            <div className="hero-section section h-[70vh] relative">
                {/* Background Image with reduced opacity */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/sf3.jpg')",
                        opacity: 0.8,
                    }}
                ></div>

                {/* Overlay to Highlight Text */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                <div className="container mx-auto h-full relative z-10">
                    <div
                        className="flex items-center h-full"
                        style={{ marginLeft: '70px' }}
                    >
                        <div className="max-w-lg">
                            <div className="hero-content text-left">
                                <h5 className="text-1xl md:text-2xl font-semibold text-white">
                                    Your Safety is Our First Priority.
                                </h5>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-mild my-4 whitespace-nowrap">
                                    Safe Forever
                                </h1>
                                <p className="text-mild md:text-lg mt-5 mb-10">
                                    Security Guard Service
                                    {/* လုံခြုံရေးဝန်ဆောင်မှုလိုအပ်လာလျှင်
                                    ကျွန်တော်များ Safe Forever Security Service
                                    ကို သတိရလိုက်ပါခင်ဗျာ. */}
                                </p>
                                <a
                                    href="/"
                                    className="relative inline-flex items-center justify-center px-10 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
   before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
   hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
   after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
   hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
   before:-z-10 after:-z-10 z-10"
                                >
                                    Get Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section End */}

            {/* Single Service Start */}
            <div className="bg-gray-100 w-full mb-20 font-light">
                <div className="mx-auto ">
                    <div className="flex flex-wrap flex-row">
                        {/* Service1 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-mild p-6 shadow-lg flex flex-col h-full">
                                <div className="flex flex-row mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-darkblue">
                                        Reliability
                                    </h4>
                                </div>
                                <div className="flex-grow min-h-0 ml-12">
                                    <p className="text-darkblue">
                                        ကျွန်ုပ်တို့က သင့် လုံခြုံရေးအတွက်
                                        အထောက်အကူဖြစ်စေရန် အမြဲတမ်း
                                        ယုံကြည်စိတ်ချရသော
                                        ဝန်ဆောင်မှုများပေးပါသည်။
                                        သင့်လိုအပ်ချက်များကို အချိန်မှန်နဲ့
                                        တိကျစွာ ဖြည့်ဆည်းဖို့ ကြိုးစားပြီး
                                        သင့်အတွက် အချိန်မရွေး ယုံကြည်စိတ်ချရတဲ့
                                        လုံခြုံရေးကို ဖန်တီးနိုင်ပါသည်။
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service2 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-graysecondary p-6 shadow-lg flex flex-col h-full">
                                <div className="flex flex-row mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75L11.25 15L15 9.75M12 2.714A12.04 12.04 0 003.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152C18.698 5.5 15.794 4.252 13.5 2.714z"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-darkblue">
                                        Security Guard
                                    </h4>
                                </div>
                                <div className="flex-grow min-h-0  ml-12">
                                    <p className="text-darkblue">
                                        ကျွန်ုပ်တို့၏ လုံခြုံရေးဝန်ထမ်းများသည်
                                        သင်၏ အိမ်၊ ရုံးနှင့် အဆောက်အအုံများကို
                                        လုံခြုံစိတ်ချစေရန် အထူးပြင်ဆင်ထားပြီး၊
                                        အရေးပေါ်အခြေအနေများတွင် အထိရောက်ဆုံး
                                        ကာကွယ်နိုင်ရန် ကြိုးစားနေကြသည်။
                                        ၎င်းတို့သည် လုပ်ငန်းခွင်၌ လုံခြုံမှုကို
                                        မြှင့်တင်ရန် စိတ်အားထက်သန်မှုနှင့်
                                        ကျွမ်းကျင်မှုကို ထားရှိထားပါသည်။
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service3 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-mild p-6 shadow-lg flex flex-col h-full">
                                <div className="flex flex-row mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-darkblue">
                                        Motivated Guards
                                    </h4>
                                </div>
                                <div className="flex-grow min-h-0  ml-12">
                                    <p className="text-darkblue">
                                        ကျွန်ုပ်တို့၏ လုံခြုံရေးဝန်ထမ်းများသည်
                                        လုပ်ငန်းအတွက်
                                        အထူးစိတ်အားထက်သန်မှုရှိပြီး၊
                                        လုံခြုံရေးကို အရေးပါတဲ့အရာအဖြစ်
                                        လေးစားလျက် တာဝန်ယူမှုအပြည့်အဝဖြင့်
                                        စောင့်ရှောက်လျက်ရှိကြသည်။
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service4 */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-graysecondary p-6 shadow-lg flex flex-col h-full">
                                <div className="flex flex-row mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-semibold text-darkblue">
                                        24/7 Services
                                    </h4>
                                </div>
                                <div className="flex-grow min-h-0 ml-12">
                                    <p className="text-darkblue">
                                        ၂၄ နာရီ ၇ ရက် ပတ်လုံး
                                        ဝန်ဆောင်မှုပေးခြင်းက ကျွန်ုပ်တို့၏
                                        အဓိကအချက်ဖြစ်ပြီး၊ အချိန်မရွေး
                                        လိုအပ်သည့်အခါတွင် လူကြီးမင်းတို့၏
                                        လုံခြုံရေးနှင့် စိတ်ချရမှုကို
                                        ပေးစွမ်းနိုင်ရန် အစွမ်းကုန်
                                        ကြိုးစားဆောင်ရွက်လျက်ရှိပါသည်။
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service End */}

            {/* Agency Start*/}
            <div className="section-agency-benefit flex items-center justify-center md:pt-3 text-darkblue">
                <div className="container flex items-center justify-start px-0">
                    <div className="flex flex-col lg:flex-row max-w-6xl h-auto lg:h-[600px] items-start w-full">
                        {/* Content */}
                        <div className="w-full lg:w-[60%] flex items-start justify-start lg:pr-8">
                            <div className="flex items-start justify-start lg:p-12 p-8 w-full">
                                <div className="w-full flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                                        Safe Forever လုံခြုံရေးဝန်ဆောင်မှု{' '}
                                        <br /> သင့်အတွက် ထာဝရလုံခြုံမှု
                                    </h3>
                                    <div className="flex w-full h-1">
                                        <div className="w-[10%] h-[50%] bg-black"></div>
                                        <div className="w-[10%] h-[50%] bg-red-500"></div>
                                    </div>
                                    <br />
                                    <p className="mb-4 font-light text-lg">
                                        လူကြီးမင်းတို့ တန်ဖိုးထားတဲ့
                                        အရာရာတိုင်းအတွက် ထာဝရလုံခြုံစေဖို့
                                        မိမိတို့ Safe Forever security service
                                        ကုမ္ပဏီမှ လုံခြုံရေးဆိုင်ရာ Free Survey
                                        များလာရောက်ဆင်းပေးခြင်း၊ အကြံဥာဏ်များ
                                        ဆွေးနွေးတင်ပြခြင်းများဖြင့်
                                        လုံခြုံရေးဝန်ဆောင်မှုများ
                                        ဆောင်ရွက်ပေးလျက်ရှိပါတယ်။ ဤ Video
                                        လေးကတော့ မိမိတို့ Safe Forever
                                        ကုမ္ပဏီဖြင့် လက်တွဲဆောင်ရွက်ခြင်းဖြင့်
                                        ရရှိနိုင်သော အကျိုးကျေးဇူးများဖြစ်ပါတယ်။
                                    </p>
                                    <p className="mb-6 font-light text-lg">
                                        {/* In reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident. */}
                                    </p>
                                    <a
                                        href="/about-us"
                                        className="w-[180px] relative inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full text-white bg-rose overflow-hidden transition-all duration-300 ease-in-out 
   before:content-[''] before:absolute before:inset-0 before:bg-transparent before:transform before:skew-x-12 before:translate-x-1/2 before:transition-transform before:duration-300 before:ease-in-out before:origin-center
   hover:before:skew-x-5 hover:before:translate-x-5 hover:before:scale-x-100 
   after:content-[''] after:absolute after:inset-0 after:bg-darkblue after:transform after:-skew-x-12 after:translate-x-full after:transition-transform after:duration-300 after:ease-in-out after:origin-right 
   hover:after:skew-x-0 hover:after:translate-x-0 hover:after:scale-x-100 
   before:-z-10 after:-z-10 z-10"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-[40%] md:w-full sm:w-full flex items-center justify-center lg:pl-8 mt-8 lg:mt-0">
                            <div className="relative h-auto w-full max-w-[400px] md:max-w-[400px] sm:max-w-[300px] px-4">
                                <Image
                                    src="/sf4.jpg"
                                    alt="Security Img"
                                    className="object-cover rounded-lg shadow-md w-full h-auto"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <a
                                        className="video-popup bg-rose p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
                                        href="https://web.facebook.com/100063777263919/videos/585196322199650"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="text-darkblue text-3xl">
                                            <FaVideo />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Agency End */}

            {/* Service Start */}
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
                            ယုံကြည်စွာအပ်နှံလာသော လူကြီးမင်းတို့၏ အိမ်/အဆောက်အဦ/{' '}
                            <br className="hidden sm:inline" />
                            ရုံးခန်း/ ဂိုဒေါင်/ ဟိုတယ်/
                            စားသောက်ဆိုင်/အရောင်းဆိုင်/{' '}
                            <br className="hidden sm:inline" /> စက်ရုံ/ အလုပ်ရုံ
                            အစရှိသည်တို့၏ လုံခြုံရေးအတွက် ကုမ္ပဏီ၏
                            ဆောင်ပုဒ်နှင့်အညီ{' '}
                            <br className="hidden sm:inline" /> ၂၄ နာရီ နေ့/ည
                            အထူးကြိုးစားဆောင်ရွက်လျက်ရှိပါတယ်
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit sed do <br className="hidden sm:inline" />
                            eiusmod tempor incididunt ut labore */}
                        </p>
                    </div>

                    <div className="relative group">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            loop={true}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                640: { slidesPerView: 1, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                            className="w-full"
                        >
                            {services.map((service) => (
                                <SwiperSlide key={service.id}>
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8 flex flex-col h-full">
                                        <div className="w-full aspect-square relative">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between p-6 sm:p-4 xs:p-3">
                                            <div className="flex flex-col items-center justify-center text-center">
                                                <h4 className="mb-2 sm:text-lg xs:text-base">
                                                    <a
                                                        href="/services"
                                                        className="text-darkblue hover:text-rose transition-colors text-2xl font-semibold"
                                                    >
                                                        {service.title}
                                                    </a>
                                                </h4>
                                                <p className="font-light text-sm mb-4 mx-auto xs:text-xs max-w-xs">
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
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-prev !w-10 !h-10 !text-rose hover:!text-darkblue duration-300 sm:!w-8 sm:!h-8 !left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="swiper-button-next !w-10 !h-10 !text-rose hover:!text-darkblue duration-300 sm:!w-8 sm:!h-8 !right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/*Choose Us Start} */}
            <div className="repair-choose-us py-10 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        {/* Left Side: Why Choose Us */}
                        <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                            <div className="repair-choose-inner py-5">
                                <div className="section-title title-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-darkblue">
                                        Why Choose Us
                                    </h2>
                                    <div className="flex w-full h-1 mt-3">
                                        <div className="w-[10%] h-[50%] bg-black"></div>
                                        <div className="w-[10%] h-[50%] bg-red-500"></div>
                                    </div>
                                </div>
                                <div className="choose-resone-inner mt-5 font-light">
                                    <p className="text-darkblue text-sm sm:text-base">
                                        ၂၄ နာရီ လုံခြုံရေးဝန်ဆောင်မှု၊ Customer
                                        Service အပြည့်အဝ၊ စရိတ်သက်သာခြင်းနှင့်
                                        အရေးပေါ်ကိုင်တွယ်နိုင်သည့်
                                        လုံခြုံရေးဝန်ထမ်းများဖြင့်
                                        စိတ်ချလုံခြုံမှု ရရှိစေသည်။
                                    </p>

                                    {/* Single Service */}
                                    <div className="service flex items-start mt-6 sm:mt-8">
                                        <div className="icons w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="content ml-4 sm:ml-6">
                                            <h4 className="text-lg sm:text-xl font-semibold">
                                                လုံခြုံရေးဝန်ထမ်းပြဿနာများကာကွယ်ခြင်း
                                            </h4>
                                            <p className="text-darkblue mt-2 text-sm sm:text-base">
                                                ကိုယ်ပိုင်လုံခြုံရေးဝန်ထမ်းများ
                                                ဖြစ်လေ့ဖြစ်ထရှိသော
                                                လုပ်ငန်းခွင်မှ ခွင့်ယူမှု၊
                                                နှုတ်ထွက်မှု အစရှိသည့်
                                                လုံခြုံရေးဆိုင်ရာ
                                                လစ်ဟာမှုများအတွက် မိမိတို့
                                                ဝန်ဆောင်မှုကို
                                                အသုံးပြုခြင်းကြောင့် အဆိုပါ
                                                လုံခြုံရေးဆိုင်ရာ အခန်းကဏ္ဍများ
                                                စီစဉ် ဆောင်ရွက်ရခြင်းများအတွက်
                                                အချိန်ကုန်သက်သာခြင်း။
                                            </p>
                                        </div>
                                    </div>

                                    {/* Single Service */}
                                    <div className="service flex items-start mt-6 sm:mt-8">
                                        <div className="icons w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                                />
                                            </svg>
                                        </div>
                                        <div className="content ml-4 sm:ml-6">
                                            <h4 className="text-lg sm:text-xl font-semibold">
                                                လုံခြုံရေး အကြံဥာဏ်
                                            </h4>
                                            <p className="text-darkblue mt-2 text-sm sm:text-base">
                                                လိုအပ်သည့်လုံခြုံရေးဆိုင်ရာ
                                                အကြံဥာဏ်များ အချိန်မရွေး
                                                ရရှိနိုင်ခြင်း။
                                            </p>
                                        </div>
                                    </div>

                                    {/* Single Service */}
                                    <div className="service flex items-start mt-6 sm:mt-8">
                                        <div className="icons w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 6h.008v.008H6V6Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="content ml-4 sm:ml-6">
                                            <h4 className="text-lg sm:text-xl font-semibold">
                                                ၂၄ နာရီ/ ၇ ရက် လုံခြုံစိတ်ချမှု
                                            </h4>
                                            <p className="text-darkblue mt-2 text-sm sm:text-base">
                                                ၂၄နာရီ/ (၇)ရက်ပတ်လုံး နေ့/ညမရွေး
                                                တာဝန်ယူ
                                                ဝန်ဆောင်မှုပေးခြင်းကြောင့်
                                                လူကြီးမင်းတို့အနေဖြင့်
                                                အချိန်ပြည့် လုံခြုံစိတ်ချမှု
                                                ရှိစေခြင်း။
                                            </p>
                                        </div>
                                    </div>

                                    <div className="service flex items-start mt-6 sm:mt-8">
                                        <div className="icons w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 6h.008v.008H6V6Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="content ml-4 sm:ml-6">
                                            <h4 className="text-lg sm:text-xl font-semibold">
                                                လုံခြုံရေးနှင့် Customer Service
                                            </h4>
                                            <p className="text-darkblue mt-2 text-sm sm:text-base">
                                                လုံခြုံရေးဝန်ဆောင်မှုအပြင်
                                                Customer Service အပြည့်ဖြင့်
                                                ဝန်ဆောင်မှုရရှိနိုင်ခြင်း။
                                            </p>
                                        </div>
                                    </div>

                                    <div className="service flex items-start mt-6 sm:mt-8">
                                        <div className="icons w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 6h.008v.008H6V6Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="content ml-4 sm:ml-6">
                                            <h4 className="text-lg sm:text-xl font-semibold">
                                                လုံခြုံရေး အဝတ်နှင့် ကိရိယာ
                                                စရိတ် သက်သာခြင်း
                                            </h4>
                                            <p className="text-darkblue mt-2 text-sm sm:text-base">
                                                လုံခြုံရေးဆိုင်ရာ uniform နှင့်
                                                equipment အစရှိသည်တို့အတွက်
                                                ကုန်ကျစရိတ် သက်သာစေနိုင်ခြင်း။
                                            </p>
                                        </div>
                                    </div>

                                    <div className="service flex items-start mt-6 sm:mt-8">
                                        <div className="icons w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-full h-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 6h.008v.008H6V6Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="content ml-4 sm:ml-6">
                                            <h4 className="text-lg sm:text-xl font-semibold">
                                                အရေးပေါ်ဖြစ်ရပ်များကို
                                                ကိုင်တွယ်နိုင်သည့်
                                                လုံခြုံရေးဝန်ထမ်းများ
                                            </h4>
                                            <p className="text-darkblue mt-2 text-sm sm:text-base">
                                                မီးဘေးအန္တရာယ်နှင့်
                                                ခွင့်ပြုချက်မရှိ
                                                ဝင်ရောက်ခြင်းကဲ့သို့သော
                                                အရေးပေါ်ဖြစ်ရပ်များအတွက်
                                                ကိုင်တွယ်ဖြေရှင်းရန် စနစ်တကျ
                                                လေ့ကျင့်သင်ကြားထားသော .
                                                တာဝန်ယူမှု၊ တာဝန်ခံမှု
                                                အပြည့်ရှိသည့်
                                                လုံခြုံရေးဝန်ထမ်းများဖြင့်
                                                ဝန်ဆောင်မှုကိုရရှိခြင်း။
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Request a Quote */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="bg-mild text-darkblue contact_form_container repair-request-form bg-gray-100 px-4 sm:px-6 md:px-10 rounded-lg shadow-md py-8 sm:py-10 md:py-20 mt-10 lg:mt-0">
                                <div className="ct-title-2 flex justify-center items-center mb-6 sm:mb-10">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                        Request a Quote
                                    </span>
                                </div>

                                <div className="repair-service-form">
                                    <form action="#">
                                        <div className="grid gap-4 sm:gap-5 md:gap-7">
                                            <input
                                                type="text"
                                                className="w-full rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-darkblue"
                                                placeholder="Name*"
                                            />
                                            <input
                                                type="text"
                                                className="w-full rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-darkblue"
                                                placeholder="Subject*"
                                            />
                                            <textarea
                                                name="message"
                                                className="w-full h-24 sm:h-32 rounded p-2 sm:p-3 text-sm sm:text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-darkblue resize-none"
                                                placeholder="Your Message*"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-rosesecondary text-white py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-darkblue transition-all duration-300 ease-in-out transform"
                                            >
                                                Submit Inquiry
                                            </button>
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
                className="section-newsletter bg-cover bg-center py-12 mb-20 mx-3 flex items-center justify-center"
                style={{
                    backgroundImage: `url('/sf1.jpg')`,
                    minHeight: '300px',
                }}
            >
                <div className="relative container mx-auto px-4 z-10 flex flex-col items-center justify-center h-full">
                    <div className="flex flex-wrap justify-center items-center text-center">
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
                            <div className="title text-white">
                                <h4 className="text-lg font-semibold text-center lg:text-left">
                                    Join Our Volunteer
                                </h4>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-center lg:text-left">
                                    Subscribe to Our Newsletter.
                                </h2>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 px-4">
                            <form
                                action="#"
                                className="flex justify-center w-full"
                            >
                                <div className="input-box flex flex-col sm:flex-row items-center w-full space-y-4 sm:space-y-0 sm:space-x-4">
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email*"
                                        className="py-3 px-4 italic placeholder:italic focus:outline-none border text-mild border-mild bg-transparent w-full sm:w-[350px] lg:w-[400px]"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-rosesecondary hover:bg-rose text-black hover:text-mild py-3 px-6 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-[180px]"
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

            {/* Guard Start */}
            <div className="section-team mt-10 pt-8 pb-10 bg-mild">
                <div className="container mx-auto px-4 mt-5">
                    <div className="flex justify-center mb-12">
                        <div className="text-center">
                            <div className="section-title">
                                <h2 className="text-4xl font-bold mb-4 text-darkblue">
                                    Our B.O.D
                                </h2>
                                <div className="flex w-full h-0.5 justify-center items-center mb-4">
                                    <div className="w-[10%] h-full bg-black"></div>
                                    <div className="w-[5%] h-[4px] bg-rosesecondary"></div>
                                    <div className="w-[10%] h-full bg-black"></div>
                                </div>
                                <p className="font-light text-darkblue">
                                    Our Board of Directors is made up of
                                    experienced professionals <br /> who lead
                                    our business towards success
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Start Team Area */}
                    <div className="flex flex-wrap -mx-4">
                        {guards.map((guard) => (
                            <div
                                key={guard.id}
                                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
                            >
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
                                    <hr className="text-mild" />
                                    <div className="p-4 text-center">
                                        <h4 className="text-xl font-bold">
                                            <a href="#">{guard.name}</a>
                                        </h4>
                                        <span className="">
                                            {guard.position}
                                        </span>
                                        <hr className="text-mild mt-3" />
                                        <ul className="flex justify-center mt-4 space-x-4">
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
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End Team Area */}
                </div>
            </div>
            {/* Guard End */}

            {/* Latest Blog Start */}
            <div className="section-post-carousel section-pt section-pb-90 bg-white my-10 py-10">
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

                    <div className="relative group">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            // pagination={{ clickable: true }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="w-full"
                        >
                            {blogPosts.map((post) => (
                                <SwiperSlide key={post.id} className="h-auto">
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4 sm:mb-6 flex flex-col h-full">
                                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={800}
                                                height={400}
                                                objectFit="contain"
                                                className="w-full h-full object-scale-down"
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between p-3 sm:p-4 md:p-5">
                                            <div>
                                                <h4 className="mb-2 sm:mb-3">
                                                    <a
                                                        href="/posts"
                                                        className="text-lg sm:text-xl text-darkblue font-bold hover:text-rose transition-colors line-clamp-2"
                                                    >
                                                        {post.title}
                                                    </a>
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
                                                        <span className="truncate text-darkblue hover:text-rose text-xs sm:text-sm md:text-base font-light">
                                                            {' '}
                                                            {post.author}
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div className="h-20 sm:h-20 mb-3 sm:mb-4">
                                                    <p className="text-xs sm:text-sm text-darkblue font-semibold">
                                                        {post.excerpt.slice(
                                                            0,
                                                            190
                                                        )}
                                                        ...
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-center mt-2 sm:mt-3 md:mt-4">
                                                <a
                                                    href="/posts"
                                                    className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full text-white bg-rose hover:bg-darkblue transition-colors duration-300 text-xs sm:text-sm md:text-base float-start"
                                                >
                                                    READ MORE
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-prev !w-10 !h-10 !text-rose hover:!text-darkblue duration-300 sm:!w-8 sm:!h-8 !left-0 !top-[35%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="swiper-button-next !w-10 !h-10 !text-rose hover:!text-darkblue duration-300 sm:!w-8 sm:!h-8 !right-0 !top-[35%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
            {/* Latest Blog End */}

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
}
