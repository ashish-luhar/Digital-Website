import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsLightningCharge, BsPhone, BsChatSquareText, BsCollection } from 'react-icons/bs';
import { motion } from 'framer-motion';
import styles from './Products.module.css';

const productsList = [
  {
    id: 1,
    title: 'Direct Carrier Billing (DCB)',
    description: 'Our DCB solution revolutionizes mobile payments by enabling seamless transactions charged directly to users\' mobile phone bills. With industry-leading approval rates and global carrier partnerships, we help businesses monetize digital content effortlessly.',
    features: ['One-click payment integration', 'Global carrier coverage', 'Real-time reporting dashboard', 'Fraud prevention system'],
    icon: <BsLightningCharge size={30} />,
    useCases: ['Digital content purchases', 'Subscription services', 'In-app purchases', 'Donations and charity', 'Utility bill payments'],
  },
  {
    id: 2,
    title: 'USSD & IVR Platforms',
    description: 'Engage customers across all devices with our interactive USSD and IVR solutions. Perfect for markets with low smartphone penetration, our platform delivers real-time interaction without internet connectivity.',
    features: ['Menu-based navigation', 'Multi-language support', 'Session management', 'CRM integration', 'Detailed analytics'],
    icon: <BsPhone size={30} />,
    useCases: ['Mobile banking services', 'Customer support', 'Surveys and feedback', 'Balance inquiries', 'Mobile top-ups'],
  },
  {
    id: 3,
    title: 'Advanced SMS Solutions',
    description: 'Our enterprise-grade SMS gateway delivers 99.9% uptime with global reach. Whether for marketing campaigns or transactional alerts, we provide reliable, scalable messaging solutions with advanced routing intelligence.',
    features: ['Two-way messaging', 'SMS shortcodes', 'Scheduled campaigns', 'DLR tracking', 'API integration'],
    icon: <BsChatSquareText size={30} />,
    useCases: ['OTP authentication', 'Marketing campaigns', 'Appointment reminders', 'Emergency alerts', 'Customer engagement'],
  },
  {
    id: 4,
    title: 'Robust Content Management',
    description: 'Comprehensive digital content delivery platform that simplifies distribution, monetization, and management of premium content across multiple carriers and regions with a single integration point.',
    features: ['Multi-carrier support', 'Content protection', 'Subscription management', 'Revenue analytics', 'Automated delivery'],
    icon: <BsCollection size={30} />,
    useCases: ['Video and music streaming', 'Mobile games distribution', 'E-book platforms', 'Educational content', 'Software distribution'],
  },
];

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Products = () => {
  return (
    <div className={styles.productsSection}>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}>BEATZWAVE's</span> Platform & Product Highlights
          </h2>
          <p className={styles.sectionDescription}>
            Discover our comprehensive suite of mobile technology solutions designed to enhance user engagement,
            streamline operations, and unlock new revenue streams.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.productsGrid}
        >
          <Row className={styles.rowEqualHeight}>
            {productsList.map((product) => (
              <Col key={product.id} lg={6} md={12}>
                <motion.div variants={fadeIn} className={styles.cardWrapper}>
                  <Card className={styles.productCard}>
                    <Card.Body className={styles.cardBody}>
                      <div className={styles.cardHeader}>
                        <div className={styles.productIcon}>{product.icon}</div>
                        <h5 className={styles.productTitle}>{product.title}</h5>
                      </div>
                      <Card.Text className={styles.productDescription}>{product.description}</Card.Text>

                      <div className={styles.contentSection}>
                        <div className={styles.featuresSection}>
                          <h6 className={styles.subTitle}>Key Features</h6>
                          <ul className={styles.featuresList}>
                            {product.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.useCasesSection}>
                          <h6 className={styles.subTitle}>Use Cases</h6>
                          <div className={styles.useCasesTags}>
                            {product.useCases.map((useCase, index) => (
                              <span key={index} className={styles.useCaseTag}>{useCase}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.trustMessage}
        >
          <div className={styles.trustContent}>
            <h3>Why Choose BEATZWAVE?</h3>
            <div className={styles.trustStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Clients Worldwide</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50M+</span>
                <span className={styles.statLabel}>Monthly Transactions</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Platform Uptime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Products;