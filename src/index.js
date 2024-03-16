import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Venue from './components/Venue';
import Category from './components/Category';
import Organizer from './components/Organizer';
import Event from './components/Event';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/venue' element={<Venue />} />
      <Route path='/category' element={<Category />} />
      <Route path='/organizer' element={<Organizer />} />
      <Route path='/event' element={<Event/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

