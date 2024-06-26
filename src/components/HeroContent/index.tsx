import { memo } from 'react';
import { motion } from 'framer-motion';
import './HeroContent.scss';

export const HeroContent = memo(() => {
  return (
    <>
      <div className="relative">
        <div className="text-white flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_24.1%_68.8%,_rgb(50,_50,_50)_0%,_rgb(0,_0,_0)_99.4%)]">
          <motion.div
            animate={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <p className="font-bold text-6xl">Tran Ngoc Toan</p>
            <p className="font-medium text-3xl">Front-end Developer</p>
          </motion.div>
          <motion.p
            animate={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: false }}
            className="text-center text-xl mt-5 max-w-[55%]"
          >
            I am a software engineer with over a year of experience in
            collaborating with cross-functional teams, problem-solving, and
            delivering high-quality code in a fast-paced environment.
          </motion.p>

          <motion.div
            animate={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: false }}
            className="icon-scroll"
          ></motion.div>
        </div>
      </div>
    </>
  );
});
