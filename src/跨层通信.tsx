import React, { createContext, useContext } from 'react';

const UserContext = createContext<string>('');

// 最外层提供数据
function ContextDemo() {
  return (
    <UserContext.Provider value="小红">
      <Level1 />
    </UserContext.Provider>
  );
}

function Level1() {
  return <Level2 />;
}

function Level2() {
  return <DeepChild />;
}

function DeepChild() {
  const user = useContext(UserContext);
  return <p>跨层获取的用户：{user}</p>;
}

export default ContextDemo