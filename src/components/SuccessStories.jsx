import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
// Using react-icons for a consistent icon style across components
import { BsPeopleFill, BsGraphUpArrow, BsStarFill } from 'react-icons/bs';
import styles from './SuccessStories.module.css';

// Data for the stats cards, based on the second image
const statsData = [
  {
    icon: <BsPeopleFill size={40} />,
    number: '2500+',
    title: 'Active Users',
    description: 'of active users engaging daily with Cook & Play challenges, fostering a vibrant community.',
  },
  {
    icon: <BsGraphUpArrow size={40} />,
    number: '15% MoM Growth',
    title: 'Fanbase Growth',
    description: "in fanbase for Global Action TV's live martial arts events, indicating strong market resonance.",
  },
  {
    icon: <BsStarFill size={40} />,
    number: 'High Scores',
    title: 'Positive Feedback',
    description: 'in positive user feedback, highlighting ease of payment and unparalleled content diversity.',
  },
];

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SuccessStories = () => {
  return (
    <section className={styles.successSection}>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>
            Success Stories & User Impact
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.statsRow}
        >
          <Row className="g-4">
            {statsData.map((stat, index) => (
              <Col md={4} key={index}>
                <motion.div variants={fadeIn} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    {stat.icon}
                  </div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statTitle}>{stat.title}</div>
                  <div className={styles.statDescription}>{stat.description}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default SuccessStories;
