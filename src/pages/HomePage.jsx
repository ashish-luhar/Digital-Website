import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Partnership from '../components/Partnership';
import SuccessStories from '../components/SuccessStories';
import TechnologyInnovation from '../components/TechnologyInnovation';
import MarketOpportunity from '../components/MarketOpportunity';
import GlobalActionTV from '../components/GlobalActionTV';
import GlobalEntertainment from '../components/GlobalEntertainment';
import styles from './Home.module.css';
import videoBackground from '../assets/bg-video.mp4';

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        {/* आपके सभी सेक्शंस यहाँ हैं */}
        {/* Hero, Products, Partnership, आदि */}
      </div>
      <div className={styles.content}>
        <section id="home">
          <Hero />
        </section>
        <Products />
        <Partnership />
        <SuccessStories />
        <TechnologyInnovation />
        <MarketOpportunity />
        <GlobalEntertainment />
        <GlobalActionTV />
      </div>
    </div>
  );
};

export default HomePage;