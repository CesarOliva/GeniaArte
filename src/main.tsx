import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { GoogleOAuthProvider } from "@react-oauth/google"
import ScrollToTop from './components/ScrollToTop.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <AuthProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <BrowserRouter>
            <ScrollToTop />
            <Toaster position='bottom-center'/>
            <App />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </AuthProvider>
    </ConvexProvider>
  </StrictMode>,
)
