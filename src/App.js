import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Products from './components/pages/Products'


import './App.css'
function App() {
  return(
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component ={Home} />
          <Route path='/services' exact component =
        {Services}>
        </Route>
        <Route path='/products' exact component =
        {Products}>
        </Route>
        <Route path='/signup' exact component =
        {SignUp}>
        </Route>
      </Switch>
    </Router>
   
    </>
  )
}
export default App;
