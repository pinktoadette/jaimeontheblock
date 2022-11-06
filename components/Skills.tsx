import { motion } from 'framer-motion';
import { FC, useState, useEffect } from 'react'

const Skills: FC = () => {
    const [selectedId, setSelectedId] = useState(null)
    
    return(
        <div>
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            />
        </div>
        // {items.map(item => (
        //     <motion.div layoutId={item.id} onClick={setSelectedId(item.id)}>
        //       <motion.h5>{item.subtitle}</motion.h5>
        //       <motion.h2>{item.title}</motion.h2>
        //     </motion.div>
        //   ))}
          
        //   <AnimatePresence>
        //     {selectedId && (
        //       <motion.div layoutId={selectedId}>
        //         <motion.h5>{item.subtitle}</motion.h5>
        //         <motion.h2>{item.title}</motion.h2>
        //         <motion.button onClick={setSelectedId(null)} />
        //       </motion.div>
        //     )}
        //   </AnimatePresence>
    );
}

export default Skills;