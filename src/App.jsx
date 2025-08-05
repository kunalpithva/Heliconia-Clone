import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HorizontalScroll from './components/HorizontalScroll';
import { motion } from "motion/react";
import { useState, useEffect, useRef} from 'react';
import { Marquee } from "./components/magicui/marquee";
import { LinkPreview } from './components/ui/link-preview';
import { DotPattern } from "./components/magicui/dot-pattern";
import { Menu, MenuItem } from "./components/ui/navbar-menu";
import { NumberTicker } from "./components/magicui/number-ticker"
import { cn } from "./lib/utils";



const App = () => {

  const reviews = [
    {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
 
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home1 />} /> 
        <Route path="/home1" element={<Home1/>} />
        <Route path="/contact1" element={<Contact1 />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About1" element={<About1/>} />
      </Routes>
    </Router>
  );
};

const Home1 = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  
  return(
    <>
      <div className='bg-[#f8f8f8] '>
        <Navbarr className="top-0 h-10" />

        <div className=' bg-gradient-to-r from-blue-500  to-blue-300 bg-[length:200%_200%] h-150 animate-gradient-x md:mt-20 md:mr-10 broder rounded-xl md:ml-10 md:py-20 md:px-20 flex flex-row'> 
          <h2 className='text-7xl text-white font-bold md:py-10 my-10'>

          Grow Your Business with Adaptive Software Solutions & Scalable IT Talent.
          </h2>
          <div className='hover:scale-110 transition duration-400 md:px-20'>
          <div className='md:h-[350px]  md:w-[350px] shadow-2xl absolute  border-primary my-13 rounded-full bg-amber-500 '></div>
          <motion.div 
            className="order-1 md:order-2  md:py-20"
            animate={{ y: [5, 0, -5, 0, 5] }}
            transition={{ duration: 2, repeat: Infinity, easing: "easeInOut" }}
          >
            <img 
              src="./heliconia-grow-business.webp" 
              alt="person"
              width={700} 
              className="md:ml-10 w-250"
            />
          </motion.div>
          </div>
        </div>
          <h2 className='text-4xl text-blue-500 font-bold md:pt-20 md:pl-10 font-mono'>
          Trusted by Businesses Worldwide for Reliable Solutions
          </h2>
          <h2 className='text-black text-xl md:ml-10'>
          Businesses worldwide trust us for reliable Odoo, web, 
          and mobile solutions. Delivering innovation, scalability, 
          and expert support globally.
          </h2>
      </div>


       <div className='relative ml-10 mr-10 pb-10 bg-[#f8f8f8] h-50px w-50px'>
        <Marquee>
          <img src="./kanrav.webp" className='hover:scale-105 h-30 w-70 transition duration-300 '/>
          <img src="./littleq.webp" className='hover:scale-105 h-30 w-70 transition duration-300  '/>
          <img src="./joanns.webp" className='hover:scale-105 h-30 w-70 transition duration-300  '/>
          <img src="./ventaja.webp" className='hover:scale-105 h-30 w-70 transition duration-300  '/>
          <img src="./wave-contacts.webp" className='hover:scale-105 h-30 w-70 transition duration-300  '/>
          <img src="./ladderlogix.webp" className='hover:scale-105 h-30 w-70 transition duration-300  '/>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-background "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-background"></div>
      </div>
      <div className='bg-[#f8f8f8]  w-full  h-full '>
        <h2 className='ml-10 text-xl md:py-2'>Our services</h2>
        <h2 className='text-4xl text-blue-500 font-bold md:pl-10 font-mono md:py-2'>Expert Software Solutions: Odoo, Mobile, and Web Development</h2>
        <h2 className='ml-10 text-xl md:py-2'>Get expert Odoo, mobile, and web development solutions tailored to your business needs. Scalable, innovative, and built for growth.</h2>

<div className='md:my-5 text-[10px]'>
  <LinkPreview imageSrc='https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fodoo-services.webp?alt=media&token=139b76bf-aec1-4d69-8520-1ea0cacdb06b' url={'https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fodoo-services.webp?alt=media&token=139b76bf-aec1-4d69-8520-1ea0cacdb06b'}>
  <h1 className='font-mono hover:bg-[#323232] hover:text-white md:mx-10 text-black border-t-2 py-7 md:pl-9 hover:pl-20 transition-smooth duration-200 '>Odoo Services</h1>
  </LinkPreview>
  <LinkPreview  imageSrc='https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fsoftware-development.webp?alt=media&token=d50e3a5c-749f-4818-87f7-69afa1ca14b7' url={'https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fsoftware-development.webp?alt=media&token=d50e3a5c-749f-4818-87f7-69afa1ca14b7'}>
  <h1 className='font-mono hover:bg-[#323232] hover:text-white md:mx-10 text-black border-t-2 py-7 md:pl-9 hover:pl-20 transition-smooth duration-200 '>Software Development</h1>
  </LinkPreview>
  <LinkPreview  imageSrc='https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fecommerce-development.webp?alt=media&token=de8bdf01-f65e-407a-b210-ce19162605ae' url={'https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fecommerce-development.webp?alt=media&token=de8bdf01-f65e-407a-b210-ce19162605ae'}>
  <h1 className='font-mono hover:bg-[#323232] hover:text-white md:mx-10 text-black border-t-2 py-7 md:pl-9 hover:pl-20 transition-smooth duration-200 '>E-commerce development</h1>
  </LinkPreview>
  <LinkPreview  imageSrc='https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fmobile-app-development.webp?alt=media&token=efc88aae-e3d6-4645-9d52-4ed1bd904611' url={'https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fmobile-app-development.webp?alt=media&token=efc88aae-e3d6-4645-9d52-4ed1bd904611'}>
  <h1 className='font-mono hover:bg-[#323232] hover:text-white md:mx-10 text-black border-t-2 py-7 md:pl-9 hover:pl-20 transition-smooth duration-200 '>Mobile app development</h1>
  </LinkPreview>
  <LinkPreview  imageSrc='https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fweb-development.webp?alt=media&token=cfb291ce-6c4a-4084-8c73-fff56acc0632' url={'https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fweb-development.webp?alt=media&token=cfb291ce-6c4a-4084-8c73-fff56acc0632'}>
  <h1 className='font-mono hover:bg-[#323232] hover:text-white md:mx-10 text-black border-t-2 py-7 md:pl-9 hover:pl-20 transition-smooth duration-200 '>Web development</h1>
  </LinkPreview>
  <LinkPreview  imageSrc='https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fsoftware-testing-qa.webp?alt=media&token=18633f86-3f08-493a-a434-515b6c5dce47' url={'https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2Fsoftware-testing-qa.webp?alt=media&token=18633f86-3f08-493a-a434-515b6c5dce47'}>
  <h1 className='font-mono hover:bg-[#323232] hover:text-white md:mx-10 text-black border-t-2 py-7 md:pl-9 hover:pl-20 transition-smooth duration-200 '>Software Testing QA </h1>
  </LinkPreview>
</div>
</div>
    <div className='bg-white mx-10 my-10'>
        <HorizontalScroll/>
    </div>

{/* 👉 Move HorizontalScroll OUTSIDE the styled div */}

      <div className='bg-[#f8f8f8]  w-screen  h-full md:py-10'>
      <div className=' justify-center items-center flex-col flex'>
          <h2 className='text-xl'>Technologies</h2>
          <h2 className='text-4xl text-blue-500 font-bold  font-mono'>Cutting-Edge Technologies We Work With</h2>
          <h2 className='text-xl'>We leverage the latest technologies in Odoo, mobile, and web development to deliver scalable, efficient, and future-ready solutions.</h2>
      </div>
      <div className='flex flex-row h-[70px] w-[150px] gap-10 ml-5 mt-10 '>
        <img src="./odoo.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4 '/>
        <img src="./nextjs.webp " className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
        <img src="./flutter.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
        <img src="./payloadcms.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
        <img src="./shopify.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
        <img src="./react.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
        <img src="./directus.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
        <img src="./strapi.webp" className='hover:shadow-2xl rounded-xl hover:scale-110 px-4'/>
      </div>
     </div>
     
      <div className='bg-blue-100 '>
        <div className='justify-center items-center flex-col flex md:py-10'>
        <h2 className='text-xl'>Testimonials</h2>
        <h2 className='text-4xl text-blue-500 font-bold  font-mono'>What Our Clients Say: Trusted by Businesses Worldwide</h2>
        <h2 className='text-xl'>Discover how our Odoo, web, and mobile solutions have helped businesses worldwide succeed. See what our clients say about working with us!</h2>
      </div>

      

    <div className="h-full w-screen bg-blue-100 ">
      <div className="carousel w-full overflow-x-auto scroll-smooth snap-x hide-scrollbar">
        <div className="flex w-full">

          {/* Slide 1 */}
         
        <div id="slide1" className="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide6" className="btn btn-circle mx-20">❮</a>
            <a href="#slide2" className="btn btn-circle mx-20">❯</a>
          </div>
          <div className="bg-white md:mx-40 md:my-10 mx-auto rounded-lg shadow-md w-200 border-1 hover:border-black hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="py-5 px-5 flex flex-col items-center justify-center">
              <img src="./compuhelp.webp" className="h-20 w-30" alt="Compuhelp Logo" />
              <h2 className="text-lg text-center mt-4">
                Managing projects, helpdesk, and accounting became a breeze with Heliconia Solutions' Odoo solution. Their commitment to excellence is commendable.
              </h2>
              <h2 className="font-bold pt-10">Jonathan Hazan</h2>
              <h2>Business Owner, Comp-U-Help</h2>
            </div>
          </div>
        </div>

      
          {/* Slide 2 */}

          <div id="slide2" className="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide1" className="btn btn-circle mx-20">❮</a>
            <a href="#slide3" className="btn btn-circle mx-20">❯</a>
          </div>
          <div className="bg-white md:mx-40 md:my-10 mx-auto rounded-lg shadow-md w-200 border-1 hover:border-black hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="py-5 px-5 flex flex-col items-center justify-center">
              <img src='./timmunity.webp' className='h-20 w-30' alt="Compuhelp Logo" />
              <h2 className='text-lg text-center mt-4'>
                  Heliconia Solutions delivered an impeccable Odoo Enterprise implementation with seamless integration. Their expertise has revolutionized our operations.
                </h2>
                <h2 className='font-bold pt-10'>Kartson Kray</h2>
                <h2>Chairman, TIMmunity GmbH</h2>
            </div>
          </div>
        </div>
         

           {/* Slide 3 */}

          <div id="slide3" className="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide2" className="btn btn-circle mx-20">❮</a>
            <a href="#slide4" className="btn btn-circle mx-20">❯</a>
          </div>
          <div className="bg-white md:mx-40 md:my-10 mx-auto rounded-lg shadow-md w-200 border-1 hover:border-black hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="py-5 px-5 flex flex-col items-center justify-center">
               <img src='./ladderlogix (1).webp' className='h-20 w-30' alt="Compuhelp Logo" />
                <h2 className='text-lg text-center mt-4'>
                  Heliconia Solutions transformed our business with Odoo. They implemented a dynamic website with e-commerce capabilities, enhancing our online presence significantly.
                </h2>
                <h2 className='font-bold pt-10'>Sandesh Thummar</h2>
                <h2>Business Owner, Ladder Logix Pvt. Ltd.</h2>
            </div>
          </div>
        </div>
          

           {/* Slide 4 */}

           <div id="slide4" className="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide3" className="btn btn-circle mx-20">❮</a>
            <a href="#slide5" className="btn btn-circle mx-20">❯</a>
          </div>
          <div className="bg-white md:mx-40 md:my-10 mx-auto rounded-lg shadow-md w-200 border-1 hover:border-black hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="py-5 px-5 flex flex-col items-center justify-center">
               <img src='./ds-associates.webp' className='h-20 w-30' alt="Compuhelp Logo" />
                <h2 className='text-lg text-center mt-4'>
                  As a Chartered Accountant firm, we required precise accounting solutions. Heliconia Solutions flawlessly implemented Odoo Accounting, streamlining our financial operations.
                </h2>
                <h2 className='font-bold pt-10'>Dhaval Sudani</h2>
                <h2>Profetional Charted Accountant, D.S. Associates</h2>
            </div>
          </div>
        </div>
          
         

           {/* Slide 5 */}

           <div id="slide5" className="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide4" className="btn btn-circle mx-20">❮</a>
            <a href="#slide6" className="btn btn-circle mx-20">❯</a>
          </div>
          <div className="bg-white md:mx-40 md:my-10 mx-auto rounded-lg shadow-md w-200 border-1 hover:border-black hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="py-5 px-5 flex flex-col items-center justify-center">
               <img src='./avasar.webp' className='h-20 w-30' alt="Compuhelp Logo" />
                <h2 className='text-lg text-center mt-4'>
                  Heliconia Solutions provided a unique canteen solution, saving us valuable ordering time. Their innovative approach has been invaluable to our operations.
                </h2>
                <h2 className='font-bold pt-10'>Pradeep Lakhani</h2>
                <h2>Business Owner, Avasar agency</h2>
            </div>
          </div>
        </div>
      

           {/* Slide 6 */}

           <div id="slide6" className="carousel-item relative w-full flex-shrink-0 flex flex-col items-center justify-center">
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide5" className="btn btn-circle mx-20">❮</a>
            <a href="#slide1" className="btn btn-circle mx-20">❯</a>
          </div>
          <div className="bg-white md:mx-40 md:my-10 mx-auto rounded-lg shadow-md w-200 border-1 hover:border-black hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="py-5 px-5 flex flex-col items-center justify-center">
               <img src='./mevalon-produkte.webp' className='h-20 w-30' alt="Compuhelp Logo" />
                <h2 className='text-lg text-center mt-4'>
                 Heliconia Solutions's Odoo Enterprise implementation, along with third-party system integration, has optimized our processes. Their expertise has been a game-changer.
                </h2>
                <h2 className='font-bold pt-10'>Vladimir Vukovic</h2>
                <h2>CEO, Mevalon Produkte</h2>
            </div>
          </div>
        </div>
        
    </div>
    </div>
    </div>
    </div>

    <div className='bg-white h-full pb-20'>
      <h2  className='text-3xl text-blue-500 font-bold md:pl-10 font-mono md:pt-10 '>Featured Insights: Stay Ahead with Our Latest Posts</h2>
      <h2 className='text-lg pl-10 pt-1'>Explore our latest insights, trends, and expert tips on Odoo, eCommerce, and modern technology to </h2>
      <h2 className='text-lg pl-10 pt-1 pb-5'>help your business grow and stay ahead of the competition.</h2>

    <div className='bg-white flex flex-row gap-15 px-10 '>
        <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
          <img src='./odoo-18-new-features.webp'
           className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
           />
          <h2 className='font-bold text-lg pt-7'>Discover the New Features of Odoo 18</h2>
          <h2 className='text-md pb-10'>
            Explore Odoo 18's new features for better business management. As an Odoo Silver Partner, we help you implement Odoo Enterprise. Watch the video!</h2>
        </div>
   
        <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
          <img src='./odoo-and-shopify.webp'
           className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
           />
          <h2 className='font-bold text-lg pt-7'>Odoo vs Shopify: A Feature Face-Off for E-commerce</h2>
          <h2 className='text-md pb-10'>
            Compare Odoo vs. Shopify with Heliconia Solutions. Discover key features, strengths, and the best eCommerce platform for your business success.</h2>
        </div>

        <div className="border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group">
          <img 
            src="./headless-odoo-nextjs-e-Commerce-1.webp" 
            className="h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" 
          />
          <h2 className="font-bold text-lg pt-7">Headless Odoo Nextjs e-Commerce: Build Scalable Stores for the Future</h2>
          <h2 className="text-md pb-10">
            Explore headless Odoo Next.js e-commerce boilerplate demo! Build scalable stores with Odoo's powerful backend and Next.js's flexible front end.
          </h2>
        </div>
    </div>
      </div>

      <div className='bg-blue-500 border-45 rounded-4xl mx-10 my-10 border-blue-500'>
        <div className='bg-white px-15 py-15 border rounded-2xl shadow-2xl relative overflow-hidden'>
          
          {/* DotPattern positioned absolutely in the background */}
          <div className="absolute inset-0 z-0  my-15">
            <DotPattern />
          </div>

          {/* Content section with higher z-index */}
          <div className="relative z-10">
            <h1 className='text-center font-bold text-4xl px-20'>
              Let's Build Something Incredible Together
            </h1>

            <h2 className='text-center py-10 text-xl px-25 pt-20'>
              Let's work together to make something amazing! Whether you have big ideas or specific needs,
              our team at Heliconia is here to help.
            </h2>

            <h2 className='text-center py-10 text-xl px-25'>
              Get in touch with us today, and let's create something awesome together.
            </h2>

            <a href="/">
              <p className="bg-blue-500 hover:scale-110 border text-white font-bold py-3 px-13 rounded-lg mx-110 transition duration-300">
                Let's get in touch!
              </p>
            </a>
          </div>
          
        </div>
      </div>



{/* footer */}
<div className='bg-blue-500 border-45 rounded-4xl mx-10 my-10 border-blue-500'>
  <div className='bg-white grid grid-cols-2 px-10 py-10 border rounded-2xl shadow-2xl'>
    <footer className="text-black">
      <div>
        <div className=" flex  ">
                <a href="/home"  ><img src="/Screenshot 2025-05-26 104540.png" alt="Logo" className="h-13 w-13 " /></a>
                <h2 className='text-2xl text-blue-500 font-bold font-mono pt-2'>Heliconia</h2>
                </div>
        <h2>
          Heliconia Solutions excels in IT consulting, offshore development, and Odoo implementation.
          We deliver tailored, innovative solutions to empower businesses worldwide with scalability,
          efficiency, and success.
        </h2>

        <div class="flex space-x-4 pt-4">
          <a href="#" class="text-gray-400 hover:text-white transition">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://www.instagram.com/jupical/?__pwa=1" class="text-gray-400 hover:text-white transition">
            <span class="sr-only ">Instagram</span>
            <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" >
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6  text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>

        <div className='grid grid-cols-2 pt-15 '>
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-500">Company</h2>
            <ul className="space-y-2 text-black">
              <li><a href="/about" className="hover:underline"><p className='text-black hover:underline'>About</p></a></li>
              <li><a href="/services" className="hover:underline"><p className='text-black hover:underline'>Services</p></a></li>
              <li><a href="/solutions" className="hover:underline"><p className='text-black hover:underline'>Solutions</p></a></li>
              <li><a href="/portfolio" className="hover:underline"><p className='text-black hover:underline'>Portfolio</p></a></li>
              <li><a href="/career" className="hover:underline"><p className='text-black hover:underline'>Career</p></a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-500">Technologies</h2>
            <ul className="space-y-2">
              <li><a href="/technologies/odoo" className="hover:underline"><p className='text-black hover:underline'>Odoo</p></a></li>
              <li><a href="/technologies/nextjs" className="hover:underline"><p className='text-black hover:underline'>Next.js</p></a></li>
              <li><a href="/technologies/flutter" className="hover:underline"><p className='text-black hover:underline'>Flutter</p></a></li>
              <li><a href="/technologies/react-native" className="hover:underline"><p className='text-black hover:underline'>React Native</p></a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-500 pt-10">Legal</h2>
            <ul className="space-y-2">
              <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Terms of Use</p></a></li>
              <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Privacy Policy</p></a></li>
              <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Refund Policy</p></a></li>
              <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Cookies Policy</p></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm w-290 flex gap-70">
        <p>© 2017 - 2025 All Rights Reserved</p>
        <p>Crafted with 💕 by Heliconia Solutions Pvt. Ltd.</p>
        <p>Version: 4.0.4</p>
      </div>
    </footer>

    <div>
      <div className='grid grid-cols-4 h-15 w-125 gap-5'>
        <img src='./odoo-silver-partner.webp' className='hover:scale-107 transition' />
        <img src='./oca-contributor.webp' className='hover:scale-107 transition' />
        <img src='./oca-member-2025.webp' className='hover:scale-107 transition' />
        <img src='./odoo-16-functional-certification.webp' className='hover:scale-107 transition' />
      </div>

      <img src='./odoo-15-functional-certification.webp' className='hover:scale-107 transition h-15 mt-5' />

      <div className='grid grid-cols-2'>
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Odoo Services</h2>
          <ul className="space-y-2">
            <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Implementation</p></a></li>
            <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Development</p></a></li>
            <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Customization</p></a></li>
            <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Integration</p></a></li>
            <li><a href="/odoo/migration" className="hover:underline"><p className='text-black hover:underline'>Migration</p></a></li>
            <li><a href="/odoo/support" className="hover:underline"><p className='text-black hover:underline'>Support</p></a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Hire Developer</h2>
          <ul className="space-y-2">
            <li><a href="/hire/odoo-developer" className="hover:underline"><p className='text-black hover:underline'>Hire Odoo Developer</p></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}


const About1 = () => {
  return (
    <>
        <Navbarr className=" h-10" />
    <div className='bg-[#1D6697] pt-[0.2%]  w-full mt-5 '> </div>
        <div className=' bg-gradient-to-r from-blue-500  to-blue-300 bg-[length:200%_200%] h-150 my-20 animate-gradient-x md:mt-20 md:mr-10 broder rounded-xl md:ml-10 md:py-20 md:px-20 flex flex-row'> 
          <div>
          <h2 className='text-7xl text-white font-bold md:py-10 my-10'>
            About Us
          </h2>
          <h2 className='text-2xl text-white '>
            Heliconia Solutions is a software development and IT consulting company, helping businesses leverage digital solutions and the latest technologies to achieve their goals efficiently.
          </h2>
          </div> 
          <div className='hover:scale-110 transition duration-400 md:px-20 '>
          <div className='md:h-[380px]  md:w-[380px] shadow-2xl absolute  border-primary my-5 rounded-full bg-amber-500 '></div>
          <motion.div 
            className="order-1 md:order-2  md:py-20 "
            animate={{ y: [5, 0, -5, 0, 5] }}
            transition={{ duration: 2, repeat: Infinity, easing: "easeInOut" }}
          >
            <img 
              src="./heliconia-logo-3d.webp" 
              alt="person"
              width={800} 
              className="pl-13 scale-150"
            />
          </motion.div>
          </div>
         
        </div>
        <div className='bg-blue-50 mx-10 my-10 px-20 py-15 border rounded-xl flex gap-25 justify-center items-center'>
          <div>
            <div className='text-6xl font-bold text-blue-500 flex justify-center items-center '>
            <NumberTicker value={8} direction='up'/>+
            </div>
            <h2>Years in Business </h2>
          </div>
          <div>
            <div className='text-6xl font-bold text-blue-500 flex justify-center items-center'>
            <NumberTicker value={17} direction='up'/>
            </div>
            <h2>Countries Served</h2>
          </div>
          <div>
            <div className='text-6xl font-bold text-blue-500 flex justify-center items-center'>
            <NumberTicker value={30} direction='up'/>+
            </div>
            <h2>Project Completed</h2>
          </div>
          <div>
            <div className='text-6xl font-bold text-blue-500 flex justify-center items-center'>
            <NumberTicker value={6.7} decimalPlaces={1}/>M+
            </div>
            <h2>Product Users Worldwide</h2>
          </div>
          <div>
            <div className='text-6xl font-bold text-blue-500 flex justify-center items-center'>
            <NumberTicker value={17} direction='up'/>%
            </div>
            <h2>Customer Retention</h2>
          </div>
        </div>


        <div className='grid grid-cols-2'>
          <div className='flex flex-col  items-center px-10 py-10 text-blue-500 text-4xl font-bold font-mono'>
            <h2>Guiding Our Path: Vision & Mission for a Digital Future</h2>
            <img src='./heliconia-solutions-vision-mission.webp' 
            className='border rounded-xl mx-5 my-5 '/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-2xl font-mono font-bold px-10 pt-10'>Vision</h2>
            <h2 className='text-xl px-10 py-5'>To be a global leader in digital transformation, delivering scalable, future-ready solutions that help businesses thrive in an ever-evolving technological landscape.</h2>
            <h2 className='text-2xl font-mono font-bold px-10 pt-5'>Mission</h2>
            <h2 className='text-xl px-10 py-5'>To empower businesses with cutting-edge software solutions and expert IT consulting, enabling them to streamline operations, drive innovation, and achieve sustainable growth.</h2>
            <h2 className='text-2xl font-mono font-bold px-10 pt-5'>Core Values</h2>
            <h2 className='text-xl px-10 py-5 flex flex-row gap-2'><h2 className='font-semibold'>Innovation</h2> – We leverage cutting-edge technology to drive business success.</h2>
            <h2 className='text-xl px-10 py-5 flex flex-row gap-2'><h2 className='font-semibold'>Integrity</h2>– We uphold transparency, trust, and ethical business practices.</h2>
            <h2 className='text-xl px-10 py-5 flex flex-row gap-2'><h2 className='font-semibold'>Excellence</h2> – We strive for the highest quality in our solutions and services.</h2>

          </div>
        </div>

        
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-mono text-4xl text-blue-500 font-bold pt-10'>Recognized Expertise You Can Trust</h2>
          <h2 className='text-xl text-center px-20 pb-10'>As an official Odoo Partner and active OCA Member & Contributor, Heliconia Solutions stands out for its proven capability, trusted development standards, and deep community involvement.</h2>
        </div>

       {/* import { motion } from "framer-motion"; */}

<div className='flex flex-row gap-10 mx-10 my-10 mb-20'>
  <motion.img
    src='./odoo-silver-partner.webp'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className='hover:scale-105 transition-all duration-500 ease-in-out hover:border hover:shadow-2xl rounded-2xl px-3 py-3 h-35'
  />
  <motion.img
    src='./oca-contributor.webp'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className='hover:scale-105 transition-all duration-500 ease-in-out hover:border hover:shadow-2xl rounded-2xl px-3 py-3 h-35'
  />
  <motion.img
    src='./oca-member-2025.webp'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    className='hover:scale-105 transition-all duration-500 ease-in-out hover:border hover:shadow-2xl rounded-2xl px-3 py-3 h-35'
  />
  <motion.img
    src='./odoo-16-functional-certification.webp'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
    className='hover:scale-105 transition-all duration-500 ease-in-out hover:border hover:shadow-2xl rounded-2xl px-3 py-3 h-35'
  />
  <motion.img
    src='./odoo-15-functional-certification.webp'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
    className='hover:scale-105 transition-all duration-500 ease-in-out hover:border hover:shadow-2xl rounded-2xl px-3 py-3 h-35'
  />
</div>



<Marquee pauseOnHover={true}>
  <img src='./about-heliconia-solutions-08.webp' className='h-90 w-150 border rounded-xl hover:scale-105 mx-2 transition-all duration-200 ease-in-out'/>
  <img src='./about-heliconia-solutions-03.webp' className='h-90 w-150 border rounded-xl hover:scale-105 mx-2 transition-all duration-200 ease-in-out'/>
  <img src='./about-heliconia-solutions-10.webp' className='h-90 w-150 border rounded-xl hover:scale-105 mx-2 transition-all duration-200 ease-in-out'/>
  <img src='./about-heliconia-solutions-09.webp' className='h-90 w-150 border rounded-xl hover:scale-105 mx-2 transition-all duration-200 ease-in-out'/>
  <img src='./about-heliconia-solutions-18.webp' className='h-90 w-150 border rounded-xl hover:scale-105 mx-2 transition-all duration-200 ease-in-out'/>
</Marquee>


      {/* footer */}
      <div className='bg-[#f8f8f8] '>

        <div className='bg-blue-500 border-45 rounded-4xl mx-10 my-10 border-blue-500'>
          <div className='bg-white grid grid-cols-2 px-10 py-10 border rounded-2xl shadow-2xl'>
            <footer className="text-black">
              <div>
                <div className=" flex  ">
                <a href="/home"  ><img src="/Screenshot 2025-05-26 104540.png" alt="Logo" className="h-13 w-13 " /></a>
                <h2 className='text-2xl text-blue-500 font-bold font-mono pt-2'>Heliconia</h2>
                </div>
                <h2>
                  Heliconia Solutions excels in IT consulting, offshore development, and Odoo implementation.
                  We deliver tailored, innovative solutions to empower businesses worldwide with scalability,
                  efficiency, and success.
                </h2>

                <div class="flex space-x-4 pt-4">
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/jupical/?__pwa=1" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only ">Instagram</span>
                    <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" >
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-6 w-6  text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div className='grid grid-cols-2 pt-15 '>
                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500">Company</h2>
                    <ul className="space-y-2 text-black">
                      <li><a href="/about" className="hover:underline"><p className='text-black hover:underline'>About</p></a></li>
                      <li><a href="/services" className="hover:underline"><p className='text-black hover:underline'>Services</p></a></li>
                      <li><a href="/solutions" className="hover:underline"><p className='text-black hover:underline'>Solutions</p></a></li>
                      <li><a href="/portfolio" className="hover:underline"><p className='text-black hover:underline'>Portfolio</p></a></li>
                      <li><a href="/career" className="hover:underline"><p className='text-black hover:underline'>Career</p></a></li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500">Technologies</h2>
                    <ul className="space-y-2">
                      <li><a href="/technologies/odoo" className="hover:underline"><p className='text-black hover:underline'>Odoo</p></a></li>
                      <li><a href="/technologies/nextjs" className="hover:underline"><p className='text-black hover:underline'>Next.js</p></a></li>
                      <li><a href="/technologies/flutter" className="hover:underline"><p className='text-black hover:underline'>Flutter</p></a></li>
                      <li><a href="/technologies/react-native" className="hover:underline"><p className='text-black hover:underline'>React Native</p></a></li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500 pt-10">Legal</h2>
                    <ul className="space-y-2">
                      <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Terms of Use</p></a></li>
                      <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Privacy Policy</p></a></li>
                      <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Refund Policy</p></a></li>
                      <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Cookies Policy</p></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm w-290 flex gap-70">
                <p>© 2017 - 2025 All Rights Reserved</p>
                <p>Crafted with 💕 by Heliconia Solutions Pvt. Ltd.</p>
                <p>Version: 4.0.4</p>
              </div>
            </footer>

            <div>
              <div className='grid grid-cols-4 h-15 w-125 gap-5'>
                <img src='./odoo-silver-partner.webp' className='hover:scale-107 transition' />
                <img src='./oca-contributor.webp' className='hover:scale-107 transition' />
                <img src='./oca-member-2025.webp' className='hover:scale-107 transition' />
                <img src='./odoo-16-functional-certification.webp' className='hover:scale-107 transition' />
              </div>

              <img src='./odoo-15-functional-certification.webp' className='hover:scale-107 transition h-15 mt-5' />

              <div className='grid grid-cols-2'>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Odoo Services</h2>
                  <ul className="space-y-2">
                    <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Implementation</p></a></li>
                    <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Development</p></a></li>
                    <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Customization</p></a></li>
                    <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Integration</p></a></li>
                    <li><a href="/odoo/migration" className="hover:underline"><p className='text-black hover:underline'>Migration</p></a></li>
                    <li><a href="/odoo/support" className="hover:underline"><p className='text-black hover:underline'>Support</p></a></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Hire Developer</h2>
                  <ul className="space-y-2">
                    <li><a href="/hire/odoo-developer" className="hover:underline"><p className='text-black hover:underline'>Hire Odoo Developer</p></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}


const Blog = () => {
  return (
    <>
    <div className='bg-[#f8f8f8] '>
        <Navbarr className="top-0 h-10" />
        <div className=' bg-gradient-to-r from-blue-500  to-blue-300 bg-[length:200%_200%] mx-10 h-50 px-10 animate-gradient-x my-15 md:mr-10 broder rounded-xl mt-25.5 '> 
          <h2 className='text-7xl text-white font-bold pt-15 font-mono  '>
          Blog Posts
          </h2>
        </div>
            <div className='bg-[#f8f8f8]   gap-15 px-13 py-10 grid grid-cols-3'>
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./odoo-18-new-features.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>Discover the New Features of Odoo 18</h2>
                  <h2 className='text-md pb-10'>
                    Explore Odoo 18's new features for better business management. As an Odoo Silver Partner, we help you implement Odoo Enterprise. Watch the video!</h2>
                </div>
          
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./odoo-and-shopify.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>Odoo vs Shopify: A Feature Face-Off for E-commerce</h2>
                  <h2 className='text-md pb-10'>
                    Compare Odoo vs. Shopify with Heliconia Solutions. Discover key features, strengths, and the best eCommerce platform for your business success.</h2>
                </div>

                <div className="border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group">
                  <img 
                    src="./headless-odoo-nextjs-e-Commerce-1.webp" 
                    className="h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" 
                  />
                  <h2 className="font-bold text-lg pt-7">Headless Odoo Nextjs e-Commerce: Build Scalable Stores for the Future</h2>
                  <h2 className="text-md pb-10">
                    Explore headless Odoo Next.js e-commerce boilerplate demo! Build scalable stores with Odoo's powerful backend and Next.js's flexible front end.
                  </h2>
                </div>
            </div>


            <div className='bg-[#f8f8f8]   gap-15 px-13 py-10 grid grid-cols-3'>
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./context-in-odoo.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>Understanding Context in Odoo: Key Concepts and Uses</h2>
                  <h2 className='text-md pb-10'>
                    Explore the concept of context in Odoo, its importance, and practical uses. Learn how context enriches user interactions and system functionality.</h2>
                </div>
          
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./indiamart-odoo-integration.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>Integrate IndiaMart Leads with Odoo CRM</h2>
                  <h2 className='text-md pb-10'>
                    Discover innovative integration of IndiaMart with Odoo to Manage the IndiaMart leads in Odoo CRM to automate lead capture and boost sales pipeline.</h2>
                </div>

                <div className="border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group">
                  <img 
                    src="./next-js-website-with-odoo.webp" 
                    className="h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" 
                  />
                  <h2 className="font-bold text-lg pt-7">How to Integrate Next.js website with Odoo CRM?</h2>
                  <h2 className="text-md pb-10">
                    Learn how to integrate the Next.js website with Odoo CRM to Capture leads and streamline your business processes for maximum efficiency.
                  </h2>
                </div>
            </div>

            <div className='bg-[#f8f8f8]   gap-15 px-13 py-10 grid grid-cols-3'>
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./lru-cache-in-odoo.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>LRU Cache in Odoo: Optimizing Database Queries for Enhanced Performance</h2>
                  <h2 className='text-md pb-10'>
                    Explore how LRU cache in Odoo optimizes database queries, boosts performance, and reduces load for enhanced application responsiveness.
                  </h2>
                </div>
          
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./5-way-erp-can-grow-business.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>5 Ways ERP Can Grow Your Business</h2>
                  <h2 className='text-md pb-10'>
                    Discover 5 key benefits of Odoo ERP for business growth. Partner with Heliconia Solutions, an Odoo Silver Partner, for expert implementation.
                  </h2>
                </div>

                <div className="border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group">
                  <img 
                    src="./headless-odoo.webp" 
                    className="h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" 
                  />
                  <h2 className="font-bold text-lg pt-7">Headless Odoo: Revolutionizing Business Connectivity</h2>
                  <h2 className="text-md pb-10">
                    Discover how Headless Odoo revolutionizes business connectivity through seamless integration with Flutter mobile apps and modern Next.js websites.
                  </h2>
                </div>
            </div>


            <div className='bg-[#f8f8f8]   gap-15 px-13 py-10 grid grid-cols-3'>
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./odoo-ecommerce-mobile-app.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>Boost Sales & Convenience with Odoo Ecommerce Mobile App</h2>
                  <h2 className='text-md pb-10'>
                    Boost sales & enhance shopping with Odoo eCommerce Mobile App for Android & iOS by Heliconia Solutions. Simplify, engage, and grow your business today
                  </h2>
                </div>
          
                <div className='border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group'>
                  <img src='./getting-started-with-odoo.webp'
                  className='h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105'
                  />
                  <h2 className='font-bold text-lg pt-7'>Dive into Odoo: Your Guide to Getting Started in 2024</h2>
                  <h2 className='text-md pb-10'>
                    Our comprehensive guide to get started with odoo in 2024 to guide you choose Odoo edition and seleting hosting options.
                  </h2>
                </div>

                <div className="border-1 hover:border-black w-100 px-5 py-5 rounded-lg hover:scale-105 transition-transform group">
                  <img 
                    src="./odoo-vs-erpnext.webp" 
                    className="h-45 w-100 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105" 
                  />
                  <h2 className="font-bold text-lg pt-7">Odoo vs. ERPNext: Choosing the Right Open-Source ERP for Your Business</h2>
                  <h2 className="text-md pb-10">
                    Choosing between Odoo and ERPNext? Compare features, pros, and cons to find the best open-source ERP solution for your business needs.
                  </h2>
                </div>
            </div>

      {/* footer */}
      <div className='bg-[#f8f8f8] '>

        <div className='bg-blue-500 border-45 rounded-4xl mx-10 my-10 border-blue-500'>
          <div className='bg-white grid grid-cols-2 px-10 py-10 border rounded-2xl shadow-2xl'>
            <footer className="text-black">
              <div>
                <div className=" flex  ">
                <a href="/home1"  ><img src="/Screenshot 2025-05-26 104540.png" alt="Logo" className="h-13 w-13 " /></a>
                <h2 className='text-2xl text-blue-500 font-bold font-mono pt-2'>Heliconia</h2>
                </div>
                <h2>
                  Heliconia Solutions excels in IT consulting, offshore development, and Odoo implementation.
                  We deliver tailored, innovative solutions to empower businesses worldwide with scalability,
                  efficiency, and success.
                </h2>

                <div class="flex space-x-4 pt-4">
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/jupical/?__pwa=1" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only ">Instagram</span>
                    <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" >
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-6 w-6  text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div className='grid grid-cols-2 pt-15 '>
                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500">Company</h2>
                    <ul className="space-y-2 text-black">
                      <li><a href="/about" className="hover:underline"><p className='text-black hover:underline'>About</p></a></li>
                      <li><a href="/services" className="hover:underline"><p className='text-black hover:underline'>Services</p></a></li>
                      <li><a href="/solutions" className="hover:underline"><p className='text-black hover:underline'>Solutions</p></a></li>
                      <li><a href="/portfolio" className="hover:underline"><p className='text-black hover:underline'>Portfolio</p></a></li>
                      <li><a href="/career" className="hover:underline"><p className='text-black hover:underline'>Career</p></a></li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500">Technologies</h2>
                    <ul className="space-y-2">
                      <li><a href="/technologies/odoo" className="hover:underline"><p className='text-black hover:underline'>Odoo</p></a></li>
                      <li><a href="/technologies/nextjs" className="hover:underline"><p className='text-black hover:underline'>Next.js</p></a></li>
                      <li><a href="/technologies/flutter" className="hover:underline"><p className='text-black hover:underline'>Flutter</p></a></li>
                      <li><a href="/technologies/react-native" className="hover:underline"><p className='text-black hover:underline'>React Native</p></a></li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500 pt-10">Legal</h2>
                    <ul className="space-y-2">
                      <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Terms of Use</p></a></li>
                      <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Privacy Policy</p></a></li>
                      <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Refund Policy</p></a></li>
                      <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Cookies Policy</p></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm w-290 flex gap-70">
                <p>© 2017 - 2025 All Rights Reserved</p>
                <p>Crafted with 💕 by Heliconia Solutions Pvt. Ltd.</p>
                <p>Version: 4.0.4</p>
              </div>
            </footer>

            <div>
              <div className='grid grid-cols-4 h-15 w-125 gap-5'>
                <img src='./odoo-silver-partner.webp' className='hover:scale-107 transition' />
                <img src='./oca-contributor.webp' className='hover:scale-107 transition' />
                <img src='./oca-member-2025.webp' className='hover:scale-107 transition' />
                <img src='./odoo-16-functional-certification.webp' className='hover:scale-107 transition' />
              </div>

              <img src='./odoo-15-functional-certification.webp' className='hover:scale-107 transition h-15 mt-5' />

              <div className='grid grid-cols-2'>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Odoo Services</h2>
                  <ul className="space-y-2">
                    <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Implementation</p></a></li>
                    <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Development</p></a></li>
                    <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Customization</p></a></li>
                    <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Integration</p></a></li>
                    <li><a href="/odoo/migration" className="hover:underline"><p className='text-black hover:underline'>Migration</p></a></li>
                    <li><a href="/odoo/support" className="hover:underline"><p className='text-black hover:underline'>Support</p></a></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Hire Developer</h2>
                  <ul className="space-y-2">
                    <li><a href="/hire/odoo-developer" className="hover:underline"><p className='text-black hover:underline'>Hire Odoo Developer</p></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


</div>




    </>
  )
}

const Contact1 = () => {
  return (  
    <>
      <div className='bg-[#f8f8f8] '>
        <Navbarr className="top-0 h-10" />
        <div className='bg-[#1D6697] pt-[0.2%]  w-full mt-5'> </div>
        <div className=' bg-gradient-to-r from-blue-500  to-blue-300 bg-[length:200%_200%] mx-10 h-80 animate-gradient-x my-20 md:mr-10 broder rounded-xl  '> 
          <h2 className='text-7xl text-white font-bold pt-20 pb-4 font-mono text-center   '>
          Contact us
          </h2>
          <h2 className='text-xl text-white px-75  text-center   '>
            Ready to transform your ideas into reality? Fill out the form below to request a quote, and our experts will connect with you promptly.
          </h2>
        </div>
      </div>
 
    <div className="bg-[#f8f8f8] py-10 relative">
      {/* DotPattern behind everything */}
      <DotPattern className="absolute top-0 left-0 w-full h-[940px] z-0" />

      {/* Main content (form + right column) */}
      <div className="relative z-10 mx-10 grid grid-cols-3">
        <form className="bg-white p-6 rounded-lg col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-2xl">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="col-span-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          Upload File
          <label
            for="fileInput"
            class="col-span-2 flex-col w-full p-3 border-dashed border-2 h-20 border-black rounded-lg flex items-center justify-center cursor-pointer text-black"
            id="fileLabel"
          >
            Select or Drop your file here.
            <label class='text-[12px] text-gray-400'>
              Only PDF / DOC
            </label>
          </label>
          
          <input
            type="file"
            id="fileInput"
            class="hidden"
            onchange="document.getElementById('fileLabel').textContent = this.files[0]?.name || 'Select or Drop your file here.'"
          />

          <div className="col-span-2 text-center items-center justify-center">
            <a href="/">
                <p className="font-bold text-white bg-blue-500 broder rounded-sm px-3 py-3 text-center w-30 ml-90 hover:scale-105 transition "> 
                    Submit
                </p>
                </a>
          </div>
        </form>

        {/* Right Column Content */}
        <div className="bg-white h-155 w-100 border rounded-2xl shadow-2xl ml-10">
          <h2 className='text-2xl text-blue-500 font-mono px-10 py-7'>Head Office</h2>
          <h2 className='text-xl font-bold px-5 font-mono '>Heliconia Solutions Pvt. Ltd.</h2>
          <h2 className='pt-3 pb-1 px-5 '>SWC HUB, 541-543,</h2>
          <h2 className='pb-1 px-5 '>opposite Rajpath Complex,</h2>
          <h2 className='pb-1 px-5 '>Bhayli, Vadodara,</h2>
          <h2 className='pb-1 px-5 '>Gujarat, India</h2>
          <h2 className='text-[12px] px-5 pt-3 hover:text-blue-500'>Get Direction</h2>
          <div className='border border-b mt-7 mx-7' ></div>
          <h2 className='text-2xl text-blue-500 font-mono px-10 py-7'>Branch Office</h2>
          <h2 className='text-xl font-bold px-5 font-mono '>Heliconia Solutions Pvt. Ltd.</h2>
          <h2 className='pt-3 pb-1 px-5 '>1001, RK Prime,</h2>
          <h2 className='pb-1 px-5 '>Near Nana Mauva Circle,</h2>
          <h2 className='pb-1 px-5 '>150 feet Ring Road, Rajkot,</h2>
          <h2 className='pb-1 px-5 '>Gujarat, India</h2>
          <h2 className='text-[12px] px-5 pt-3 hover:text-blue-500'>Get Direction</h2>

        </div>
      </div>
      <div className='grid grid-cols-5 z-0'>
        <div className='grid grid-cols-2 col-span-2 bg-white border rounded-2xl shadow-2xl h-40 w-auto px-5 py-5 m-10 z-0 '>
          <div>
            <h2 className='text-2xl text-blue-500 font-mono px-5 py-3'>Careers</h2>
            <h2 className='text-xl hover:underline px-3'>Careers Page</h2>
          </div>
          
          <div className="h-full border-l border-gray-300">
            <h2 className='text-2xl text-blue-500 font-mono px-5 py-3 ml-5 '>HR Phone</h2>
            <h2 className='text-xl hover:underline px-3 ml-2'>+91 9574200013</h2>
          </div>
        </div>

        <div className='grid grid-cols-3 col-span-3 bg-white border rounded-2xl shadow-2xl h-40 w-auto px-5 py-5 m-10 z-0 '>
          <div>
              <h2 className='text-2xl text-blue-500 font-mono px- py-3'>Project Inquires</h2>
              <h2 className='text-xl hover:underline px-3'>hello@heliconia.io</h2>
          </div>

          <div className="h-full border-l border-gray-300">
              <h2 className='text-2xl text-blue-500 font-mono px-5 py-3 ml-5 '> Whatsapp</h2>
              <h2 className='text-xl hover:underline px-3 ml-2'>+91 9574200013</h2>
          </div>

          <div className="h-full border-l border-gray-300">
              <h2 className='text-2xl text-blue-500 font-mono px-5 py-3 ml-5 '>Sales Phone</h2>
              <h2 className='text-xl hover:underline px-3 ml-2'>+91 9574200013</h2>
          </div>  
        </div>
      </div>
    </div>


    
      {/* footer */}
      <div className='bg-[#f8f8f8] '>

        <div className='bg-blue-500 border-45 rounded-4xl mx-10 my-10 border-blue-500'>
          <div className='bg-white grid grid-cols-2 px-10 py-10 border rounded-2xl shadow-2xl'>
            <footer className="text-black">
              <div>
                <div className=" flex  ">
                <a href="/home1"  ><img src="/Screenshot 2025-05-26 104540.png" alt="Logo" className="h-13 w-13 " /></a>
                <h2 className='text-2xl text-blue-500 font-bold font-mono pt-2'>Heliconia</h2>
                </div>
                <h2>
                  Heliconia Solutions excels in IT consulting, offshore development, and Odoo implementation.
                  We deliver tailored, innovative solutions to empower businesses worldwide with scalability,
                  efficiency, and success.
                </h2>

                <div class="flex space-x-4 pt-4">
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/jupical/?__pwa=1" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only ">Instagram</span>
                    <svg class="h-6 w-6 text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24" >
                      <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-6 w-6  text-black hover:text-blue-500 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div className='grid grid-cols-2 pt-15 '>
                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500">Company</h2>
                    <ul className="space-y-2 text-black">
                      <li><a href="/about" className="hover:underline"><p className='text-black hover:underline'>About</p></a></li>
                      <li><a href="/services" className="hover:underline"><p className='text-black hover:underline'>Services</p></a></li>
                      <li><a href="/solutions" className="hover:underline"><p className='text-black hover:underline'>Solutions</p></a></li>
                      <li><a href="/portfolio" className="hover:underline"><p className='text-black hover:underline'>Portfolio</p></a></li>
                      <li><a href="/career" className="hover:underline"><p className='text-black hover:underline'>Career</p></a></li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500">Technologies</h2>
                    <ul className="space-y-2">
                      <li><a href="/technologies/odoo" className="hover:underline"><p className='text-black hover:underline'>Odoo</p></a></li>
                      <li><a href="/technologies/nextjs" className="hover:underline"><p className='text-black hover:underline'>Next.js</p></a></li>
                      <li><a href="/technologies/flutter" className="hover:underline"><p className='text-black hover:underline'>Flutter</p></a></li>
                      <li><a href="/technologies/react-native" className="hover:underline"><p className='text-black hover:underline'>React Native</p></a></li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4 text-blue-500 pt-10">Legal</h2>
                    <ul className="space-y-2">
                      <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Terms of Use</p></a></li>
                      <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Privacy Policy</p></a></li>
                      <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Refund Policy</p></a></li>
                      <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Cookies Policy</p></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm w-290 flex gap-70">
                <p>© 2017 - 2025 All Rights Reserved</p>
                <p>Crafted with 💕 by Heliconia Solutions Pvt. Ltd.</p>
                <p>Version: 4.0.4</p>
              </div>
            </footer>

            <div>
              <div className='grid grid-cols-4 h-15 w-125 gap-5'>
                <img src='./odoo-silver-partner.webp' className='hover:scale-107 transition' />
                <img src='./oca-contributor.webp' className='hover:scale-107 transition' />
                <img src='./oca-member-2025.webp' className='hover:scale-107 transition' />
                <img src='./odoo-16-functional-certification.webp' className='hover:scale-107 transition' />
              </div>

              <img src='./odoo-15-functional-certification.webp' className='hover:scale-107 transition h-15 mt-5' />

              <div className='grid grid-cols-2'>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Odoo Services</h2>
                  <ul className="space-y-2">
                    <li><a href="/odoo/implementation" className="hover:underline"><p className='text-black hover:underline'>Implementation</p></a></li>
                    <li><a href="/odoo/development" className="hover:underline"><p className='text-black hover:underline'>Development</p></a></li>
                    <li><a href="/odoo/customization" className="hover:underline"><p className='text-black hover:underline'>Customization</p></a></li>
                    <li><a href="/odoo/integration" className="hover:underline"><p className='text-black hover:underline'>Integration</p></a></li>
                    <li><a href="/odoo/migration" className="hover:underline"><p className='text-black hover:underline'>Migration</p></a></li>
                    <li><a href="/odoo/support" className="hover:underline"><p className='text-black hover:underline'>Support</p></a></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 text-blue-500 mt-19">Hire Developer</h2>
                  <ul className="space-y-2">
                    <li><a href="/hire/odoo-developer" className="hover:underline"><p className='text-black hover:underline'>Hire Odoo Developer</p></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
);
};


export default App;



function Navbarr({ className }) {

  const [active, setActive] = useState(null);
  const [subActive, setSubActive] = useState('odoo');
  const [subActive1, setSubActive1] = useState('solution');


  return (
    <>
    <div
      className={cn(" fixed w-full  z-50 hidden md:block", className)}
    >
      
      <Menu setActive={setActive}>
      <div className=" flex items-center justify-center  ">
      <a href="/home1"  ><img src="/Screenshot 2025-05-26 104540.png" alt="Logo" className="logo ml-200 mr-10 h-13 w-13 " /></a>
      </div>
        <h2 className=" flex items-center justify-center text-4xl font-bold font-mono text-blue-500 mr-10"> Heliconia</h2>
        <div className="flex flex-row gap-6 text-xl pr-200">
          <MenuItem setActive={setActive} active={active} item="Services" >
      
            <div className="space-y-4 bg-white w-[1200px] grid grid-cols-4 text-[16px]">
              {/* LEFT COLUMN - SUBMENU TRIGGERS */}
              <div className="border-r col-span-1">
                <h2 className="text-lg font-mono text-blue-500 ">Services</h2>
                <h2>Driving Your Business Forward</h2>
                <div className="border-b my-6 mr-4 border-black"></div>

                <div
                  onMouseEnter={() => setSubActive('odoo')}
                  className={`cursor-pointer p-2 mr-2 rounded ${
                    subActive === 'odoo' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <p className="text-[15px] ">Odoo Services</p>
                </div>


                <div
                  onMouseEnter={() => setSubActive('custom')}
                  className={`cursor-pointer p-2 mr-2 rounded ${
                    subActive === 'custom' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <p className="text-[15px] ">Web Development</p>
                </div>

                <div
                  onMouseEnter={() => setSubActive('ecom')}
                  className={`cursor-pointer p-2 mr-2 rounded ${
                    subActive === 'ecom' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <p className="text-[15px] ">eCommerce Development</p>
                </div>

                <div
                  onMouseEnter={() => setSubActive('mbApp')}
                  className={`cursor-pointer p-2 mr-2 rounded ${
                    subActive === 'mbApp' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <p className="text-[15px] ">Mobile App Development</p>
                </div>

                <div
                  onMouseEnter={() => setSubActive('soft')}
                  className={`cursor-pointer p-2 mr-2 rounded ${
                    subActive === 'soft' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <p className="text-[15px] ">Software Testing & QA</p>
                </div>

                
                <div className="border-b my-9.5 mr-4  border-black"></div>
                <a href="/">
                <p className="font-bold text-white bg-blue-500 broder rounded-sm px-3 py-3 text-center w-70 hover:scale-105 transition "> 
                    Schedule Call
                </p>
                </a>
                
              </div>

              {/* CENTER COLUMN - CHANGING CONTENT */}
              <div className="col-span-2">
                {subActive === 'odoo' && (
                  <div>
                    <h2 className="text-lg font-mono text-black pl-5 font-bold">Odoo Services</h2>
                    <h2 className="text-sm  text-black pl-5">Odoo Services</h2>
                    <div className="border-b my-6.5 ml-3 mr-4 border-black "></div>

                  <div className='grid grid-cols-2'>
                    <ul className="list-disc pl-5 mt-2">
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>Odoo Implementation</p></a></p>
                      <p><a href="/odoo-customization"><p className='text-black hover:underline pb-3'>Odoo Customization</p></a></p>
                      <p><a href="/odoo-migration"><p className='text-black hover:underline pb-3'>Odoo Migration</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Odoo Training</p></a></p>
                    </ul>
                    <ul className="list-disc pl-5 mt-2 ">
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Odoo Development</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Odoo Integration</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Odoo Support</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Hire Odoo Developer</p></a></p>
                    </ul>
                  </div>

                  <div className="border-b py-9.5 ml-3 mr-4 border-black"></div>
                  <div className='flex flex-row justify-center items-center'>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        hello@heliconia.io
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                  </div>
                  </div>
                )}
                {subActive === 'custom' && (
                  <div>
                    <h2 className="text-lg font-mono text-black pl-5  font-bold">Web Development</h2>
                    <h2 className="text-sm  text-black pl-5">Web Development</h2>
                    <div className="border-b my-6.5 ml-3 mr-4 border-black "></div>

                    <div className='grid grid-cols-2'>
                    <ul className="list-disc pl-5 mt-2">
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>Web Development</p></a></p>              
                    </ul>
                    <ul className="list-disc pl-5 mt-2 ">                
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Web application development</p></a></p>
                    </ul>
                    </div>
                  <div className="border-b py-22.5 ml-3 mr-4 border-black"></div>
                  <div className='flex flex-row justify-center items-center'>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        hello@heliconia.io
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                  </div>

                  </div>
                )}
                {subActive === 'ecom' && (
                  <div>
                    <h2 className="text-lg font-mono text-black pl-5  font-bold">eCommerce Development</h2>
                    <h2 className="text-sm text-black pl-5">eCommerce Development</h2>
                    <div className="border-b my-6.5 ml-3 mr-4 border-black "></div>

                    <div className='grid '>
                    <ul className="list-disc pl-5 mt-2">
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>eCommerce Development</p></a></p>              
                    </ul>                   
                    </div>
                  <div className="border-b py-22.5 ml-3 mr-4 border-black"></div>
                  <div className='flex flex-row justify-center items-center'>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        hello@heliconia.io
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                  </div>

                  </div>  
                )}
                {subActive === 'mbApp' && (
                  <div>
                    <h2 className="text-lg font-mono text-black pl-5 font-bold">Mobile App Development</h2>
                    <h2 className="text-sm  text-black pl-5">Mobile App Development</h2>
                    <div className="border-b my-6.5 ml-3 mr-4 border-black "></div>

                  <div className='grid grid-cols-2'>
                    <ul className="list-disc pl-5 mt-2">
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>Mobile App Development</p></a></p>
                      <p><a href="/odoo-customization"><p className='text-black hover:underline pb-3'>iOS App Development</p></a></p>
                      <p><a href="/odoo-migration"><p className='text-black hover:underline pb-3'>React Native App Development</p></a></p>
                    </ul>
                    <ul className="list-disc pl-5 mt-2 ">
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Android App Development</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Flutter App Development</p></a></p>
                    </ul>
                  </div>
                  <div className="border-b py-14 ml-3  mr-4 border-black"></div>
                 <div className='flex flex-row justify-center items-center'>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        hello@heliconia.io
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                  </div>

                  </div>  
                )}
                {subActive === 'soft' && (
                  <div>
                    <h2 className="text-lg font-mono text-black pl-5 font-bold">Software Testing & QA</h2>
                    <h2 className="text-sm  text-black pl-5">Software Testing & QA</h2>
                    <div className="border-b my-6.5 ml-3 mr-4 border-black "></div>

                  <div className='grid grid-cols-2'>
                    <ul className="list-disc pl-5 mt-2">
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>Software Testing & QA</p></a></p>
                      <p><a href="/odoo-customization"><p className='text-black hover:underline pb-3'>Test Automation</p></a></p>
                      <p><a href="/odoo-migration"><p className='text-black hover:underline pb-3'>Web Application Testing</p></a></p>
                    </ul>
                    <ul className="list-disc pl-5 mt-2 ">
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Load & Performance Testing</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Mobile Application Testing</p></a></p>
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Odoo Testing</p></a></p>

                    </ul>
                  </div>
                  <div className="border-b py-14 ml-3 mr-4 border-black"></div>
                  <div className='flex flex-row justify-center items-center'>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        hello@heliconia.io
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                  </div>

                  </div>  
                )}
              </div>

              {/* RIGHT COLUMN - STATIC INFO OR CTA */}
              <div className="bg-[#333333] text-white px-3 py-3 col-span-1">
                <h2 className="text-lg font-mono">Hire Dedicated Developers</h2>
                <h2 className="text-sm  text-white">IT Staff Augmentation</h2>
                <div className="border-t border-white opacity-45 mt-3 pt-6 text-sm"></div>
                <p>
                  Heliconia Solutions is a leading IT consulting and offshore software development company in India...
                </p>
                <ul className="pt-5 list-disc pl-5">
                  <li>Agile, tech-driven expertise</li>
                  <li>Quick and seamless onboarding</li>
                  <li>Strict adherence to NDAs</li>
                  <li>Commitment to on-time delivery</li>
                  <li>Time zone flexibility</li>
                <div className="border-t border-white opacity-45 my-6 mr-5 text-sm"></div>
                <a href="/">
                <p className="font-bold text-black bg-white broder rounded-sm px-3 py-3 text-center w-60 hover:scale-105 transition "> 
                    Download Brochure Now
                </p>
                </a>
                
                </ul>
              </div>
              
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Solution">
            <div className="space-y-4 bg-white w-[1200px] grid grid-cols-4 text-[16px]">
              {/* LEFT COLUMN - SUBMENU TRIGGERS */}
              <div className="border-r col-span-1">
                <h2 className="text-lg font-mono text-blue-500">Services</h2>
                <h2>Driving Your Business Forward</h2>
                <div className="border-b my-6 mr-4 border-black"></div>

                <div
                  onMouseEnter={() => setSubActive1('solution')}
                  className={`cursor-pointer p-2 mr-2 rounded ${
                    subActive1 === 'solution' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <p className="text-[15px] ">Software Solutions</p>
                </div>

              
                <div className="border-b mt-46.5 mb-6 mr-4  border-black"></div>
                <a href="/">
                <p className="font-bold text-white bg-blue-500 broder rounded-sm mt-9.5 py-3 text-center w-70 hover:scale-105 transition "> 
                    Schedule Call
                </p>
                </a>
                
              </div>

              {/* CENTER COLUMN - CHANGING CONTENT */}
              <div className="col-span-2">
                {subActive1 === 'solution' && (
                  <div>
                    <h2 className="text-lg font-mono text-black pl-5 font-bold">Web Development</h2>
                    <h2 className="text-sm  text-black pl-5">Web Development</h2>
                    <div className="border-b my-6.5 ml-3 mr-4 border-black "></div>

                    <div className='grid grid-cols-2'>
                    <ul className="list-disc pl-5 mt-2">
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>CRM</p></a></p>  
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>Human Resource</p></a></p>              

                    </ul>
                    <ul className="list-disc pl-5 mt-2 ">                
                      <p><a href="/odoo-training"><p className='text-black hover:underline pb-3'>Inventory</p></a></p>
                      <p><a href="/odoo-implementation"><p className='text-black hover:underline pb-3'>eCommerce</p></a></p>              

                    </ul>
                    </div>
                  <div className="border-b py-18 ml-3 mr-4 border-black"></div>
                  <div className='flex flex-row justify-center items-center'>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        hello@heliconia.io
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                    <a href="/">
                    <p className=" text-black text-sm bg-white hover:border-1 border-black rounded-sm px-3 mx-3 mt-10 py-3 text-center w-40 hover:scale-105 transition "> 
                        +91 9574200013
                    </p>
                    </a>
                  </div>

                  </div>
                )}
                </div>
                

              {/* RIGHT COLUMN - STATIC INFO OR CTA */}
              <div className="bg-[#333333] text-white px-3 py-3 col-span-1">
                <h2 className="text-lg font-mono">Hire Dedicated Developers</h2>
                <h2 className="text-sm  text-white">IT Staff Augmentation</h2>
                <div className="border-t border-white opacity-45 mt-3 pt-6 text-sm"></div>
                <p>
                  Heliconia Solutions is a leading IT consulting and offshore software development company in India...
                </p>
                <ul className="pt-5 list-disc pl-5">
                  <li>Agile, tech-driven expertise</li>
                  <li>Quick and seamless onboarding</li>
                  <li>Strict adherence to NDAs</li>
                  <li>Commitment to on-time delivery</li>
                  <li>Time zone flexibility</li>
                <div className="border-t border-white opacity-45 my-6 mr-5 text-sm"></div>
                <a href="/">
                <p className="font-bold text-black bg-white broder rounded-sm px-3 py-3 text-center w-60 hover:scale-105 transition "> 
                    Download Brochure Now
                </p>
                </a>
                
                </ul>
              </div>
            </div>
          </MenuItem>
          <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-6">
                  <a href="/About1"><h2 className='font-normal text-black'>About</h2></a>
                  <a href="/Blog"><h2 className='font-normal text-black'>Blog</h2></a>
                  <a href="/contact1"><h2 className='font-normal text-black'>Contact</h2></a>
            </div>
            <div className="ml-80 flex items-center justify-center gap-6">
              <a href="/">
                <p className=" text-white bg-gray-700 broder rounded-sm py-1 text-center w-40 hover:scale-105 h-10  transition text-lg font-semibold"> 
                    Request Quote
                </p>
              </a>
              <a href="/">
                <p className=" text-white bg-blue-500 broder rounded-sm py-1 text-center w-40 hover:scale-105 h-10  transition text-lg font-semibold"> 
                   Schedule Call
                </p>
              </a>
            </div>
          </div>
        </div>
      </Menu>

    </div>
 </>
  );
}