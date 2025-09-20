import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './Partnership.module.css';
import networkimg from '../assets/net45.png';

// Data for the partnership benefits
const partnershipBenefits = [
  {
    id: 1,
    title: 'Agile & Responsive',
    description: 'Our flexible approach adapts to market shifts and client needs, ensuring rapid deployment and continuous evolution.'
  },
  {
    id: 2,
    title: 'Robust Infrastructure',
    description: 'Built on highly scalable and secure systems, our platforms ensure reliable performance for millions of transactions daily.'
  },
  {
    id: 3,
    title: 'Global Reach',
    description: 'Empowering operators and content providers to connect with diverse audiences and expand their footprint worldwide.'
  },
  {
    id: 4,
    title: 'Innovation at Core',
    description: 'We continuously evolve our solutions, integrating emerging technologies to keep you ahead in the dynamic mobile ecosystem.'
  },
  {
    id: 5,
    title: 'Dedicated Partnership',
    description: 'We work closely with our clients, offering tailored support and strategic insights to maximize their success.'
  }
];

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Partnership = () => {
  return (
    <div className={styles.partnershipSection} id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className={styles.globeImageCol}>
            <motion.div 
              className={styles.globeImageWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 50 } }}
              viewport={{ once: true }}
            >
              <img src={networkimg} alt="Global Network" className={styles.globeImage} />
            </motion.div>
          </Col>
          <Col lg={7}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              Why Partner with BEATZWAVE?
            </motion.h2>
            <motion.div 
              className={styles.benefitsList}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {partnershipBenefits.map(benefit => (
                <motion.div key={benefit.id} className={styles.benefitItem} variants={fadeIn}>
                  <div className={styles.benefitIcon}>{benefit.id}</div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partnership;
