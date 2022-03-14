// @ts-nocheck
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import "./App.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Catalog from './pages/Catalog'
import Home from './pages/Home'
import Detail from './pages/detail/Detail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
