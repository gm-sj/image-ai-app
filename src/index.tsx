import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

enableMocking()
  .catch((error) => {
    throw new Error(`Failed to enable mocking: ${error.message}`);
  })
  .finally(() => {
    root.render(<App />);
  });
