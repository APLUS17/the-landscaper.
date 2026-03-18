import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import PaverPatios from './pages/PaverPatios';
import LawnMowing from './pages/LawnMowing';
import TreeCutting from './pages/TreeCutting';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="layout-boxed min-h-screen font-sans text-neutral-800 flex flex-col">
        <TopBar />
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/paver-patios" element={<PaverPatios />} />
            <Route path="/services/lawn-mowing" element={<LawnMowing />} />
            <Route path="/services/tree-cutting" element={<TreeCutting />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
