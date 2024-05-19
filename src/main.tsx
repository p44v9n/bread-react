import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from "@/components/ui/toaster"

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App setStep={undefined} /> */}
    <App />
    <Toaster />
  </React.StrictMode>,
)
