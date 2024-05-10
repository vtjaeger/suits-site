import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './componentes/Character/Character';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/character" element={<Character/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
