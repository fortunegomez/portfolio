import { useState } from 'react';

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="py-5">
      <div className="flex gap-12 space-x-3 border-b">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-teal-500'
                  : 'border-transparent hover:border-gray-200'
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
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}

const tabsData = [
  {
    label: 'UX/UI DESIGN',
    content:
      'Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.',
  },
  {
    label: 'WEB DEVELOPMENT',
    content:
      'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
  },
  {
    label: 'LOGO DESIGN',
    content:
      'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
  },
];
