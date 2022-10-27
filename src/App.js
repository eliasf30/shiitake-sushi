import { useSelector } from 'react-redux';
import './App.css';
import Cart from './components/cart/cart';
import Hero from './components/hero/hero';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar.jsx';



function App() {

  
const {items} = useSelector(state => state.cart)

  return (
    <div className="App">
      
      <Navbar />
      <Hero/>
      <Home/>
      <Cart/>
     
      
    </div>
  );
}

export default App;
