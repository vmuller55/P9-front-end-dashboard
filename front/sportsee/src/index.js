import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Start from './pages/start/Start'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <SideBar />
    <Routes>
      <Route path='/user/' element={<Start />} />
      <Route path="/user/:id" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);

