import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './MarketOpportunity.module.css';

const marketData = [
  // Updated colors to match the green/yellow theme
  { label: 'Mobile Gaming', value: 50, color: '#6AFF6A' }, // Bright Green
  { label: 'Streaming Media', value: 25, color: '#FFEB3B' }, // Bright Yellow
  { label: 'Interactive Experiences', value: 15, color: '#88E534' }, // Lighter Green
  { label: 'Other Digital Entertainment', value: 10, color: '#AADF22' }, // Another Greenish-Yellow
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

const MarketOpportunity = () => {
  // Function to generate the CSS conic-gradient for the pie chart
  const getPieChartStyle = () => {
    let currentAngle = 0;
    const gradient = marketData.map(segment => {
      const startAngle = currentAngle;
      currentAngle += segment.value * 3.6; // 360 degrees / 100%
      return `${segment.color} ${startAngle}deg ${currentAngle}deg`;
    }).join(', ');

    return {
      background: `conic-gradient(${gradient})`,
    };
  };

  return (
    <section className={styles.marketSection}>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>Market Opportunity & Competitive Edge</h2>
        </motion.div>

        <Row className={styles.contentRow}>
          <Col lg={7} className={styles.textContent}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeIn} className={styles.intro}>
                The digital entertainment landscape is ripe for innovation, and Beatzwave is uniquely positioned to capture significant market share:
              </motion.p>
              
              <ul className={styles.marketList}>
                <motion.li variants={fadeIn}>
                  <span className={styles.highlight}>Mobile gaming market projected to exceed $150 Billion by 2027.</span>
                </motion.li>
                <motion.li variants={fadeIn}>
                  <span>Growing demand for hybrid entertainment blending gaming, education, and lifestyle content.</span>
                </motion.li>
                <motion.li variants={fadeIn}>
                  <span>Beatzwave's unique content combinations create <span className={styles.highlight}>unmatched user engagement and retention</span>.</span>
                </motion.li>
              </ul>
            </motion.div>
          </Col>
          
          <Col lg={5} className={styles.chartContent}>
            <motion.div
              className={styles.pieChartWrapper}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, transition: { duration: 1, type: "spring", stiffness: 50 } }}
              viewport={{ once: true }}
            >
              <div className={styles.pieChart} style={getPieChartStyle()}>
                <div className={styles.chartCenter}></div>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.chartLegend}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {marketData.map((item, index) => (
                <motion.div variants={fadeIn} className={styles.legendItem} key={index}>
                  <span className={styles.colorBox} style={{ backgroundColor: item.color }}></span>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketOpportunity;