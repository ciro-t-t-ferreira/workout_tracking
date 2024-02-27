/*import logo from './logo.svg';
import './App.css'; */
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';

//pages and components
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
