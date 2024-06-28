import { Footer, HeroContent, Skill, Social } from '@/components';
import { useRef, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

export const Home = () => {
  const [isReachBottom, setIsReachBottom] = useState(false);
  const constraintsRef = useRef(null);
  const handlePageChange = (index: number) => {
    setIsReachBottom(index === 2 ? true : false);
  };

  return (
    <div ref={constraintsRef}>
      <ReactPageScroller
        animationTimer={850}
        onBeforePageScroll={handlePageChange}
      >
        <HeroContent />
        <Skill />
        <Footer />
      </ReactPageScroller>
      <Social constraintsRef={constraintsRef} isReachBottom={isReachBottom} />
    </div>
  );
};
