import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
const Query = new QueryClient();
import { router } from './router/index.jsx';
('rou');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={Query}>
      <RouterProvider router={router}>
        <App />
        <ReactQueryDevtools />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
