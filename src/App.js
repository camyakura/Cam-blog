import React, {useState, useEffect} from 'react';
import {Route, NavLink, Routes} from 'react-router-dom';
import Anime from './components/anime'
import Basketball from './components/basketball'
import Cooking from './components/cooking'
import Fishing from './components/fishing'
import Fitness from './components/fitness'
import axios from 'axios';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="fish-header">
        <img src="https://external-preview.redd.it/VifLNiLyaltXJ5m-EjEywHsCN7jIChkZLVEPSBBPCGc.jpg?auto=webp&s=757d713f50e04ff0b0c89b8d9070cdaf5e8abd06" className="App-logo" alt="logo" />
        <h1>The Yakult</h1>
        
        <nav>
          <ul>
            <li><NavLink to='/anime'>Anime</NavLink></li>
            <li><NavLink to='/basketball'>Basketball</NavLink></li>
            <li><NavLink to='/cooking'>Cooking</NavLink></li>
            <li><NavLink to='/fishing'>Fishing</NavLink></li>
            <li><NavLink to='/fitness'>Fitness</NavLink></li>
          </ul>

        </nav>
      </header>

      <section className='home-message'>
        <div>
          <h3>Welcome to the Life of Cam</h3>
          <img src='https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/20479582_1411764025560183_4628701405789896165_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=x744Kba5LGMAX9kFNwn&_nc_ht=scontent-lax3-2.xx&oh=00_AT_oeVFybXZA1V50VTh4T-PNQRdXKj-T9t9q9f-aLu37hw&oe=6343A329' alt='picture of cam' />
        </div>

      </section>

      <Routes>
        <Route path='anime' element={<Anime />} />
        <Route path='basketball' element={<Basketball />} />
        <Route path='cooking' element={<Cooking />} />
        <Route path='fishing' element={<Fishing />} />
        <Route path='fitness' element={<Fitness />} />
      </Routes>

      <footer>
        <p>Contact me at cyakura310@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
