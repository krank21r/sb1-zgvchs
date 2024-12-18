import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import RspWorks from './pages/RspWorks';
import Irsp from './pages/Irsp';
import AddWorks from './pages/AddWorks';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rsp-works" element={<RspWorks />} />
            <Route path="/irsp" element={<Irsp />} />
            <Route path="/add-works" element={<AddWorks />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}