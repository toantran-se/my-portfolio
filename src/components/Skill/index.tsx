import { motion, useAnimation, useInView } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';

import { SOCIAL_ICONS_1, SOCIAL_ICONS_2 } from '@/shared';
import './Skill.scss';

export const Skill = memo(() => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  };
  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const item2 = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center bg-[#FCFBF4]">
      <div className="flex items-center gap-24">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: false }}
          className="font-bold text-6xl tracking-wide relative"
        >
          SKILLS
        </motion.div>
        <div className="flex flex-col gap-5">
          <motion.div
            className="flex items-center justify-center gap-2"
            initial="hidden"
            variants={container}
            animate={controls}
            ref={ref}
          >
            {SOCIAL_ICONS_1.map((social, index) => (
              <motion.div key={index} className="item" variants={item}>
                {social.icon}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial="hidden"
            variants={container}
            animate={controls}
            ref={ref}
          >
            {SOCIAL_ICONS_2.map((social, index) => (
              <motion.div key={index} className="item" variants={item2}>
                {social.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});
