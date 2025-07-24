// src/components/template/MainLayout.jsx
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './Main.css';

const MainLayout = ({ headerProps, children }) => {
  return (
    <div className="app">
      <Logo />
      <Header {...headerProps} />
      <Nav />
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
