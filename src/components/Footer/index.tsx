import { motion, useAnimation, useInView } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import { DiGithubBadge } from 'react-icons/di';
import './Footer.scss';

export const Footer = memo(() => {
  const cards = [
    {
      icon: <MdEmail className="social-icon" size={30} />,
      text: 'tranngoctoandev@gmail.com',
      link: 'mailto:tranngoctoandev@gmail.com',
    },
    {
      icon: <DiGithubBadge className="social-icon" size={40} />,
      text: 'github.com/toantran-se',
      link: 'https://github.com/toantran-se',
    },
    {
      icon: <IoLogoLinkedin className="social-icon" size={30} />,
      text: 'linkedin.com/toan-tran',
      link: 'https://www.linkedin.com/in/toan-tran-363182274/',
    },
    {
      icon: <FaPhoneAlt className="social-icon" size={20} />,
      text: '0934 795 670',
      link: 'tel:093-479-5670',
    },
  ];

  const handleCardClicked = (index: number) => {
    if ((index === (cards.length - 1))) {
      window.location.href = 'tel:+4733378901';
      return;
    }
    window.open(`${cards[index].link}`);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.25,
      },
    },
  };
  const item = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
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
    <div className="text-white flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_24.1%_68.8%,_rgb(50,_50,_50)_0%,_rgb(0,_0,_0)_99.4%)]">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: false }}
      >
        <p className="font-bold text-6xl">Get in Touch</p>
        <p className="text-xl mt-4">
          Thank you for visiting my portfolio! I'm always excited to connect and
          collaborate on new projects.
        </p>
        <p className="text-xl mt-1">
          Feel free to reach out via email or connect with me on LinkedIn.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3 mt-4"
        initial="hidden"
        variants={container}
        animate={controls}
        ref={ref}
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              className="contact-card"
              key={index}
              variants={item}
              whileHover={{ scale: 1.08, transition: { delay: 0 } }}
              onClick={() => handleCardClicked(index)}
            >
              {card.icon}
              <p className="text-base">{card.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
});
