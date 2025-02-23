import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import Header from './componets/Header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewGuidePage from './pages/ViewGuidePage/ViewGuidePage'
import CreateGuidePage from './pages/CreateGuidePage/CreateGuidePage'
import ViewExercisePage from './pages/ViewExercisePage/ViewExercisePage'
import SignInPage from './pages/SignInPage/SignInPage'
function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/guides/:id' element={<ViewGuidePage />} />
        <Route path='/create-guide' element={<CreateGuidePage />} />
        <Route path='/exercises/:id' element={<ViewExercisePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
