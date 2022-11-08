import Container from 'react-bootstrap/Container';

import { motion } from "framer-motion";
import list from "./utilities/achievement.json";
import { Card } from 'react-bootstrap';
interface AList { item: { title: string; subtitle: string; }; key: number; }

const CardList = ( {item: ele} : AList) => {
  
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount:1 }}
      >
        <motion.div>
          <Card className="alist">
            <Card.Body> 
                
          <h3>{ele.title}</h3>
          <span className="text-muted">{ele.subtitle}</span>
            </Card.Body>
          </Card>
        </motion.div>
      </motion.div>
    );
  }

  
const AchievementList = () => {
    
    return (
      <section>
      <Container>
        <h3>Execute. Deliver. Lead. Pioneer.</h3>
        {list.map((item, idx) => (
            <CardList  item={item} key={idx} />
          ))}
      </Container>

      </section>
    );
}



export default AchievementList;