import { RefObject, memo, useEffect } from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import './Social.scss';

type SocialProps = {
  constraintsRef: any;
};

export const Social = memo(({ constraintsRef }: SocialProps) => {
  const icons = [
    {
      icon: <MdEmail className="social-icon" size={30} />,
      tooltip: 'Email',
      link: 'mailto:tranngoctoandev@gmail.com',
    },
    {
      icon: <DiGithubBadge className="social-icon" size={40} />,
      tooltip: 'Github',
      link: 'https://github.com/toantran-se',
    },
    {
      icon: <IoLogoLinkedin className="social-icon" size={30} />,
      tooltip: 'Linkedin',
      link: 'https://www.linkedin.com/in/toan-tran-363182274/',
    },
  ];

  const handleLinkClicked = (index: number) => {
    window.open(`${icons[index].link}`);
  };

  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      drag
      dragConstraints={constraintsRef}
      className="fixed top-10 left-5 z-10 social-container"
    >
      {icons.map((icon, index) => {
        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger onClick={() => handleLinkClicked(index)}>
                <motion.div whileHover={{ scale: 1.2 }}>{icon.icon}</motion.div>
              </TooltipTrigger>
              <TooltipContent className="border border-solid border-black">
                {icon.tooltip}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </motion.div>
  );
});
