/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-4s7k7p6u7ihsuye1.us.auth0.com   DOMAIN
// YnXq48pSiyWLjcnKkMBw7q2PpwlslsPD  CLIENT ID
// rVEiPHVo5wf6UBcxJfxONJ8h50Zf9vvB5yWaQuD2gbdN7xStw9CyqVssxf_WURKW   SECRET
ReactDOM.render(
  <Auth0Provider
  domain="dev-1hh71bthunmimihs.us.auth0.com"
  clientId="fgQMIUTl5XuSqhR0kFkN4EA3CUH8PRaG"
  redirectUri={window.location.origin}
  cacheLocation = "localstorage"
>
   <UserProvider>
    <ProductsProvider>
      <FilterProvider>
       <CartProvider>
        <App/>
       </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </UserProvider>
  </Auth0Provider> ,

    document.getElementById('root')
)
