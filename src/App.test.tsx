import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const tabs = [
  { id: 1, label: 'Home', content: '这是首页内容' },
  { id: 2, label: 'About', content: '关于我们介绍' },
  { id: 3, label: 'Contact', content: '联系方式在这里' }
];

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* 👉 Tabs 区域 */}
        <div className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'tab active' : 'tab'}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 👉 显示选中内容 */}
        <p className="tab-content">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </p>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
