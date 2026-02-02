import { createRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import App from './App.tsx'
import './index.css'

inject()

createRoot(document.getElementById("root")!).render(<App />);
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
