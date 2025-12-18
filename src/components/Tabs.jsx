import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('simple');

  const tabs = [
    { id: 'simple', label: 'Simple Bookmarking' },
    { id: 'speedy', label: 'Speedy Searching' },
    { id: 'easy', label: 'Easy Sharing' },
  ];

  return (
    <div className="w-full">
      <div className="flex border-b border-grey-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-4 text-preset-6 transition-colors relative ${
              activeTab === tab.id
                ? 'text-blue-950 border-b-4 border-red-400'
                : 'text-grey-600 hover:text-red-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-8">
        <p className="text-grey-600">Content for {activeTab} tab</p>
      </div>
    </div>
  );
}