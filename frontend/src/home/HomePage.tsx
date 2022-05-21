import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/playground.png';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <img src={logo} alt="Playground" id="logo" width="600" />
      </header>

      <main>
        <section className="projects">
          <Link to="/palindrome">
            <h2>Palíndromos</h2>
          </Link>

          <Link to="/monetary">
            <h2>Caixa</h2>
          </Link>
          <Link to="/garage">
            <h2>Garagem</h2>
          </Link>
          <Link to="/ceps">
            <h2>CEPs</h2>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
