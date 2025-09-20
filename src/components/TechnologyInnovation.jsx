import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsDatabase, BsRobot, BsHddStack } from 'react-icons/bs';
import { motion } from 'framer-motion';
import styles from './TechnologyInnovation.module.css';

const technologies = [
  {
    id: 1,
    title: 'Proprietary Platforms',
    description: 'Enabling seamless carrier billing integration worldwide, ensuring secure and efficient transactions.',
    icon: <BsDatabase size={40} />
  },
  {
    id: 2,
    title: 'AI-Powered Personalization',
    description: 'Delivering tailored content experiences across languages and cultures, enhancing user satisfaction.',
    icon: <BsRobot size={40} />
  },
  {
    id: 3,
    title: 'Scalable Infrastructure',
    description: 'Supporting high-demand live events and real-time gaming interactions with robust and flexible architecture.',
    icon: <BsHddStack size={40} />
  }
];

// Animation variants
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

const TechnologyInnovation = () => {
  return (
    <section className={styles.techSection}>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={styles.sectionHeader}
        >
          <h2 className={styles.sectionTitle}>
            Technology & Innovation
            <span className={styles.subTitle}>Driving Growth</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.techCards}
        >
          <Row className="g-4">
            {technologies.map(tech => (
              <Col md={4} key={tech.id}>
                <motion.div variants={fadeIn}>
                  <Card className={styles.techCard}>
                    <div className={styles.iconWrapper}>
                      {tech.icon}
                    </div>
                    <Card.Body>
                      <Card.Title className={styles.cardTitle}>{tech.title}</Card.Title>
                      <Card.Text className={styles.cardText}>{tech.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
        
        <motion.p 
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className={styles.commitment}
        >
          Our commitment to advanced technology ensures a superior user experience and sustainable growth.
        </motion.p>
      </Container>
    </section>
  );
};

export default TechnologyInnovation;