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
import {useParams} from 'react-router';

import { Outlet } from 'react-router-dom';

// OUtlet : Regarding Removing Components on A Spcific Page..
/*
   https://stackoverflow.com/questions/71582629/i-dont-want-to-show-header-footer-on-error-page-in-react-js/71582681#71582681?newreg=7da8185c17fb4285b5b09cdd8f9fbf99
*/

const PageLayout = () => (
  <>
    <Navbar />
    <Outlet /> 
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
      <Route element={<PageLayout />}>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='about' element = {<AboutPage/>}/>
        <Route path='products' element = {<ProductsPage/>}/>
       <Route path='cart' element = {<CartPage/>}/>
       <Route path='products/:id' element = {<SingleProductPage/>}/>
     </Route>
<Route path='checkout'

element = {
 <PrivateRoute>
   <CheckoutPage/>
 </PrivateRoute>
}
></Route>

         <Route path="*" element= {<ErrorPage/>} />  
      </Routes>
    </Router>
  )
}

export default App
