import ReactFullpage from '@fullpage/react-fullpage';
import { Footer, HeroContent, Skill, Social } from '@/components';
import { useRef } from 'react';

export const Home = () => {
  const anchors = ['', '', ''];
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef}>
      <ReactFullpage
        scrollingSpeed={1000}
        autoScrolling={true}
        navigation={true}
        navigationTooltips={anchors}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HeroContent />
              </div>
              <div className="section">
                <Skill />
              </div>
              <div className="section">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
      <Social constraintsRef={constraintsRef} />
    </div>
  );
};
