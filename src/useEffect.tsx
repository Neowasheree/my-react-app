import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('加载中...');
  const [time, setTime] = useState(0);

  // ✅ 1. 组件挂载时：获取用户名（模拟异步）
  useEffect(() => {
    console.log('组件已挂载，开始加载用户信息...');
    const timer = setTimeout(() => {
      setUsername('小明');
      console.log('用户信息加载完成');
    }, 1000);

    return () => {
      clearTimeout(timer); // ✅ 清除异步副作用
      console.log('组件卸载，清除异步加载');
    };
  }, []);

  // ✅ 2. 监听 count 更新
  useEffect(() => {
    console.log('count 发生变化：', count);
  }, [count]);

  // ✅ 3. 定时器：每秒更新一次 time
  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(t); // ✅ 清理定时器
      console.log('清除定时器');
    };
  }, []); // 只设置一次定时器

  return (
    <div style={{ padding: 20 }}>
      <h2>🌟 useEffect 综合示例</h2>
      <p>用户名：{username}</p>
      <p>计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>点我 +1</button>
      <p>已运行时间：{time} 秒</p>
    </div>
  );
}

export default App;
