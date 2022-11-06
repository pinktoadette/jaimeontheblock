import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Footer: FC = () => {

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
                            DeFi
                        </li>
                        <li>
                            TradFi
                        </li>
                    </ul>
                </Col>
                <Col>
                    This website is designed and created by Jaime Lynn. Find the repo here  &nbsp;
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/pinktoadette/jaimeontheblock" target="_blank"> GitHub</a>
                    <hr />
                    < p>
                    See my resume on ethereum mainnet as a restricted NFT.
                    </p>
                </Col>
            </Row>

            </Container>


        </div>
    );
}

export default Footer;