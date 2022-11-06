import { motion, useTransform, useScroll, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Skills from '@components/Skills'
import Story from '@components/Story'
import SectionFade from '@components/utilities/SectionFade'
import Button from 'react-bootstrap/Button'
import ParticlesCard from '@components/utilities/Particles'

export default function Home() {

  return (
    <>
      <Head>
        <title>hirejaime.com</title>
        <meta name="description" content="Hire Jaime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* < Header /> */}
      <div className="full-center">
        <ParticlesCard />
        <Container>
          <Row >
            <Col md={{ span: 4, offset: 2 }}>
                <h2 className="hello-tag">
                  Hello, i'm 
                </h2>
                <h1>Jaime Lynn</h1>
              <span className="text-muted">Pronounce Jay-mee</span>
              <h2 style={{marginTop: "100px"}} >
               Professional experiences in Blockchain + Finance.
               </h2>
               <Button  variant="warning">Availble for Hire</Button>
            </Col>
            <Col>
            <div  className="rounded">
            <motion.img
                src="/headshot1.png" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5,
                  x: { duration: 1 },
                  default: { ease: "linear" }
                }}
              />
            </div>
            </Col>
          </Row>
        </Container>        
      </div>
      <div>
        <SectionFade color="primary">
            <Container>
              <Row>
                <Col>
                <h3 >
                Curios and Drive.
                </h3>
                  I have <u>self-taught</u> in many areas. Because of being able to acquire different knowledge, 
                  it shaped myself to be <u>more creative</u> in <b>solving
                  problems</b> and having the ability to connect the dots.
                </Col>
                <Col>
              </Col>
              </Row>            
              </Container>
        </SectionFade>

        <SectionFade >
          <Container>
            <Row>
              <Col md={{  offset: 6 }}>
                  <h3>Finance ➜ Engineering ➜ Blockchain. </h3>
                I started off my career in finance and ventured into the engineering space. 
                In 2019, I learned of <u>decentralized finance</u>, I was absolutely excited how DeFi can change 
                how our traditional exchange works.
              </Col>            
            </Row>              
          </Container>
        </SectionFade>
      </div>
      <div>
        <Story />
      </div>
    </>
  )
}
