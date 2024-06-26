import { memo } from 'react';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

import './Footer.scss';

export const Footer = memo(() => {
  const cards = [
    {
      icon: <MdEmail className="social-icon" size={30} />,
      text: 'tranngoctoandev@gmail.com',
      link: 'mailto:tranngoctoandev@gmail.com',
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
    if ((index = 2)) {
      window.location.href = 'tel:+4733378901';
      return;
    }
    window.open(`${cards[index].link}`);
  };

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_24.1%_68.8%,_rgb(50,_50,_50)_0%,_rgb(0,_0,_0)_99.4%)]">
      <p className="font-bold text-6xl">Get in Touch</p>
      <p className="text-xl mt-4">
        Thank you for visiting my portfolio! I'm always excited to connect and
        collaborate on new projects.
      </p>
      <p className="text-xl mt-1">
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>

      <div className="flex flex-col gap-3 mt-4">
        {cards.map((card, index) => {
          return (
            <div
              className="contact-card"
              key={index}
              onClick={() => handleCardClicked(index)}
            >
              {card.icon}
              <p className="text-base">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
});
