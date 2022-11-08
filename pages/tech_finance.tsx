import Container from 'react-bootstrap/Container'
import SectionFade from '@components/utilities/SectionFade'
import Head from 'next/head'
import Skills from '@components/Skills'
import LeftBehind from '@components/LeftBehind'

export default function DeFi() {

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
                <SectionFade>
                    <Container>
                        <b>Not many people have real-world finance and technology skills, independently.</b>
                        < br />
                        I can help you with designing the technology infrastructure that is needed in &nbsp;
                        {"today's"} world of ever-changning technology and the integration into traditional financial space.
                        <br />
                    </Container>
                </SectionFade>
            </div>
            <div >
                <Skills />
            </div>
        </>
    )

}