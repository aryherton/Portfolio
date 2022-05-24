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
            <li>Home &#x1F3E0;</li>
            <li>About &#x1F4DC;</li>
            <li>Projects &#x1F4BB;</li>
            <li>Contact ☎️</li>
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