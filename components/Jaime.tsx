import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'
import JToolTip from './utilities/Tooltip'

export default function Jaime() {

    return (
            <div className="full-center">
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
                            <Button variant=    "warning">Available for Hire</Button>
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
    )

}