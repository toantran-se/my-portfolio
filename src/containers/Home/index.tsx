import { Footer, HeroContent, Skill, Social } from '@/components';
import ReactFullpage from '@fullpage/react-fullpage';
import { useRef, useState } from 'react';

export const Home = () => {
  const [isReachBottom, setIsReachBottom] = useState(false);
  const anchors = ['', '', ''];
  const constraintsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div ref={constraintsRef}>
      <ReactFullpage
        scrollingSpeed={1000}
        autoScrolling={true}
        navigation={true}
        navigationTooltips={anchors}
        onLeave={(origin, destination, direction) => {
          setIsReachBottom(destination.index === 2 ? true : false);
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HeroContent />
              </div>
              <div className="section">
                <Skill />
              </div>
              <div className="section" ref={footerRef}>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
      <Social constraintsRef={constraintsRef} isReachBottom={isReachBottom} />
    </div>
  );
};
