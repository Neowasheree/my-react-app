import React from 'react';

// 父组件 → 向子组件传递 name
function ParentToChild() {
  return <Child name="小明" />;
}

function Child({ name }: { name: string }) {
  return <div>你好，我是子组件，接收到：{name}</div>;
}

export default ParentToChild;
