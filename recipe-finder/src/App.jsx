import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Category from './pages/Category'
import MealDetail from './pages/MealDetail'
import AboutPage from './pages/AboutUs'
import ContactPage from './pages/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/categories' element={<Category/>} />
      <Route path='/meal-detail/:id' element={<MealDetail/>} />
      <Route path='/about-us' element={<AboutPage/>} />
      <Route path='/contact-us' element={<ContactPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
