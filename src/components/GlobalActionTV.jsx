import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs'; // Consistent icon
import styles from './GlobalActionTV.module.css';


// आपके अपलोड की गई इमेज को यहां आयात करें
import kickImage from '../assets/kickimage.jpg';

const GlobalActionTV = () => {
  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const imageAnimate = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 50 } }
  };

  return (
    <section className={styles.actionSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className={styles.textContent}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              Global Action TV: The Ultimate Martial Arts & Contest Hub
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }}
              viewport={{ once: true }}
            >
              Global Action TV brings the raw excitement of combat sports and strength contests directly to your screen. We feature:
            </motion.p>
            
            <motion.ul 
              className={styles.featureList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.li variants={fadeIn}>
                <BsCheckCircleFill className={styles.bulletIcon} />
                <span className={styles.featureTitle}>Kickboxing:</span> High-octane strikes and dynamic bouts.
              </motion.li>
              <motion.li variants={fadeIn}>
                <BsCheckCircleFill className={styles.bulletIcon} />
                <span className={styles.featureTitle}>MMA:</span> Comprehensive mixed martial arts action.
              </motion.li>
              <motion.li variants={fadeIn}>
                <BsCheckCircleFill className={styles.bulletIcon} />
                <span className={styles.featureTitle}>Taekwondo:</span> Precision kicks and powerful techniques.
              </motion.li>
              <motion.li variants={fadeIn}>
                <BsCheckCircleFill className={styles.bulletIcon} />
                <span className={styles.featureTitle}>Slap Contests:</span> Intense, one-on-one competitive challenges.
              </motion.li>
              <motion.li variants={fadeIn}>
                <BsCheckCircleFill className={styles.bulletIcon} />
                <span className={styles.featureTitle}>Arm Wrestling:</span> Raw displays of strength and strategy.
              </motion.li>
            </motion.ul>
            
            <motion.p 
              className={styles.marketText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }}
              viewport={{ once: true }}
            >
              We tap into the booming global market for combat sports and competitive entertainment, engaging fans with live events, interactive content, and exclusive behind-the-scenes access.
            </motion.p>
          </Col>
          
          <Col lg={5} className={styles.imageContent}>
            <motion.div 
              className={styles.imageWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimate}
            >
              <div className={styles.imagePlaceholder}>
                {/* अपनी इमेज को यहां सेट करें */}
                <img src={kickImage} alt="Martial Arts" className={styles.kickImage} />
             
              </div>
              <div className={styles.imageDecoration}></div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GlobalActionTV;
