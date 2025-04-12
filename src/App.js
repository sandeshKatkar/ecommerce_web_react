
import './App.css';
import Header from'./Components/header/header';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../src/Pages/Home/index';
import Link from '@mui/material/Link';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
