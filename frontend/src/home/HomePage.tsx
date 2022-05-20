import * as React from 'react';
import logo from '../assets/image/playground.png';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <img src={logo} alt="Playground" id="logo" width="600" />
      </header>
    </div>
  );
}

export default HomePage;
