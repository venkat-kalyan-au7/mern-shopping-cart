import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ViewProductPage'
import CartPage from "./Pages/CartPage.js"
import AddProduct from "./Pages/AddNew"

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route exact path="/addproduct" component={AddProduct} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App