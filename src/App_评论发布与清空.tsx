import React, { useState, useRef } from 'react';
import './App.css';

type Comment = {
  id: number;
  author: string;
  text: string;
  createdAt: string;
};

export default function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePost = () => {
    if (!input.trim()) return;

    const newComment: Comment = {
      id: nextId,
      author: '游客',
      text: input.trim(),
      createdAt: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    setNextId(prev => prev + 1);
    setInput(''); //发布后评论框自动清空
    inputRef.current?.focus(); // 自动聚焦
  };

  return (
    <div className="App">
      <h2>评论区</h2>
      <div className="comment-box">
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="请输入评论内容"
        />
        <button onClick={handlePost}>发布</button>
      </div>

      <ul className="comment-list">
        {comments.map((c) => (
          <li key={c.id} className="comment-item">
            <div className="comment-author">{c.author}</div>
            <div className="comment-text">{c.text}</div>
            <div className="comment-time">
              {new Date(c.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
