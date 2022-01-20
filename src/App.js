import React from "react";
import { Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import './App.css';

import {Navbar, Exchanges, Homepage, CryptoDetails, CryptoCurrencies, News} from './compoments'

const App =() => {
  return (
    <div className="app">
      <div className="navbar">
            <Navbar />
      </div>
      <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />}/>
                <Route exact path="/exchanges" element={<Exchanges />}/>
                <Route exact path="/cryptocurrencies" element={<CryptoCurrencies />}/>
                <Route exact path="/crypto/coin.id" element={<CryptoDetails />}/>
                <Route exact path="/news" element={<News />} /> 
              </Routes>
            </div>
          </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
          Crypto Dashboard <br />
          All right reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
