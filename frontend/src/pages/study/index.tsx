import React from 'react';
import { createRoot } from 'react-dom/client';
import Stopwatch from './components/Stopwatch';

const App: React.FC = () => {
    return (
      <div>
        <Stopwatch />
      </div>
    );
  };

const container = document.getElementById('root');
if (!container) {
  throw new Error('No root element found');
}
const root = createRoot(container);
root.render(<App />);