import amasel from '../assets/Frame 40.jpg';
import neoclan from '../assets/Frame 41.jpg';
import Card from '../components/Card';

function LogoDesign() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-7">
      {cardDetails.map((card) => {
        return (
          <Card key={card.title} btnText="VIEW PROJECT">
            <img
              src={card.image}
              alt=""
              className="rounded-tl-[16px] rounded-tr-[16px] cursor-pointer max-h-[160px] md:max-h-max w-full object-cover"
            />
            <div className="p-3">
              <h1 className="text-[#F0F6FA] text-[20px] lg:text-[26px] font-normal">
                {card.title}
              </h1>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

const cardDetails = [
  {
    image: amasel,
    title: 'Amasel',
    source: '',
  },
  {
    image: neoclan,
    title: 'Neoclan Technology',
    source: '',
  },
];

export default LogoDesign;
