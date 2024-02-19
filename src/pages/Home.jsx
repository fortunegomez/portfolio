import NavBar from '../components/NavBar';
import { Tabs } from '../components/Tabs';
import fortune from '../assets/Frame 17.png';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Home() {
  const location = useLocation();
  const sectionRef = useRef();

  useEffect(() => {
    if (sectionRef.current && location.hash === '#project') {
      const sectionElement = sectionRef.current;
      const navbarElement = document.getElementById('your-navbar-id');

      // Check if the navbar element exists before accessing its offsetHeight
      const navHeight = navbarElement ? navbarElement.offsetHeight : 0;

      // Calculate the scroll position
      const scrollPosition = sectionElement.offsetTop - navHeight;

      // Use window.scrollTo to navigate to the calculated position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <section className="max-h-screen h-[90vh] flex flex-col justify-center p-[20px] md:p-[50px] lg:p-[80px]">
        <div>
          <h1 className="pb-5">
            Hi there <span className="text-[#B0B0B0]">I&apos;m Fortune</span>,
          </h1>
          <h1 className="text-[19px] md:text-[30px] lg:text-[48px] leading-tight mb-8">
            Experienced&nbsp;
            <span className="text-[#B0B0B0]">Product/UX Designer</span>,&nbsp;
            <span className="text-[#B0B0B0]">Logo Designer</span>
            ,&nbsp;and&nbsp;
            <span className="text-[#B0B0B0]">Web Developer</span>. I create
            experiences, shape brands, and bring ideas to life.
          </h1>
          <Link
            to="/about"
            className="bg-[#46ADED] font-semibold text-black py-[0.8rem] px-6 rounded-[10px]"
          >
            Contact
          </Link>
        </div>
      </section>
      <section
        className="p-[20px] md:p-[50px] lg:p-[80px]"
        id="project"
        ref={sectionRef}
      >
        <h1 className="text-[25px] md:text-[32px] font-bold">Selected Works</h1>
        <Tabs />
      </section>
      <section className="p-[20px] md:p-[50px] lg:p-[80px] flex flex-col md:flex-row items-center gap-7 md:gap-14 justify-center border-y border-y-[#d9d9d980]">
        <div className="md:w-[20%]">
          <img src={fortune} alt="" className="h-[150px] md:h-auto" />
        </div>
        <div className="md:w-[75%]">
          <h1 className="text-[25px] md:text-[32px] font-bold">
            Nice to have you here!
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F0F6FA]">
            As a digital industry generalist with 4+ years of experience,
            I&apos;m passionate about new technologies, fitness, and football.{' '}
            <span className="underline">Discover more about me</span>. I&apos;m
            eager to take on fresh challenges, so feel free to{' '}
            <span className="underline">
              reach out if you&apos;re interested in collaborating
            </span>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
