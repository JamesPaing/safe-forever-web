'use client';

import Breadcrumb from '../../breadcrumb';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaPaperPlane, FaGooglePlusG, FaYoutube, FaReply, FaSearch } from 'react-icons/fa';
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

  const categories = [
    { name: 'Private Security', count: 18 },
    { name: 'Webcam Security', count: 16 },
    { name: 'Motivated Guards', count: 6 },
    { name: 'Self Guards', count: 11 },
  ]
  const recentPosts = [
    { id: 1, title: 'Private Security', image: '/slider3.jpeg', time: '1 hour ago' },
    { id: 2, title: 'Webcam Security', image: '/slider2.jpeg', time: '3 hours ago' },
    { id: 3, title: 'Motivatd Security', image: '/slider1.jpeg', time: '1 day ago' },
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
                  <li className="py-2"><a href="../services" className="hover:text-rosesecondary">Service Page</a></li>
                  <li className="py-2"><a href="../../services/service-detail" className="hover:text-rosesecondary">Service Detail Page</a></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="hover:text-rosesecondary p-3">BLOG</span>
                <ul className="z-20 group px-7 py-3 overflow-hidden absolute w-[210px] hidden bg-mininav text-black border-gray-200 group-hover:block top-8 left-0 border-b-4 border-b-rose">
                  <li className="py-2"><a href="../posts" className="hover:text-rosesecondary">Blog Page</a></li>
                  <li className="py-2"><a href="../../posts/blog-detail" className="hover:text-rosesecondary">Blog Detail Page</a></li>
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
                <li className="py-2"><a href="../services" className="hover:text-rosesecondary">Service Page</a></li>
                <li className="py-2"><a href="../services/service-detail" className="hover:text-rosesecondary">Service Detail Page</a></li>
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
                <li className="py-2"><a href="./" className="hover:text-rosesecondary">Blog Page</a></li>
                <li className="py-2"><a href="/posts/blog-detail" className="hover:text-rosesecondary">Blog Detail Page</a></li>
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

      <div className="container mx-auto px-4 my-20">
        <div className="flex flex-wrap -mx-4">

          {/* left side start */}
          <div className="w-full lg:w-3/4 px-4 order-2 lg:order-1">
            <div className="mt-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/slider2.jpeg"
                  alt="Blog post image"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>By: <a href="#" className="text-darkblue hover:text-rose">Mark Hari</a></span>
                  <span className="mx-2"></span>
                  <span>20-09-2024</span>
                </div>
                <h1 className="text-3xl font-bold mb-4">Webcam Security</h1>
                <p className="mb-4">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus fermentum eleifend. Pellentesque faucibus sem ante, non malesuada odio varius nec. Suspendisse potenti.</p>
                <blockquote className="border-l-4 border-rose pl-4 italic my-4">
                  <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                </blockquote>
                <p className="mb-4">Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget neque. Nunc ante quam, luctus et neque a, interdum iaculis metus. Aliquam vel ante mattis, placerat orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis nunc. Curabitur vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin molestie.</p>
              </div>
            </div>
          </div>
          {/* left side end */}

          {/* right side start */}
          <div className="w-full lg:w-1/4 px-4 order-1 lg:order-2">
            <div className="mt-8">

              {/* search Start */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Search</h2>
                <form className="flex">
                  <input type="text" placeholder="Enter Keywords..." className="flex-grow px-4 py-2 border focus:outline-none" />
                  <button type="submit" className="px-4 py-2 bg-darkblue text-white hover:bg-rose  hover:text-darkblue focus:outline-none focus:ring-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
              {/* search End */}

              {/* Categories Start */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-center py-2">
                        <a
                          href="/posts"
                          className="text-gray hover:text-rose transition-colors duration-200"
                        >
                          {category.name}
                        </a>
                        <span className="text-gray hover:text-rose transition-colors duration-200">({category.count})</span>
                      </div>
                      {index < categories.length - 1 && (
                        <hr className="border-gray my-2" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Categories End */}

              {/* Recent Posts Start */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-start space-x-4">
                      <Image
                        src={post.image}
                        alt={`Thumbnail for ${post.title}`}
                        width={100}
                        height={200}
                        className="w-[130px] h-[130px]"
                      />
                      <div className="flex flex-col justify-start">
                        <h3 className="font-semibold mt-2">
                          <a href={`./${post.id}`} className="hover:text-rose text-darkblue transition-colors duration-200">
                            {post.title}
                          </a>
                        </h3>
                        <p className="text-sm text-gray mt-5">{post.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Recent Posts End */}
            </div>
          </div>
          {/* right side end */}
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
