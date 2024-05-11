import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './componentes/Character/Character';
import Home from './componentes/Home/Home';
import Footer from './componentes/Footer/Footer';
import { Header } from './componentes/Header/Header';
import MikeRoss from './componentes/MikeRoss/MikeRoss';
import HarveySpecter from './componentes/HarveySpecter/HarveySpecter';
import DonnaPaulsen from './componentes/DonnaPaulsen/DonnaPaulsen';
import LouisLitt from './componentes/LouisLitt/LouisLitt';
import RachelZane from './componentes/RachelZane/RachelZane';
import JessicaPearson from './componentes/JessicaPearson/JessicaPearson';
import RobertZane from './componentes/RobertZane/RobertZane';
import KatrinaBennett from './componentes/KatrinaBennet/KatrinaBennet';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/character/1" element={<MikeRoss />} />
          <Route path="/character/2" element={<HarveySpecter/>} />
          <Route path="/character/3" element={<DonnaPaulsen/>} />
          <Route path="/character/4" element={<RachelZane/>} />
          <Route path="/character/5" element={<LouisLitt/>} />
          <Route path="/character/6" element={<JessicaPearson/>} />
          <Route path="/character/7" element={<RobertZane/>} />
          <Route path="/character/8" element={<KatrinaBennett/>} />
          
        </Routes>

        <footer className='footer-div'>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
