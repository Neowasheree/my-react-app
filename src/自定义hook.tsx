import React, { useState } from 'react';

// 自定义 Hook：计数器逻辑封装
function useCounter(initial: number = 0) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initial);

  return { count, increment, decrement, reset };
}

// 使用这个 Hook 的组件
function App() {
  const { count, increment, decrement, reset } = useCounter(5); // 初始值为 5

  return (
    <div style={{ padding: '20px' }}>
      <h2>自定义 Hook 示例：useCounter</h2>
      <p>当前计数：{count}</p>
      <button onClick={increment}>加一</button>
      <button onClick={decrement}>减一</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}

export default App;
