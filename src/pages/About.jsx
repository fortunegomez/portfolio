import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { BsDot } from 'react-icons/bs';
import aboutPics from '../assets/about.png';
import tools from '../assets/Tools.svg';

function About() {
  return (
    <>
      <NavBar />
      <main className="p-[20px] md:p-[50px] lg:px-[80px]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-[60%]">
            <div>
              <h1 className="text-[25px] md:text-[32px] font-bold">About Me</h1>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F0F6FA]">
                Hello! I&apos;m Fortune Idu, a passionate Product Designer with
                a unique blend of skills in UX/UI design, logo/brand design, and
                web development. I hold a BSc in Geology from the University of
                Benin, and my journey into the world of design and technology
                began in 2019.
              </p>
            </div>
            <div className="pt-5">
              <h1 className="text-[25px] md:text-[32px] font-bold">
                Professional Journey
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F0F6FA]">
                I kickstarted my career as a graphic designer, crafting
                compelling logos and graphics for clients. My love for
                problem-solving through design led me to transition into UX
                Design in 2020. The focus on creating user-centric experiences
                resonated with my goal of making lives easier and helping
                businesses thrive by understanding user needs. Over the past
                four years, I&apos;ve immersed myself in diverse tech
                industries, including FINTECH, Logistics, Software design, and
                Asset Management. Working in various startup environments, I not
                only honed my UX/UI skills but also embraced front-end
                development, adding React.js, Webflow, and Framer to my toolkit.
              </p>
            </div>
          </div>
          <div>
            <img src={aboutPics} alt="" />
          </div>
        </div>
        <div className="py-5 md:w-[60%]">
          <h1 className="text-[25px] md:text-[32px] font-bold">
            Skills Snapshot
          </h1>
          <ul>
            <li className="flex items-center">
              <span>
                <BsDot />
              </span>
              UX Design
            </li>
            <li className="flex items-center">
              <span>
                <BsDot />
              </span>
              UI Design
            </li>
            <li className="flex items-center">
              <span>
                <BsDot />
              </span>
              Logo/Brand Design
            </li>
            <li className="flex items-center">
              <span>
                <BsDot />
              </span>
              Web Development (React.js, Webflow)
            </li>
          </ul>
          <div className="pt-8">
            <img src={tools} alt="" className="h-[50px]" />
          </div>
        </div>

        <div className="py-5 md:w-[60%]">
          <h1 className="text-[25px] md:text-[32px] font-bold">
            The Intersection of Curiosity & Creativity
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F0F6FA]">
            I&apos;m a naturally inquisitive person, constantly seeking to
            expand my skill set and stay ahead of industry trends. This
            curiosity fuels my creativity, allowing me to approach design
            challenges with fresh perspectives.
          </p>
        </div>

        <div className="py-5 md:w-[60%]">
          <h1 className="text-[25px] md:text-[32px] font-bold">
            Beyond the Screen 💻
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F0F6FA]">
            Outside the realm of pixels and code, I find joy in watching
            football matches and hitting the gym to lift weights. Balancing work
            with personal interests keeps me energized and inspired.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
