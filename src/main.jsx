import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home.jsx';
import RuletaES from './Pages/Ruleta/RuletaES.jsx';
import './CSS/Home.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ruleta" element={<RuletaES />} />
    </Routes>
  </Router>
);