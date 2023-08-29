import React from 'react'
import Checkout from './Checkout'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Checkout />} />
       
      </Routes>
    </>
  )
}
