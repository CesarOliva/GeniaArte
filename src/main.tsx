import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import ScrollToTop from './components/ScrollToTop.tsx'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConvexProvider client={convex}>
        <ScrollToTop />
        <App />
      </ConvexProvider>
    </BrowserRouter>
  </StrictMode>,
)
