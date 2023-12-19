import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
