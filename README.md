## Notes

#### Older React Version

```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.3",
```

#### Current React Version

```
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
```

#### Alternative fix

.env file in the root
FAST_REFRESH=FALSE


    <Router>
    <Navbar/>
      <Routes>
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

        <Route path='*' element = {<ErrorPage/>}/>   
      </Routes>
      <Footer/>
    </Router>