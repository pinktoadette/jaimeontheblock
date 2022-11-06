import { FC } from 'react'
import Container from 'react-bootstrap/Container';
 // @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import JToolTip from './utilities/Tooltip';

const Story: FC = () => {

    return (
        <>
        <Container>
                <h3>A Story - Not Just A Resume</h3>
            </Container>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(236 236 236 / 30%)', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  #fcd86a' }}
                date="2020 - present"
                iconStyle={{ background: '#fcd86a', color: '#000' }}
            >
                <h3>Blockchain Creative Solutions</h3>
                <h4>New York</h4>
                <div>
                    Imagine a world where <JToolTip text={"DeFi"} /> can be applied anywhere. 
                    You can invest into anything you believe to be bullish or bearish. 
                    <ul>
                        <li>
                            Created social application for investing into influencers by passing royalties, as well as finding the source of truth
                            for online media and text content.
                        </li>
                        <li>
                            Tokenized <JToolTip text={"alternative assets"} /> and designed infrastrucutre for production.
                        </li>
                        <li>
                            Gamified the platform, and created a network for <JToolTip text={"accredited investors"} />.
                        </li>
                    </ul>

                    <b>Tokenization <sup>1</sup></b> is on the rise. 
                    <JToolTip text={"Tokenization"} /> is beneficial for financial institutions in many ways due to increase of liquidity. It can reduce settlement time, 
                    reconciliation errors from middle and back office, beneficiary request, managing cap table. 
                    <p />
                    <small><sup>1</sup>https://www.bnymellon.com/us/en/insights/all-insights/the-rise-of-tokenization.html</small>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 >Art Director</h3>
                <h4>San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 >Web Designer</h3>
                <h4>Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 >Web Designer</h3>
                <h4>San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 >Content Marketing for Web, Mobile and Social Media</h3>
                <h4>Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 >Agile Development Scrum Master</h3>
                <h4>Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 >Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4>Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />
        </VerticalTimeline>
        </>
    );
}

export default Story;