import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Routes from './routes/Routes';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
