import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './componentes/Character/Character';
import Home from './componentes/Home/Home';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <header>
        <Header />
      </header>

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/character" element={<Character/>}/>
      </Routes>

      <footer className='footer-div'>
        <Footer/>
      </footer>

    </BrowserRouter>
    </div>
    
  );
}

export default App;
