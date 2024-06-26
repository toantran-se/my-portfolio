import { memo } from 'react';
import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaHtml5, FaSass, FaAngular, FaFigma } from 'react-icons/fa';
import { SiNgrx } from 'react-icons/si';

import './Skill.scss';

export const Skill = memo(() => {
  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center bg-[#FCFBF4]">
      <div className="flex items-center gap-24">
        <p className="font-bold text-6xl tracking-wide relative">SKILLS</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2">
            <RiJavascriptFill className="skill-icon" size={60} />
            <BiLogoTypescript className="skill-icon" size={60} />
            <FaHtml5 className="skill-icon" size={60} />
            <FaSass className="skill-icon" size={60} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaAngular className="skill-icon" size={60} />
            <RiReactjsFill className="skill-icon" size={60} />
            <SiNgrx className="skill-icon" size={60} />
            <FaFigma className="skill-icon" size={60} />
          </div>
        </div>
      </div>
    </div>
  );
});
