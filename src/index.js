import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Venue from './components/Venue';
import Category from './components/Category';
import Event from './components/Event';
import Organizer from './components/Organizer'
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/venue' element={<Venue />} />
      <Route path='/category' element={<Category />} />
      <Route path='/organizer' element={<Organizer />} />
      <Route path='/event' element={<Event />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

