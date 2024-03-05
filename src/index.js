import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CryptoProvider } from './context/CryptoContext';
import { TrendingProvider } from './context/TrendingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoProvider>
      <TrendingProvider>
        <App />
      </TrendingProvider>
    </CryptoProvider>
  </React.StrictMode>
);
