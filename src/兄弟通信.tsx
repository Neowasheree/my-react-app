// Left 输入框输入 → 通过父组件状态中转 → Right 显示
import { useState } from 'react';

function SiblingCommunication() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Left onInput={setValue} />
      <Right text={value} />
    </div>
  );
}

function Left({ onInput }: { onInput: (v: string) => void }) {
  return <input onChange={e => onInput(e.target.value)} />;
}

function Right({ text }: { text: string }) {
  return <p>Right 收到：{text}</p>;
}

export default SiblingCommunication