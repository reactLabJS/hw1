import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import ShopMen from './components/Shopmen/ShopMen';
import ShopWomen from './components/Shopwomen/ShopWomen';



import Home from './Pages/Home';

function App() {
  return (
    <>
    
      <Header/>
      <Home/>
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shopmen" element={<ShopMen/>} />
      <Route path="invoices" element={<ShopWomen/>} />
    </Routes>

    </>
  );
}

export default App;
