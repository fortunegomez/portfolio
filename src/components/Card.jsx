function Card({ link, children, btnText }) {
  return (
    <div
      className="bg-[#0B1A23] mt-10 border-4 border-[#125B88] rounded-[20px] pb-4"
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(180deg, rgba(0, 36, 44, 0.00) 0%, #01191F 39.06%)';
        (e.currentTarget.style.border = '1px solid #00517B'),
          (e.currentTarget.querySelector('img').style.transform = 'scale(0.9)');
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(180deg, #004757 22.70%, rgba(0, 36, 44, 0.00) 100%)';
        e.currentTarget.querySelector('img').style.transform = 'scale(1)';
        e.currentTarget.style.border = '3px solid #00517B';
      }}
    >
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
