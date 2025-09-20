import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const description = descriptionRef.current;
    
    if (title && subtitle && description) {
      setTimeout(() => title.classList.add(styles.animateIn), 300);
      setTimeout(() => subtitle.classList.add(styles.animateIn), 600);
      setTimeout(() => description.classList.add(styles.animateIn), 900);
    }
  }, []);

  return (
    <div className={styles.heroSection}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={6} md={10} className={styles.heroContent}>
            <h1 ref={titleRef} className={styles.title}>
              <span className={styles.highlight}>BEATZWAVE</span>
            </h1>
            <h2 ref={subtitleRef} className={styles.subtitle}>
              Digital Entertainment Revolution
            </h2>
            <p ref={descriptionRef} className={styles.description}>
              Experience the future of digital entertainment with our innovative platform that combines
              gaming, interactive media, and cutting-edge technology. BEATZWAVE delivers immersive experiences
              that captivate audiences worldwide.
            </p>
            <div className={styles.buttonGroup}>
              <Button
                as={Link}
                to="/products"
                variant="primary"
                size="lg"
                className={styles.ctaButton}
              >
                Explore Platform <i className="bi bi-arrow-right"></i>
              </Button>
              <Button
                href="https://teams.live.com/l/invite/FEAMAoOJsj_6fynLwE?v=g1"
                target="_blank"
                variant="outline-light"
                size="lg"
                className={styles.secondaryButton}
              >
                <i className="bi bi-person-fill-up"></i> Get in Touch
              </Button>
            </div>
            
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10M+</span>
                <span className={styles.statLabel}>Active Users</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>7.5</span>
                <span className={styles.statLabel}>App Rating</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;