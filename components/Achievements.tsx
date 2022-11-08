import Container from 'react-bootstrap/Container';

import { motion, Variants } from "framer-motion";
import list from "./utilities/achievement.json";
import { Card } from 'react-bootstrap';
import { useRef } from 'react';
interface AList { item: { title: string; subtitle: string; } }
const cardVariants: Variants = {
  offscreen: {
    y: 500
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const CardList = ({ item: ele }: AList) => {
  return (
    <Card className="alist">
      <Card.Body>
        <h3>{ele.title}</h3>
        <span className="text-muted">{ele.subtitle}</span>
      </Card.Body>
    </Card>
  );
}


const AchievementList = () => {
  
  return (
    <section>
      <Container>
        <h3>Execute. Deliver. Lead. Pioneer.</h3>

        {list.map((item, i) => (
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
          key={i}
          animate={{ opacity: 1,
            translateX: i *15,
            translateY: 0 }}
          transition={{ duration: 0.3, delay: i }}
        > 
        <motion.div variants={cardVariants}>
        <CardList item={item} />
      </motion.div>
      
        </motion.div>
      ))}


      </Container>

    </section>
  );
}



export default AchievementList;