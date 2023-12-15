import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <ContactForm></ContactForm>
    </>
  )
}

export default App
