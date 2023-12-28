import Card from '../components/Card';
import budget from '../assets/Frame 36.jpg';
import realEstate from '../assets/Frame 37.jpg';
import eCommerce from '../assets/Frame 38.jpg';

function UxDesign() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-7">
      {cardDetails.map((card) => {
        return (
          <Card key={card.title} btnText="VIEW CASE STUDY">
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
    image: budget,
    title: 'Budget App',
    description:
      '<strong>Planwise</strong> is a mobile financial app that helps with budgeting your finances',
    source: '',
  },
  {
    image: realEstate,
    title: 'Real-Estate Web-app',
    description:
      '<strong>Homescope</strong> is a web-app that helps users find apartments easily',
    source: '',
  },
  {
    image: eCommerce,
    title: 'E-commerce Web-app',
    description:
      '<strong>Vendola</strong> is an E-commerce Admin platform that allows admin to track the platform activity.',
    source: '',
  },
];

export default UxDesign;
