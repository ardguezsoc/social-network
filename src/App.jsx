import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Root } from './routes/root';
import { InfrastructureProvider } from './context/infraestructure';
import NotFoundPage from './pages/NotFound';
import { QueryClient, QueryClientProvider } from 'react-query';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import UserDetails from './pages/UserDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 3600,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <InfrastructureProvider>
          <Router>
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Root />} />
              <Route path="/users/:id" element={<UserDetails />} />
            </Routes>
          </Router>
        </InfrastructureProvider>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
