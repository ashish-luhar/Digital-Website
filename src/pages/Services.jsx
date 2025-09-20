

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

/* Replace these URLs with your actual images */
const heroImageUrl = 'https://your-domain.com/path/to/about-hero.png';
const icons = {
    sms: 'https://vectormob.com/dist/img/platform/icons/sms.png',
    ivr: 'https://vectormob.com/dist/img/platform/icons/ivr.png',
    ussd: 'https://vectormob.com/dist/img/platform/icons/ussd.png',
    asr: 'https://vectormob.com/dist/img/platform/icons/asr.png',
    obd: 'https://vectormob.com/dist/img/platform/icons/obd.png',
    vobd: 'https://vectormob.com/dist/img/platform/icons/vobd.png',
    sdp: 'https://vectormob.com/dist/img/platform/icons/sdp.png',
    wap: 'https://vectormob.com/dist/img/platform/icons/adN.png',

};

const Services = () => {
    const missionRef = useRef(null);
    const navigate = useNavigate();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add(styles.animate);
                });
            },
            { threshold: 0.12 }
        );
        if (missionRef.current) observer.observe(missionRef.current);
        return () => {
            if (missionRef.current) observer.unobserve(missionRef.current);
        };
    }, []);

    const services = [
        { id: 'sms', title: 'SMS', desc: 'SMS is one of the earliest mobile communication technologies and continues to remain widely used today. We provide end-to-end solutions including subscription packs, short codes, premium numbers, and bulk messaging gateways to help businesses connect with their audiences effectively.', iconUrl: icons.sms },
        { id: 'ivr', title: 'IVR', desc: "We build robust IVR platforms for predefined flows and subscriber interaction.", iconUrl: icons.ivr },
        { id: 'ussd', title: 'USSD', 
            desc: 'Session-based USSD menus to enable simple, fast and accessible interactions on any phone.', iconUrl: icons.ussd },
        { id: 'asr', title: 'ASR', desc: 'Automatic Speech Recognition delivering voice-first access to services without keypad input.', iconUrl: icons.asr },
        { id: 'obd', title: 'OBD', desc: 'High-conversion Outbound Dialing describing product information and taking consent.', iconUrl: icons.obd },
        { id: 'vobd', title: 'VOBD', desc: 'Video-on-call experiences that show ads/products and allow immediate interaction/purchase.', iconUrl: icons.vobd },
        { id: 'sdp', title: 'SDP', desc: 'Service Delivery Platform to manage and deliver digital services seamlessly.', iconUrl: icons.sdp },
        { id: 'net', title: 'Ad Network', desc: 'Vectormob has recently gone into the dedicated Ad Network platform that gives users the ability to register and run campaigns for their products using our tracking platform. Our tracking platform is an automated one which is easy to use for a layman too. We have thousands of advertisers and lakhs of publishers already connected to our platform.', iconUrl: icons.wap },

    ];

    const handleProductsClick = () => navigate('/products');
    const handleContactClick = () => navigate('/contact');

    return (
        <div className={styles.aboutPage}>
            {/* Hero */}
            <motion.div className={styles.aboutHero} initial="hidden" animate="visible" variants={fadeIn}>
                <Container>
                    <motion.div className={styles.heroContent} variants={fadeIn}>
                        <h1>Our <span className={styles.highlight}>Services</span></h1>
                    </motion.div>
                </Container>
            </motion.div>

            <Container>
                <motion.section
                    ref={missionRef}
                    className={styles.servicesSection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerChildren}
                >
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className={styles.imageSection}>
                                <div
                                    className={styles.imageBg}
                                    style={{ backgroundImage: `url(${heroImageUrl})` }}
                                    aria-hidden
                                />

                                <div className={styles.cardsOverlay}>
                                    <div className={styles.cardsGrid}>
                                        {services.map((s, idx) => (
                                            <motion.div
                                                key={s.id}
                                                className={styles.serviceCard}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                variants={fadeIn}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <img
                                                    src={s.iconUrl}
                                                    alt={`${s.title} icon`}
                                                    className={styles.iconImg}
                                                />
                                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                                <p className={styles.cardText}>{s.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </motion.section>
            </Container>

        </div>
    );
};

export default Services;
