import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Header from './components/Header';
import Home from './pages/Home';
import Members from './pages/Members';
import Abonnements from './pages/Abonnements';
import Seances from './pages/Seances';
import Presence from './pages/Presence';
import Paiements from './pages/Paiements';
import Rapports from './pages/Rapports';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/abonnements" element={<Abonnements />} />
            <Route path="/seances" element={<Seances />} />
            <Route path="/presence" element={<Presence />} />
            <Route path="/paiements" element={<Paiements />} />
            <Route path="/rapports" element={<Rapports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
