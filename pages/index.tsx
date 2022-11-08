import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Story from '@components/Story'
import SectionFade from '@components/utilities/SectionFade'
import JToolTip from '@components/utilities/Tooltip'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert';
import Link from 'next/link';
import AchievementList from '@components/Achievements'
import LeftBehind from '@components/LeftBehind'

export default function Home() {

  return (
    <>
      <Head>
        <title>Jaime On the Block</title>
        <meta name="description" content="Jaime on the block" />
        <meta name="theme-color" content="#fcd86a"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftBehind />
      <div>
        <SectionFade color="primary">
          <Container>
          <b>Real world impact on the financial industry, with my valuations on your books, and having the technology know-how, &nbsp;
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
                      problems</b> and have the ability to see the big picture to connect the dots.


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
        <AchievementList />
      </div>
      <div>
        <Story />
        <SectionFade >
        <Container>
          <h3>Now you have scrolled down here</h3>
          Let me show you why a knowledge of finance and engineering is needed. &nbsp;
          <Link href="/tech_finance">Tell me more</Link>
          </Container>
        </SectionFade>
      </div>
    </>
  )
}
