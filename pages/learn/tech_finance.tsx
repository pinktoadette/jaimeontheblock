import Container from 'react-bootstrap/Container'
import Jaime from '@components/Jaime'
import SectionFade from '@components/utilities/SectionFade'
import Head from 'next/head'

export default function DeFi() {

    return(
        <>
        <Head>
        <title>Jaime On the Block</title>
        <meta name="description" content="Jaime on the block" />
        <meta name="theme-color" content="#fcd86a"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <Jaime />
            <div>
                <SectionFade color="primary">
                <Container>
                <b>Real world impact on the financial industry, my valuations on your books, and having the technology know-how, &nbsp;
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
                        I can help you with designing the technology infrastructure that is needed in &nbsp;
                        {"today's"} world of ever-changning technology and the integration into traditional financial space.
                        <br />
                        <SectionFade>
                            My biggest focus areas in designing infrastrucutre is security. 
                            I will ask you what infrastrucutre do you have in place, and how can we make it better.
                        </SectionFade>
                        
                        <p> We all know there are many scammers and bots out there, how can you reduce your <b>risk</b> of
                            such attack as a financial institution? How can you proceed further with tradtional regulations in place?
                            < br /> I have the solution.
                        </p>
                        <p>
                            <b>Am I an engineer or finance gal? </b>
                            I consider both. 
                        </p>
                    </Container>
                </SectionFade>
            </div>
        </>
    )

}