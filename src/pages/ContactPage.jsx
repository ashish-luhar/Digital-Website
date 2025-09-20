import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTeamspeak } from 'react-icons/fa';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className={styles.contactPage}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className={styles.backgroundCircles}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
      </div>

      <motion.div
        className={styles.contactHero}
        variants={fadeIn}
      >
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Connect With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're here to help! Reach out to us for collaborations, inquiries, or just to say hello.
          </motion.p>
        </Container>
      </motion.div>

      <Container className='mb-5'>
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              className={styles.contactInfoCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerChildren}
            >
              <motion.h2 variants={fadeIn}>Let's Talk Business</motion.h2>
              <p className={styles.introText}>
                Whether you have a question, a project proposal, or a feedback, our team is ready to listen.
              </p>

              <div className={styles.infoGrid}>
                <motion.div variants={fadeIn} className={styles.infoItem}>
                  <div className={styles.iconContainer}>
                    <FaEnvelope size={32} className={styles.icon} />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>General Inquiries</h3>
                    <p>mohammad@beatzwave.co</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className={styles.infoItem}>
                  <div className={styles.iconContainer}>
                    <FaTeamspeak size={32} className={styles.icon} />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Get in Touch</h3>
                    <p>Schedule a quick chat with our team.</p>
                    <a
                      href="https://teams.live.com/l/invite/FEAMAoOJsj_6fynLwE?v=g1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.meetingLink}
                    >
                      Join Meeting
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.p variants={fadeIn} className={styles.closingText}>
                We look forward to connecting with you and exploring a world of possibilities together.
              </motion.p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ContactPage;