import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import CarouselProjects from '../components/CarouselProjects';

import { HomeWrapper } from '../styles';

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
        <section>
          <Skills />
          <About />
        </section>
        <CarouselProjects />
      </main>
      <Footer />
    </HomeWrapper>
  )
}