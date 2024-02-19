import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import linkedin from '../assets/linkedin-icon.svg';
import instagram from '../assets/instagram-icon.svg';
import twitter from '../assets/twitter-x-icon.svg';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen">
      <NavBar />
      <main className="p-[20px] md:p-[50px] lg:p-[80px] flex flex-col justify-center lg:w-[65%] items-center m-auto text-center">
        <h1 className="text-[25px] md:text-[32px] font-bold">Get in Touch</h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F0F6FA]">
          Feel free to reach out via email or connect with me on social media so
          we can create Magic together✨
        </p>
        <div className="py-8 flex items-center gap-3">
          <h2>Email me</h2>
          <a href="mailto:FORTUNEGOMEZ@GMAIL.COM" className="underline">
            FORTUNEGOMEZ@GMAIL.COM
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Link target="_blank" to="http://linkedin.com/in/fortune-idu">
            <img src={linkedin} alt="" className="cursor-pointer h-[50px]" />
          </Link>
          <Link
            target="_blank"
            to="https://instagram.com/fortune_designux?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
          >
            <img src={instagram} alt="" className="cursor-pointer h-[50px]" />
          </Link>
          <Link target="_blank" to="https://twitter.com/FortuneIdu">
            <img src={twitter} alt="" className="cursor-pointer h-[50px]" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
