import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <div>Hello, React with TypeScript and Webpack!</div>;
};

// Tạo root và render ứng dụng
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);