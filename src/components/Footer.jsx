import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-[40px] flex flex-col justify-center items-center bg-[#0F0F0F]">
      <div className="text-center">
        <p>
          Email:{' '}
          <a href="mailto:FORTUNEGOMEZ@GMAIL.COM" className="underline">
            FORTUNEGOMEZ@GMAIL.COM
          </a>
        </p>

        <ul className="flex gap-5 py-5 underline text-[12px] md:text-[16px]">
          <li>
            <Link target="_blank" to="https://www.behance.net/Fortuneidu">
              BEHANCE
            </Link>
          </li>
          <li>
            <Link target="_blank" to="http://linkedin.com/in/fortune-idu">
              LINKEDIN
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to="https://instagram.com/fortune_designux?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
            >
              INSTAGRAM
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://dribbble.com/FORTUNEGOMEZ">
              DRIBBLE
            </Link>
          </li>
        </ul>
        <p className="text-[12px] md:text-[16px]">
          Design by yours truly. Built with REACT
        </p>
        <p className="pt-2 md:pt-5 text-[12px] md:text-[16px]">2023</p>
      </div>
    </footer>
  );
}

export default Footer;
