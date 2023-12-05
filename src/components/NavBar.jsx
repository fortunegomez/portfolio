export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-5 px-20">
      <h1 className="text-[35px] font-bold">Fortune Idu</h1>
      <ul className="flex gap-8 text-[#F0F6FA] text-[16px] font-normal">
        <li>
          <a href="" className="">
            Project
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Resume</a>
        </li>
      </ul>
      <a
        href=""
        className="bg-[#46ADED] font-semibold text-black py-[0.8rem] px-6 rounded-[10px]"
      >
        Contact
      </a>
    </nav>
  );
}
