
import './App.css';
import Header from'./Components/header/header';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../src/Pages/Home/index';
import PDetails from '../src/Pages/P-Details/details';

import Listing from './Pages/Listing/listing';
import Footer from './Components/footer/footer';
import Cart from './Pages/cart/cart';
import About from './Pages/about/about';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>}></Route>
        <Route exact={true} path='/listing' element={<Listing/>}></Route>
        <Route exact={true} path='/pdetails' element={<PDetails/>}></Route>
        <Route exact={true} path='/cart' element={<Cart/>}></Route>
        <Route exact={true} path='/about' element={<About/>}></Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
