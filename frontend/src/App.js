/*import logo from './logo.svg';
import './App.css'; */
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Link from 'react-router-dom'

import React from 'react';

//pages and components
import Home from './pages/Home'
import NavBar from './components/Navbar'

function App() {
  //put the navbar inside BrowserRouter to use Link from the router, but outside to be page independent
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
