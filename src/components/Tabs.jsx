import { useState } from 'react';
import UxDesign from '../layouts/UxDesign';
import WebDesign from '../layouts/WebDesign';
import LogoDesign from '../layouts/LogoDesign';

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="py-5">
      <div className="flex md:gap-12 space-x-3 border-b">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b transition-colors duration-300 text-[12px] md:text-[16px] lg:text-[20px] text-[#F0F6FA] ${
                idx === activeTabIndex
                  ? 'border-teal-500 font-bold'
                  : 'border-transparent hover:border-gray-200 font-medium'
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="py-2 lg:py-4">
        <div>{tabsData[activeTabIndex].content}</div>
      </div>
    </div>
  );
}

const tabsData = [
  {
    label: 'UX/UI DESIGN',
    content: <UxDesign />,
  },
  {
    label: 'WEB DEVELOPMENT',
    content: <WebDesign />,
  },
  {
    label: 'LOGO DESIGN',
    content: <LogoDesign />,
  },
];
