import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProtected from './context/UserContextProtected.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProtected>
    <App />
  </UserContextProtected>
  
)
