import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGamepad, FaBook, FaUtensils } from 'react-icons/fa'; // Icons for the features
import styles from './GlobalEntertainment.module.css';

const GlobalEntertainment = () => {
  // Framer Motion के लिए एनिमेशन वेरिएंट्स
  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.entertainmentSection}>
      <Container>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          Global Entertainment: A Triple Threat Experience
        </motion.h2>

        <Row className="justify-content-center align-items-center">
          <Col lg={4} md={6} className={styles.textLeft}>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className={styles.featureItem}>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Audiobooks</h3>
                  <p className={styles.featureDescription}>
                    Immerse yourself in captivating stories and expand your knowledge with a vast library of audio content.
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={4} md={6} className={styles.donutChartContainer}>
            <div className={styles.donutChartWrapper}>
              <div className={styles.donutChart}>
                <div className={styles.centerRing}>
                  <div className={`${styles.chartSegment} ${styles.audiobooksSegment}`}>
                    <FaBook className={styles.segmentIcon} />
                  </div>
                  <div className={`${styles.chartSegment} ${styles.gamesSegment}`}>
                    <FaGamepad className={styles.segmentIcon} />
                  </div>
                  <div className={`${styles.chartSegment} ${styles.recipesSegment}`}>
                    <FaUtensils className={styles.segmentIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className={styles.textRight}>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className={styles.featureItem}>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Games</h3>
                  <p className={styles.featureDescription}>
                    Dive into a world of interactive challenges and engaging gameplay, from casual fun to competitive thrills.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className={styles.featureItem}>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Recipes</h3>
                  <p className={styles.featureDescription}>
                    Discover culinary delights and master new dishes with interactive recipes and cooking guides.
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
        
        <motion.p 
          className={styles.footerText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
          viewport={{ once: true }}
        >
          Our Global Entertainment platform offers a diverse ecosystem of content, catering to food lovers, story enthusiasts, and gamers. We provide multilingual support and culturally relevant content to expand our global reach, ensuring everyone finds something to love.
        </motion.p>
      </Container>
    </section>
  );
};

export default GlobalEntertainment;
