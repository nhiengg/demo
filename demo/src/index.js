import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import './index.css';
import LoginForm from './Components/Login/LoginForm';
import Dashboard from './Components/Home/Dashboard';
import reportWebVitals from './reportWebVitals';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
