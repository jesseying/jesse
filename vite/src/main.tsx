import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'tdesign-react/es/style/index.css' // 少量公共样式
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
