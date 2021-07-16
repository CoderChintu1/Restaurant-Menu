import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import "./App.css"
import GlobalState from './components/Store/GlobalState.jsx';

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </GlobalState>
  )
}

export default App;
