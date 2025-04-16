import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
  className="text-lg leading-relaxed text-gray-600"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  viewport={{ once: true }}
>
  My path into tech wasn’t a straight line — it was driven by curiosity, creativity, and a love for building things that solve real problems. Early on, I found joy in connecting ideas with logic, and that led me into the world of software and data.
  <br /><br />
  I’m most energized when I’m solving meaningful challenges — whether that’s designing seamless user flows, building backend APIs, or uncovering trends from raw datasets. I care deeply about clarity, efficiency, and building experiences that feel intuitive.
  <br /><br />
  Outside of code, I enjoy sketching ideas, reading about digital minimalism, and occasionally exploring design systems and data visual storytelling.
</motion.p>


      </div>
    </section>
  );
};

export default About;
