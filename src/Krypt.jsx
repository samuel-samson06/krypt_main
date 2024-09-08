import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'

function Krypt() {
  return (
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default Krypt