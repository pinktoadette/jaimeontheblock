import { motion } from 'framer-motion'
import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Story from '@components/Story'
import SectionFade from '@components/utilities/SectionFade'
import Button from 'react-bootstrap/Button'
import ParticlesCard from '@components/utilities/Particles'
import JToolTip from '@components/utilities/Tooltip'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>Jaime On the Block</title>
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
                {"Hello, i'm"}
              </h2>
              <h1>Jaime Lynn</h1>
              <span className="text-muted">Pronounce Jay-mee</span>
              <h2 className="spacing-100">
                Professional experiences in Blockchain + Finance.
              </h2>
              <Button variant="warning">Available for Hire</Button>
            </Col>
            <Col>
              <div className="rounded">
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
        <div className="definition-tag">New to Finance or Blockchain?
          <br />Hover over <JToolTip text={"highlight"} />to see definitions.</div>
      </div>
      <div>
        <SectionFade color="primary">
          <Container>
          <b>Real world impact on the financial industry, with your valuations on the books, and having the technology know-how, &nbsp;
            <u>I am your go-to person</u> 
            &nbsp; in the world of finance + technology.
            </b>
          </Container>
        </ SectionFade>
      </div>
      <div>
        <SectionFade color="primary">
          <Container>
            <Row >
              <Col lg={6}>
                <Card className="jcard">
                  <Card.Body>
                    <h3 >
                      Curiosity and Drive.
                    </h3>
                    <u>Self-taught</u> in many areas and always curious how things work.
                    <br />
                    <br />Being able to acquire different knowledge shaped myself to be <u>more creative</u> in <b>solving
                      problems</b> and having the ability to see the big picture and connect the dots.


                  </Card.Body>
                  <Card.Footer>
                    <Alert variant="success">
                      <b> Innovation comes from outside of the box, not a specific specialty</b>
                    </Alert>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </SectionFade>

        <SectionFade >
          <Container>
            <Row>
              <Col md={{ offset: 6 }}>
                <Card className="jcard">
                  <Card.Body>
                    <h3>Finance <i className="fa-solid fa-arrow-right"></i> Engineering <i className="fa-solid fa-arrow-right"></i> Blockchain. </h3>
                    I started off my career in finance and ventured into the engineering space.
                    In 2019, I learned of <JToolTip text={"decentralized finance"} />, I was absolutely excited how <JToolTip text={"DeFi"} /> can change
                    how our traditional exchange works.
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </SectionFade>
      </div>
      <div>
        <Story />
        <SectionFade >
        <Container>
          <h3>Now you scrolled down here</h3>
          Let me show you why a knowledge of finance and engineering is needed. &nbsp;
          <Link href="/learn/tech_finance">Tell me more</Link>
          </Container>
        </SectionFade>
      </div>
    </>
  )
}
