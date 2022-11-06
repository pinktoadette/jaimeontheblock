import { FC } from 'react'
import Container from 'react-bootstrap/Container';
 // @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import JToolTip from './utilities/Tooltip';

const Story: FC = () => {

    return (
        <div>
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
                date="2018 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 >Hedge Fund Software Developer</h3>
                <h4>New York, NY</h4>
                <p>
                    Fullstack developer at one of the largest hedge fund in the world. 
                    Having the experiences as an analyst and trader, I know what is needed in the system.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2018 - present"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}                
            >
                <h3>Crypto Investment</h3>
                <p>
                    After the 2017 cryptocurrency crash, I made my first cryptocurrency investment.
                    <p>Investment 101: Buy low, sell high. </p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 >Quantitative Analyst + Trader</h3>
                <h4>New York, NY</h4>
                <p>
                    Due to my past experiences in building complex financial models, (see below),
                    my primary function was to extract, translate dataset and perform analysis.
                    Analysis includes regression analysis, clustering, NLP, and custom models.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2015 - present"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}                
            >
                <h3>Blockchain Involvement</h3>
                <p>I was first exposed to blockchain in 2015. I was a consultant for
                    other companies by attending conferences and organizing blockchain educational materials.

                    <p>
                        <b>Am I a crypto native?</b> Perhaps.
                    </p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3>Pluris Valuation Advisors</h3>
                <h4>New York, NY</h4>
                <p>
                    Know what an <JToolTip text={"Auction Rate Security"} /> is? 
                    Many {"don't"}. 

                    In 2008, auction rate securities (ARS) had a tremendous downfall.
                    I built complex financial models using regresson analysis and optimizations, specifically cubic spline modeling.
                    
                </p><hr />
                    If your company has held ARS and received pricing from Pluris or Interactive Data, there is a good change,
                    that number is from this model.
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3>Interactive Data </h3>
                <h4>New York, NY</h4>
                <p>
                    Interactive Data, now known as Intercontiental Exchange (ICE).
                    I discuss with clients are pricing methodologies, whether it be structured finance or ADR.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3>UBS</h3>
                <h4>Weehawken, NJ</h4>
                <p>
                    Part of the Sales and Trading on the Fixed Income Trading Floor.
                    I helped out upper management in creating VBA tools for valuaing pricing of
                    fixed income.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 >Masters in Financial Engineering</h3>
                <h4>Masters Degree</h4>
                <p>
                    Masters in Financial Engineering
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 >Bachelor in Finance</h3>
                <h4>Bachelor Degree</h4>
                <p>
                    Undergrad studied Finance and Investments
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    );
}

export default Story;