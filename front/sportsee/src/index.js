import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Start from './pages/start/Start'
import ErrorPage from './pages/Error/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <div className='wrapper'>
      <SideBar />
      <Routes>
        <Route index element={<Start />} />
        <Route path="/user/:id" element={<Home/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    
  </BrowserRouter>
);

