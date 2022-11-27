/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// E HAVE IMPORTED THEESE THREE AS THEY WEILL 
//USE DIN DEFINNG ROUTES , AS THEYW ILL PRESENT IN EVERY PAGE 
// SO WE WANT THEM TO RENDER IN EVERY PAGE ..

import { Navbar, Sidebar, Footer } from './components'

import styled from 'styled-components';

import {
  AboutPage , AuthPage , CartPage , CheckoutPage , ErrorPage , HomePage , PrivateRoute, 
  ProductsPage , SingleProductPage
} from './pages/index';

function UiRouter() {
    console.log("HELLO WORLD");
    return (
        <>
        <Routes>
         <Navbar/>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='about' element = {<AboutPage/>}/>
            <Route path='products' element = {<ProductsPage/>}/>
           <Route path='cart' element = {<CartPage/>}/>
           <Route path='products/:id' element = {<SingleProductPage/>}/>
    
           <Route path='checkout'
    
           element = {
            <PrivateRoute>
              <CheckoutPage/>
            </PrivateRoute>
           }
           ></Route>
              </Routes>
          <Footer/>
        </>
    )
}

export default UiRouter;