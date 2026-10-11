

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, MotionConfig } from 'framer-motion'
import './styles/tokens.css'
import './styles/global.css'
import App from './App.jsx'

const loadFeatures = () => import('./motionFeatures.js').then((module) => module.default)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      
      <LazyMotion features={loadFeatures} strict>
        <App />
      </LazyMotion>
    </MotionConfig>
  </StrictMode>,
)