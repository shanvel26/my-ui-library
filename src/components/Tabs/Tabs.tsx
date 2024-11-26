// src/Tabs.tsx
import React, { useState } from 'react';
import './tabs.css';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
        <div
          className="underline"
          style={{
            transform: `translateX(${activeTab * 100 - 100}%)`,
          }}
        />
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-content ${index === activeTab ? 'active' : ''}`}
          >
            {`Content for ${tab}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
