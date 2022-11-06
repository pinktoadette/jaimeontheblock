import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Footer: FC = () => {
    const openInNewTab = () => {
        const newWindow = window.open("https://github.com/pinktoadette/jaimeontheblock", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <div className="footer">
            <Container>

            <Row lg={2}>
                <Col>
                    <h3>
                        Learn More
                    </h3>
                    <ul>
                        <li>
                            <Link href="/learn/defi">DeFi</Link>
                        </li>
                        <li>
                            <Link href="/learn/tradfi">TradFi</Link>
                        </li>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    </ul>
                </Col>
                <Col>
                    This website is designed and created by Jaime Lynn. Find the repo here  &nbsp;
                    
                    <Button onClick={openInNewTab}><i className="fa-brands fa-github"></i> GitHub</Button>
                    <hr />
                    See my resume on ethereum mainnet as a restricted NFT.
                </Col>
            </Row>

            </Container>


        </div>
    );
}

export default Footer;