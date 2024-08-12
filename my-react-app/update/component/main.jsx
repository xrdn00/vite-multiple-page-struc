import React from 'react'
import ReactDOM from 'react-dom/client'
import Update from './Update'
import Modal from './Modal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Modal />
        <Update />
    </React.StrictMode>,
    
  )