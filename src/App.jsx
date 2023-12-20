import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ContactForm from './pages/Contact/Contact';
import About from './pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
