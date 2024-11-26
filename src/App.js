import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import Stylebook from './pages/Stylebook';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './styles/app.css';
import Library from './pages/Library';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page-layout">
                <HomePage />
                <Sidebar />
              </div>
            }
          />
          <Route
            path="/sach-hay-nen-doc"
            element={
              <div className="page-layout">
                <BookListPage />
                <Sidebar />
              </div>
            }
          />
          <Route
            path="/thu-vien-sach"
            element={
              <div className="page-layout">
                <Library />
                <Sidebar />
              </div>
            }
          />
          <Route path="/sach-theo-chu-de" element={<Stylebook />} />
          <Route path="/dang-nhap" element={<LoginPage />} />
          <Route path="/dang-ky" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
