
import { FC, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const SectionFade = ({ children, margin }: any) => {

  return (
    <section className={`${ margin ?? ''}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    </section>

  );
}

export default SectionFade;