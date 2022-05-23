import React from 'react';

import { HomeWrapper } from '../styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

export default function Home() {
  return (
    <HomeWrapper>
      <div id="menuSuper">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </HomeWrapper>
  )
}