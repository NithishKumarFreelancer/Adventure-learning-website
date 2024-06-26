import React from 'react'
import Nav from "./Components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav2 from './Components/Nav2';
import WhyAdv from './Components/WhyAdv';

function App() {
  return (
    <div className="app">
  <Nav />
  <Nav2 />
  <WhyAdv/>
    </div>
  )
}

export default App