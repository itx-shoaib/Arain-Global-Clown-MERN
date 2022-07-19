import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservationscreen from './screens/Reservationscreen';
import Addone from './components/Addone';
import Checkout from './components/Checkout';
import Cars from './components/Cars';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router>
        <Routes>
          <Route path='/' element={<Homescreen/>} />
          <Route path='/reservation' element={<Reservationscreen/>} />
          <Route path='/addones/:carid' element={<Addone/>} />
          <Route path='/checkout' element={<Checkout/>} />
          
        </Routes>
        </Router>
    </div>
  );
}

export default App;
