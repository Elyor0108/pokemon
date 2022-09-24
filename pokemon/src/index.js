import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonPage from './components/PokemonPage';
import PokeAPI from './components/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/search' element={<PokeAPI/>}></Route>
      <Route path='/:id' element={<PokemonPage/>}/>
    </Routes>
  </BrowserRouter>
);