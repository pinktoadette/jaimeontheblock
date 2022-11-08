
import { FC, useRef } from "react";
import { motion, useScroll, Variants } from "framer-motion";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cardVariants: Variants = {
    offscreen: {
      y: 400
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

const TimelineItem = ({ icon, date, iconClass, children }: any) => {

  return (
    <div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
         <motion.div variants={cardVariants}>
            <div className="d-inline-flex p-2 full-width">
                <div><div className={`icon ${iconClass}`}><i className={icon}></i></div></div>

                <Card className="story-card ">
                    <Card.Body>
                        {children}
                        < hr/>
                        <span className="text-muted">{ date }</span>
                    </Card.Body>
                </Card>
            </div>
            
        </motion.div>
        
      </motion.div>
    </div>

  );
}

export default TimelineItem;