import Container from 'react-bootstrap/Container'
import SectionFade from '@components/utilities/SectionFade'

export default function LeftBehind() {
    return (<div className="primary">
        <SectionFade margin="unset">
            <Container>
                <h1>
                    {"Don't be left behind in today's ever-changing technology"}
                </h1>
                We are now at the era where both <b><u>technology + finance know-how</u></b> is required
                to move forward within <b><u>decentralized finance</u></b> space.
            </Container>
        </ SectionFade>
    </div>)
}