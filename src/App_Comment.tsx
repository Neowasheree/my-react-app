import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Comment = {
  id: number;
  author: string;
  text: string;
  createdAt: string;
  likes: number;
};

const tabs = [
  { id: 1, label: 'Home', content: '这是首页内容 🏠' },
  { id: 2, label: 'About', content: '关于我们介绍 📘' },
  { id: 3, label: 'Contact', content: '联系方式在这里 ☎️' },
];

const initialComments: Comment[] = [
  {
    id: 1,
    author: 'Alice',
    text: 'React 很棒！',
    createdAt: '2024-06-04T10:00:00',
    likes: 2
  },
  {
    id: 2,
    author: 'Bob',
    text: 'Hooks 太强了 👍',
    createdAt: '2024-06-04T10:30:00',
    likes: 5
  },
  {
    id: 3,
    author: 'Charlie',
    text: 'Vite 超快！🔥',
    createdAt: '2024-06-04T09:00:00',
    likes: 1
  }
];

export default function App_tab() {
  const [activeTabId, setActiveTabId] = useState(1);
  const [comments, setComments] = useState<Comment[]>(initialComments); //<>为泛型，表示数据类型
  const [sortType, setSortType] = useState<'latest' | 'likes'>('latest');

  const handleDelete = (id: number) => {
    setComments(prev => prev.filter(comment => comment.id !== id));
  };

  const handleLike = (id: number) => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortType === 'latest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* 🔹 React Logo 和官方链接 */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App_tab.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 🔹 Tab 区域 */}
        <div className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTabId === tab.id ? 'tab active' : 'tab'}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.find((tab) => tab.id === activeTabId)?.content}
        </div>

        {/* 🔹 评论区 */}
        <div className="comment-section">
          <h3>评论区</h3>
          <div className="sort-buttons">
            <button onClick={() => setSortType('latest')}>按时间排序</button>
            <button onClick={() => setSortType('likes')}>按点赞数排序</button>
          </div>
          {sortedComments.length === 0 ? (
            <p>暂无评论。</p>
          ) : (
            <ul className="comment-list">
              {sortedComments.map((c) => (
                <li key={c.id}>
                  <div>
                    <span>{c.author}:</span>
                    <span className="comment-text">{c.text}</span>
                  </div>
                  <div className="comment-meta">
                    <span>{new Date(c.createdAt).toLocaleString()}</span>
                    <span>👍 {c.likes}</span>
                    <button onClick={() => handleLike(c.id)}>+1</button>
                    <button className="del-btn" onClick={() => handleDelete(c.id)}>删除</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}
