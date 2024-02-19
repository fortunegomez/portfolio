import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

export default function NavBar() {
  const links = [
    { name: 'Project', link: '/#project' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav
      className="flex justify-between items-center py-5 px-5 md:px-10 lg:px-20 sticky top-0 bg-[#09141b] z-50"
      id="your-navbar-id"
    >
      <Link to="/">
        <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-bold">
          Fortune Idu
        </h1>
      </Link>
      <nav className={`nav ${open ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 md:z-auto md:static fixed top-[4.5rem] lg:top-0 right-0 h-full w-full transition-all ease-in duration-200 md:opacity-100 md:w-auto px-0 lg:px-[50px] z-50 bg-black lg:bg-inherit pl-5 pt-5 lg:pl-0 lg:pt-0 text-[#F0F6FA] text-[24px] lg:text-[16px]">
          {links.map((link) => {
            const isActive = location.pathname.startsWith(link.link);
            return (
              <li
                key={link.name}
                className="xm:text-center lg:h-full flex items-center py-3 lg:py-0"
              >
                <Link
                  to={link.link}
                  className={` ${isActive ? 'text-[#46ADED]' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* #46ADED */}
      <Link
        to="/"
        className="bg-[#46ADED] font-semibold text-black py-[0.8rem] px-6 rounded-[10px] hidden lg:block"
      >
        Resume
      </Link>
      <span className="cursor-pointer lg:hidden block" onClick={toggleMenu}>
        {open ? <IoClose size={25} /> : <GiHamburgerMenu size={25} />}
      </span>
    </nav>
  );
}
