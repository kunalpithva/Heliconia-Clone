import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const panelWrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = panelWrapperRef.current;
    const panels = gsap.utils.toArray('.panel');

    const totalScroll = wrapper.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(wrapper, {
      x: () => `-${totalScroll}px`,
      ease: 'none',
      scrollTrigger: {
        id: 'horizontal',
        trigger: container,
        start: 'top top',
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    panels.forEach((panel) => {
      gsap.to(panel, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: 'left ',
          end: 'right ',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
  <section
  ref={containerRef}
  className="relative overflow-hidden bg-white shadow-2xl border-50 border-white h-[150%] pb-45"
  style={{ height: '120vh' }}
  >

    <h2 className='text-3xl text-blue-500 font-bold md:pl-10 font-mono text-center '>
    Our Success Stories: Transforming Businesses with Technology
    </h2>

    <h2 className='text-xl md:px-10 text-center  '>
    Explore our portfolio of innovative Odoo,
    web, and mobile solutions. From eCommerce to 
    enterprise systems, we deliver tailored, scalable results.
    </h2>

  <div
  ref={panelWrapperRef}
  className="flex h-full "
  style={{ width: 'calc(150vw + 40px)' }} // 3 panels * 50vw + 2 gaps (gap-10 = 40px total)
  >
  {/* Panel 1 */}
  <div className="panel w-[45vw] flex-shrink-0 flex items-center justify-center">
    <div className="text-[10px] border p-6 rounded-xl bg-white shadow-md w-135 h-120">
      <img src="/portfolio-littleq.webp" alt="LittleQ" className="w-full h-64 object-cover mb-4" />
      <h1 className="font-mono font-bold text-blue-500 pt-7">LittleQ</h1>
      <p className="text-sm mt-4 text-gray-700">
        LittleQ is a Next.js website with headless Odoo eCommerce, powered by secure GraphQL APIs for seamless integration, efficient data handling, and scalability.
      </p>
    </div>
  </div>

  {/* Panel 2 */}
  <div className="panel w-[45vw] flex-shrink-0 flex items-center justify-center">
    <div className="text-[10px] border p-6 rounded-xl bg-white shadow-md w-135 h-120">
      <img src="/portfolio-ramdev-kangan.webp" alt="Ramdev Kangan" className="w-full h-64 object-cover mb-4" />
      <h1 className="font-mono font-bold text-blue-500 pt-7">Ramdev Kangan</h1>
      <p className=" text-sm mt-4 text-gray-700">
        A custom eCommerce app built with Odoo eCommerce and Flutter, enabling seamless product and order management.
      </p>
    </div>
  </div>

  {/* Panel 3 */}
  <div className="panel w-[45vw] flex-shrink-0 flex items-center justify-center">
    <div className="text-[10px] border p-6 rounded-xl bg-white shadow-md w-135 h-120">
      <img src="/portfolio-frontseller.webp" alt="Frontseller" className="w-full h-64 object-cover mb-4" />
      <h1 className="font-mono font-bold text-blue-500 pt-7">Frontseller</h1>
      <p className="text-sm mt-4 text-gray-700">
       A powerful Odoo SaaS-based eCommerce solution that lets anyone launch an online store effortlessly, fully integrated with Odoo eCommerce.
      </p>
    </div>
  </div>
</div>

<div className='text-center   '>
  <h2>Have a similar idea about the projects?</h2>
  <a href="/">
    <p className="bg-blue-500 h-10 text-[13px] w-40 text-center hover:scale-110 border text-white font-bold py-2 mt-2 rounded-lg mx-135 transition duration-300">
      Start Project Now
    </p>
  </a>
</div>

</section>

  );
};

export default HorizontalScroll;
