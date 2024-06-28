import { Footer, HeroContent, Skill, Social } from '@/components';
import { useRef, useState } from 'react';

import './Home.scss';

export const Home = () => {
  const [isReachBottom, setIsReachBottom] = useState(false);
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  let lastScrollTop = 0;

  const handleScroll = () => {
    const element = constraintsRef.current;

    if (!element) return;

    const { scrollTop, offsetHeight, scrollHeight } = element;

    if (scrollTop < lastScrollTop) {
      setIsReachBottom(false);
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    if (scrollTop + offsetHeight >= scrollHeight) {
      setIsReachBottom(true);
    }
  };

  return (
    <div ref={constraintsRef} className="wrapper" onScroll={handleScroll}>
      <div className="section">
        <HeroContent />
      </div>
      <div className="section">
        <Skill />
      </div>
      <div className="section">
        <Footer />
      </div>
      <Social constraintsRef={constraintsRef} isReachBottom={isReachBottom} />
    </div>
  );
};
