import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className={styles.footerCol}>
            <h3 className={styles.footerTitle}>BEATZWAVE</h3>
            <p className={styles.footerText}>
              At Beatzwave, we're not just creating products; we're crafting experiences that blend cutting-edge technology with immersive entertainment.
            </p>
          </Col>
          <Col md={3} className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </Col>
          <Col md={4} className={`${styles.footerCol} ${styles.contactCol}`}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <p className={styles.contactInfo}>
              <i className="bi bi-envelope"></i>mohammad@beatzwave.co
            </p>
            <a
              href="https://teams.live.com/l/invite/FEAMAoOJsj_6fynLwE?v=g1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactButton}
            >
              <i className="bi bi-headset"></i> Get in Touch
            </a>
          </Col>
        </Row>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} BEATZWAVE FZCO. All rights reserved.</p>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;