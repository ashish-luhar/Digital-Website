import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Features.module.css';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      title: 'Unique Concept',
      description: 'Combines the art of cooking with the thrill of gaming.'
    },
    {
      id: 2,
      title: 'Interactive Experience',
      description: 'Engages users through fun, hands-on activities.'
    },
    {
      id: 3,
      title: 'Educational & Entertaining',
      description: 'Teaches global culinary skills while keeping it exciting.'
    },
    {
      id: 4,
      title: 'Multi-Audience Appeal',
      description: 'Perfect for families, friends, and food enthusiasts.'
    },
    {
      id: 5,
      title: 'Delicious Fun',
      description: 'Turns every gaming session into a tasty adventure.'
    }
  ];

  return (
    <div className={styles.featuresSection} id="products">
      <Container>
        <h2 className={styles.sectionTitle}>Introducing Cook & Play: Where Recipes Meet Games</h2>
        <p className={styles.sectionDescription}>
          Cook & Play is a truly unique product that brings together the joy of culinary arts with the excitement of interactive gaming. We're engaging users in a new, delicious way:
        </p>
        
        <Row className="g-4 mt-3">
          {featuresList.map((feature) => (
            <Col key={feature.id} md={6} lg={4}>
              <Card className={styles.featureCard}>
                <Card.Body>
                  <div className={styles.featureIcon}>{feature.id}</div>
                  <Card.Title className={styles.featureTitle}>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Features;