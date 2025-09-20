import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AboutPage.module.css';
import abstract3dImage from '../assets/about.png';

const AboutPage = () => {
  const missionRef = useRef(null);
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  // Updated functions to navigate to the correct pages
  const handleProductsClick = () => {
    navigate('./products');
  };

  const handleContactClick = () => {
    navigate('./contact');
  };

  return (
    <div className={styles.aboutPage}>
      <motion.div
        className={styles.aboutHero}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className={styles.highlight}>BEATZWAVE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting businesses and customers through innovative mobile technology solutions
          </motion.p>
          <motion.div
            className={styles.heroButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button onClick={handleProductsClick} className={styles.primaryBtn}>
              Our Products
            </button>
            <button onClick={handleContactClick} className={styles.secondaryBtn}>
              Contact us
            </button>
          </motion.div>
        </Container>
      </motion.div>

      <Container>
        <motion.section
          className={styles.missionSection}
          ref={missionRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <Row>
            <Col md={6}>
              <motion.div
                className={styles.missionContent}
                variants={fadeIn}
              >
                <h2>Our <span className={styles.highlight}>Mission</span></h2>
                <div className={styles.missionIcon}>
                  <BsStars size={40} />
                </div>
                <p>At BEATZWAVE, we're dedicated to bridging the gap between businesses and their customers through innovative mobile technology solutions. We believe in creating accessible, reliable, and secure platforms that empower businesses to reach their full potential in the digital age.</p>
                <p>Our mission is to revolutionize how businesses connect with their audience, providing cutting-edge mobile solutions that drive engagement, increase revenue, and foster lasting relationships.</p>
                <div className={styles.missionStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>10+</span>
                    <span className={styles.statLabel}>Years Experience</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>50+</span>
                    <span className={styles.statLabel}>Global Partners</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>24/7</span>
                    <span className={styles.statLabel}>Support</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                className={styles.missionImage}
                variants={fadeIn}
              >
                <img src={abstract3dImage} alt="Abstract 3D Illustration" className={styles.missionImageElement} />
              </motion.div>
            </Col>
          </Row>
        </motion.section>

        <motion.section
          className={styles.historySection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          <motion.div className={styles.sectionHeader} variants={fadeIn}>
            <h2>Our <span className={styles.highlight}>Journey</span></h2>
          </motion.div>
          <div className={styles.timeline}>
            <motion.div className={styles.timelineItem} variants={fadeIn}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>
                  <span>2010</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>Foundation</h3>
                  <p>BEATZWAVE was founded with a vision to revolutionize mobile technology services in emerging markets.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className={styles.timelineItem} variants={fadeIn}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>
                  <span>2013</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>First Major Product</h3>
                  <p>Launched our first Direct Carrier Billing solution, expanding access to digital content for millions of users.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className={styles.timelineItem} variants={fadeIn}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>
                  <span>2016</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>Global Expansion</h3>
                  <p>Expanded operations to 10 countries across Asia and Africa, bringing innovative mobile solutions to new markets.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className={styles.timelineItem} variants={fadeIn}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>
                  <span>2019</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>Platform Innovation</h3>
                  <p>Introduced our advanced SMS and USSD platforms, enabling businesses to reach customers through accessible channels.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className={styles.timelineItem} variants={fadeIn}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>
                  <span>2022</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>Financial Inclusion</h3>
                  <p>Launched our comprehensive Mobile Financial Services platform, furthering financial inclusion in underserved regions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className={styles.timelineItem} variants={fadeIn}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineYear}>
                  <span>Today</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>Continuous Innovation</h3>
                  <p>Continuing to innovate and expand our services to connect businesses with customers worldwide.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </Container>
    </div>
  );
};

export default AboutPage;