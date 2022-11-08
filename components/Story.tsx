import { FC } from 'react'
import Container from 'react-bootstrap/Container';
 // @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import JToolTip from './utilities/Tooltip';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import TimelineItem from './utilities/Timeline';

const Story: FC = () => {
   
    const openInNewTab = () => {
        const newWindow = window.open("https://www.bnymellon.com/us/en/insights/all-insights/the-rise-of-tokenization.html", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div>
            <Container>
                <h3>A Story To Tell, Not A Resume Show</h3>
 
            <TimelineItem icon="fa-solid fa-briefcase" iconClass="icon-work" date="2020 - present">
                <h3>Blockchain Creative Solutions</h3>
                    <h4>New York</h4>
                    <div>
                        <b>Imagine a world where <JToolTip text={"DeFi"} /> can be applied anywhere. </b>
                        You can invest into anything you believe to be bullish or bearish. 
                        <ul>
                            <li>
                                Invest into influencers by passing royalties, as well as finding the source of truth
                                for online media and text content.
                            </li>
                            <li>
                                Tokenize <JToolTip text={"alternative assets"} /> and bring in more liquidity.
                            </li>
                            <li>
                                Gamify client experience, and create an enclosed network for <JToolTip text={"accredited investors"} />, like AMEX Centurion.
                            </li>
                        </ul>

                        <b>Tokenization <sup>1</sup></b> is on the rise. 
                        <JToolTip text={"Tokenization"} /> is beneficial for financial institutions in many ways due to increase of <JToolTip text={"liquidity"} />. It can reduce settlement time, 
                        reconciliation errors from middle and back office, beneficiary request, managing cap table. 
                        <p />
                        <small><sup>1</sup><small >
                            <Button variant="link" onClick={openInNewTab}> BNY - The Rise of Tokenization</Button>
                            </small></small>< hr />
                    <Alert variant="success">
                    <b>DeFi is the intersection of finance and technology.</b> I have both professional experiences, independently.
                    We are now at the era where the two meet that requires both technology + finance know-how.
                    </Alert>
                    </div>
            </TimelineItem>
            <TimelineItem icon="fa-solid fa-briefcase" iconClass="icon-work" date="2018 - 2020">
                <h3 >Hedge Fund Software Developer</h3>
                <h4>New York, NY</h4>
                <p>
                <JToolTip text={"Fullstack"} /> developer at one of the largest hedge fund in the world. 
                    
                </p>< hr />
                <Alert variant="success">
                Having the experiences as an analyst and trader, I know what is required in the system.
                </Alert>
            </TimelineItem>
            <TimelineItem icon="fa-solid fa-hand" iconClass="icon-personal" date="2018 - present">
                <h3>Crypto Investment</h3>
                <p>
                    After the 2017 <JToolTip text={"cryptocurrency"} /> crash, I made my first cryptocurrency investment.
                    But my exposure to blockchain started in 2015, scroll to see below.
                </p><hr />
                <Alert variant="success">
                Investment 101: Buy low, sell high. 
                </Alert>
            </TimelineItem>
            <TimelineItem icon="fa-solid fa-briefcase" iconClass="icon-work" date="2015 - 2018">
            <h3 >Quantitative Analyst + Trader</h3>
                <h4>New York, NY</h4>
                <p>
                    My past experiences in building complex financial models, (see below),
                    led me to understand how modern day quantitative analysis works.
                    Analysis includes <JToolTip text={"regression analysis"} />, 
                    <JToolTip text={"clustering"} />, <JToolTip text={"NLP"} />, and custom statistical models.
                </p>
                <Alert variant="success">
                 Prior to financial crisis, machine learning was not heard of. Investment analyst
                 used Excel as the sole analysis tool. However, my past experience involve 
                 working with external quantitative researchers at large institutional banks and discussing methodologies. 
                 Regression analysis is a subset of machine learning and a subject I am not unfamiliar of.
                </Alert>
            </TimelineItem>

            <TimelineItem icon="fa-solid fa-hand" iconClass="icon-personal" date="2015 - present">
            <h3>Blockchain Involvement</h3>
                <p>I was first exposed to blockchain in 2015 as a consultant for
                    other companies. I attended conferences and organized blockchain educational materials.
                </p><hr />
                <Alert variant="success">
                <b>Am I a crypto native?</b> Yes.
                </Alert>
            </TimelineItem>
            <TimelineItem icon="fa-solid fa-briefcase" iconClass="icon-work" date="2008 - 2011">
            <h3>Pluris Valuation Advisors</h3>
                <h4>New York, NY</h4>
                <p>
                    <b>Know what an <JToolTip text={"Auction Rate Security"} /> is? </b>
                    Many {"don't"}. SEC and FINRA sure do since it was one of the biggest collapse of our time.
                    <br /><br />
                    In 2008, auction rate securities (ARS) had a tremendous downfall. The ARS market was valued at $200billion. 
                    I worked with Second Market, now NASDAQ Private Exchange, and performed trade data analysis.
                    I built complex financial models using regression analysis and optimizations, specifically cubic spline modeling.
                    I then automated the entire valuation process because we all know Excel is too slow!
                </p><hr />
                <Alert variant="success">
                    If your company, banks to Fortune 500 companies, has held ARS and received pricing from Pluris or Interactive Data, 
                    there is a good chance that that valuation is from the model I created.
                </Alert>
            </TimelineItem>

            <TimelineItem icon="fa-solid fa-briefcase" iconClass="icon-work" date="2006 - 2008">
            <h3>Interactive Data </h3>
                <h4>New York, NY</h4>
                <p>
                    Interactive Data, now known as Intercontinental Exchange (ICE).
                    I discussed with institutional clients pricing challenges and methodologies, whether it be 
                    <JToolTip text={"MBS"} />, <JToolTip text={"ABS"} />, or <JToolTip text={"ADR"} />.
                </p><hr />
                <Alert variant="success">
                <JToolTip text={"Waterfall"} />, prepayment speed (<JToolTip text={"PSA"} />) are some of the price challenges
                clients would request.
                </Alert>
            </TimelineItem>

            <TimelineItem icon="fa-solid fa-graduation-cap" iconClass="icon-edu">
                <h3 >Chartered Financial Analyst</h3>
                <h4>Completed CFA LevelII</h4>
                <p>
                    The {"world's"} most recognized and competitive financial credential.
                </p>
            </TimelineItem>
            <TimelineItem icon="fa-solid fa-graduation-cap" iconClass="icon-edu">
                <h3 >Master in Financial Engineering</h3>
                <h4>Johns Hopkins University</h4>
                <p>
                    Master in Financial Engineering
                </p>
            </TimelineItem>
            <TimelineItem icon="fa-solid fa-graduation-cap" iconClass="icon-edu" >
            <h3>Bachelor in Finance</h3>
                <h4>Baruch + Macaulay Honors College</h4>
                <p>
                    Undergrad studies in Finance and Investments
                </p>
            </TimelineItem>
            </Container>
        </div>
    );
}

export default Story;