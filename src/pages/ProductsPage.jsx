import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './ProductsPage.module.css';

// Placeholder images for demonstration
import globalEntertainmentImage from "../assets/global.png";
import cookandplay1Image from "../assets/cooking.png";
import slapbasedGamingImage from "../assets/boxing.png";

const ProductsPage = () => {
    const productData = [
        {
            id: 1,
            title: 'Global Entertainment Revolution: Where Recipes, Audiobooks & Games Collide',
            description: 'The entertainment landscape is undergoing a radical transformation, merging culinary creativity, immersive audio narratives, and interactive gaming into a seamless, multi-sensory experience. This fusion is creating an ecosystem where fantasy and reality blur, offering fans deeper, more tangible connections to their favorite digital worlds.',
            image: globalEntertainmentImage,
        },
        {
            id: 3,
            title: 'Uncover the Thrills: Enter the Realm of Slap-Based Gaming',
            description: 'Step into a vibrant new era of interactive entertainment designed to capture widespread attention and generate significant buzz across global audiences.',
            image: slapbasedGamingImage,
        },
        {
            id: 2,
            title: 'Cook & Play: Where Recipes Meet Games',
            description: 'Cook & Play is a truly unique product that brings together the joy of culinary arts with the excitement of interactive gaming. We’re engaging users in a new, delicious way. It combines the art of cooking with the thrill of gaming, offers an interactive experience, and is educational & entertaining for all ages.',
            image: cookandplay1Image,
            features: [
                'Unique Concept: Combines the art of cooking with the thrill of gaming.',
                'Interactive Experience: Engages users through fun, hands-on activities.',
                'Educational & Entertaining: Teaches global culinary skills while keeping it exciting.',
                'Multi-Audience Appeal: Perfect for families, friends, and food enthusiasts.',
                'Delicious Fun: Turns every gaming session into a tasty adventure.',
            ],
        },
    ];

    const cookAndPlayData = {
        id: 4,
        title: 'Why Cook & Play is a Game-Changer',
        sections: [
            {
                heading: 'Engaging & Educational',
                content: 'Over 50+ unique recipes and challenges blend education with entertainment in a cozy, stress-free environment, making learning to cook fun.',
            },
            {
                heading: 'Experimentation & Growth',
                content: 'Encourages trial and error, building skills and inspiring new flavor ideas, much like top cooking games that foster creativity.',
            },
            {
                heading: 'Family & Social Bonding',
                content: 'Perfect for all ages to bond, develop social skills, and discover the joy of cooking—one game level at a time.',
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    const cookAndPlayVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <div className={styles.productsPage}>
            <div className={styles.animatedBg}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>
            <Container className={styles.mainContainer}>
                <motion.div
                    className={styles.pageHeader}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Our <span>Premium</span> Products</h1>
                    <p>Discover our innovative digital entertainment solutions designed to revolutionize how you experience media, gaming, and interactive content.</p>
                </motion.div>

                {/* Combined Cards Section */}
                <motion.div
                    className={styles.combinedCardsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Row>
                        {productData.filter(p => p.id === 1 || p.id === 3).map((product) => (
                            <Col md={6} key={product.id}>
                                <motion.div
                                    className={styles.productCard}
                                    variants={cardVariants}
                                >
                                    {product.image && (
                                        <div className={styles.productImageContainer}>
                                            <img src={product.image} alt={product.title} className={styles.productImage} />
                                        </div>
                                    )}
                                    <div className={styles.productContent}>
                                        <h2>{product.title}</h2>
                                        {product.description && <p>{product.description}</p>}
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
                <hr className={styles.divider} />

                {/* Cook & Play Card */}
                <motion.div
                    className={`${styles.productCard} ${styles.cookAndPlayCard}`}
                    variants={cookAndPlayVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {productData.filter(p => p.id === 2).map((product) => (
                        <div key={product.id} className={styles.cookAndPlayContent}>
                            <div className={styles.cookAndPlayText}>
                                <h2>{product.title}</h2>
                                {product.description && <p>{product.description}</p>}
                                {product.features && (
                                    <ul className={styles.featuresList}>
                                        {product.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                            >
                                                <i className="bi bi-check-circle-fill"></i>
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {product.image && (
                                <div className={styles.cookAndPlayImageContainer}>
                                    <img src={product.image} alt={product.title} className={styles.productImage} />
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                <hr className={styles.divider} />

                {/* Why Cook & Play Section */}
                <motion.div
                    className={styles.whyCookAndPlay}
                    variants={cookAndPlayVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h3>{cookAndPlayData.title}</h3>
                    <div className={styles.sectionsGrid}>
                        {cookAndPlayData.sections.map((section, i) => (
                            <motion.div
                                key={i}
                                className={styles.sectionItem}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                            >
                                <h4>{section.heading}</h4>
                                <p>{section.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <hr className={styles.divider} />

                {/* Call to Action Section */}
                <motion.div
                    className={styles.callToAction}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                >
                    <h3>Ready to transform your entertainment experience?</h3>
                    <p>Join millions of users worldwide who are already enjoying our innovative digital products.</p>
                    <div className={styles.ctaButtons}>
                        <a href="https://teams.live.com/l/invite/FEAMAoOJsj_6fynLwE?v=g1" target="_blank" rel="noopener noreferrer" className={styles.ctaButtonPrimary}>
                            <i className="bi bi-headset"></i> Get in Touch
                        </a>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default ProductsPage;