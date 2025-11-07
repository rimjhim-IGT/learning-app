
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
    });
  }, []);


  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
