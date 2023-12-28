import Card from '../components/Card';
import spaceServe from '../assets/Frame 14.jpg';
import next from '../assets/Frame 39.jpg';

function WebDesign() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-7">
      {cardDetails.map((card) => {
        return (
          <Card key={card.title} btnText="VIEW WEBSITE">
            <img
              src={card.image}
              alt=""
              className="rounded-tl-[16px] rounded-tr-[16px] cursor-pointer max-h-[160px] md:max-h-max w-full object-cover"
            />
            <div className="p-3">
              <h1 className="text-[#F0F6FA] text-[20px] lg:text-[26px] font-normal">
                {card.title}
              </h1>
              <p
                className="text-[13px] md:text-[14px] text-[#F0F6FA]"
                dangerouslySetInnerHTML={{ __html: card.description }}
              ></p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

const cardDetails = [
  {
    image: spaceServe,
    title: 'Spaceserve - Company Website',
    description: '<strong>Technology Used:</strong> REACT, CSS',
    source: '',
  },
  {
    image: next,
    title: 'Landing Page Website',
    description: '<strong>Technology Used:</strong> REACT, CSS',
    source: '',
  },
];

export default WebDesign;
