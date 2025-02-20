import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Header from './componets/Header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewGuidePage from './pages/ViewGuidePage/ViewGuidePage'

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/guides/:id' element={<ViewGuidePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
