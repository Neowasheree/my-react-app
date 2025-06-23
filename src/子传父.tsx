// 子组件调用父组件传入的函数，向父组件传值
import React from 'react';
import { useState } from 'react';

function ChildToParent() {
  const [msg, setMsg] = useState('');

  const handleReceive = (m: string) => setMsg(m);

  return (
    <div>
      <Child onSend={handleReceive} />
      <p>父组件收到：{msg}</p>
    </div>
  );
}

function Child({ onSend }: { onSend: (msg: string) => void }) {
  return <button onClick={() => onSend('你好，父组件！')}>子传父</button>;
}

export default ChildToParent;