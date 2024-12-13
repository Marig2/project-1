import './App.css';
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <div className='header'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
