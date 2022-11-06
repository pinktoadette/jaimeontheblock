import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'
import Jaime from '@components/Jaime'
import SectionFade from '@components/utilities/SectionFade'

export default function DeFi() {

    return(
        <>
            <Jaime />
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
                <SectionFade>
                    <Container>
                        <b>Not many people have real-world finance and technology skills.</b>
                        < br />
                        I can help you with designing the technology infrastructure that is needed in 
                        {"today's"} world of ever-changning technology and the integration into traditional financial space.
                        <br />
                        <SectionFade>
                            My biggest focus areas in designing infrastrucutre is security. 
                            I will ask you what infrastrucutre do you have in place, and how can we make it better.
                        </SectionFade>
                        
                        <p> We all know there are many scammers, bots out there, how can you reduce your <b>risk</b> of
                            such attack as an financial institutions? How can you proceed further with tradtional regulations in place?
                            < br /> I have the solution.
                        </p>
                    </Container>
                </SectionFade>
            </div>
        </>
    )

}