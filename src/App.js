
import './App.css';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProductedRoute from './Services/ProductRoute';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route path="/" element={<ProductedRoute/>}>
      <Route path="/" element={<Home/>} />
      </Route>
      
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
