function Card({ link, children, btnText }) {
  return (
    <div className="bg-[#0B1A23] mt-10 border-4 border-[#125B88] rounded-[20px] pb-4">
      {children}
      <a
        href={link}
        className="mx-3 cursor-pointer bg-[#0F364E] text-white text-[14px] font-medium px-4 py-2 rounded-sm"
      >
        {btnText}
      </a>
    </div>
  );
}

export default Card;
