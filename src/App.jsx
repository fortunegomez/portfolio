import NavBar from './components/NavBar';
import { Tabs } from './components/Tabs';

function App() {
  return (
    <>
      <NavBar />
      <section className="max-h-screen h-[90vh] flex flex-col justify-center px-[80px]">
        <div>
          <h1 className="pb-5">
            Hi there <span className="text-[#B0B0B0]">I'm Fortune</span>,
          </h1>
          <h1 className="text-[48px] leading-tight mb-8">
            Experienced&nbsp;
            <span className="text-[#B0B0B0]">Product/UX Designer</span>,&nbsp;
            <span className="text-[#B0B0B0]">Logo Designer</span>
            ,&nbsp;and&nbsp;
            <span className="text-[#B0B0B0]">Web Developer</span>. I create
            experiences, shape brands, and bring ideas to life.
          </h1>
          <a
            href=""
            className="bg-[#46ADED] font-semibold text-black py-[0.8rem] px-6 rounded-[10px]"
          >
            Contact
          </a>
        </div>
      </section>
      <section className="p-[80px]">
        <h1 className="text-[32px] font-bold">Selected Works</h1>
        <Tabs />
      </section>
      <section className="mx-[80px] py-[80px] flex items-center justify-center border-y border-y-[#d9d9d980]">
        <div className="w-[20%]">
          <div className="h-[160px] w-[160px] bg-white rounded-full"></div>
        </div>
        <div className="w-[80%]">
          <h1 className="text-[32px] font-bold">Nice to have you here!</h1>
          <p className="text-[24px] text-[#F0F6FA]">
            As a digital industry generalist with 4+ years of experience, I'm
            passionate about new technologies, fitness, and football.{' '}
            <span className="underline">Discover more about me</span>. I'm eager
            to take on fresh challenges, so feel free to{' '}
            <span className="underline">
              reach out if you're interested in collaborating
            </span>
            .
          </p>
        </div>
      </section>
      <footer className="py-[40px] flex flex-col justify-center items-center">
        <div className="text-center">
          <p>
            Email:{' '}
            <a href="mailto:FORTUNEGOMEZ@GMAIL.COM" className="underline">
              FORTUNEGOMEZ@GMAIL.COM
            </a>
          </p>

          <ul className="flex gap-5 py-5 underline">
            <li>
              <a href="https://www.behance.net/Fortuneidu">BEHANCE</a>
            </li>
            <li>
              <a href="http://linkedin.com/in/fortune-idu">LINKEDIN</a>
            </li>
            <li>
              <a href="https://instagram.com/fortune_designux?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/FORTUNEGOMEZ">DRIBBLE</a>
            </li>
          </ul>
          <p>Design by yours truly. Built with REACT</p>
          <p className="pt-5">2023</p>
        </div>
      </footer>
    </>
  );
}

export default App;
