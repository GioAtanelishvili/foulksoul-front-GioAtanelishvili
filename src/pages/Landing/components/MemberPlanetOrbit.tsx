import { Fragment } from 'react';

import { MemberPlanetOrbitProps } from 'types';
import { OrbitStroke } from './svgs';

const MemberPlanetOrbit: React.FC<MemberPlanetOrbitProps> = (props) => {
  const orbitSizing = props.sizeRatio * 100;

  return (
    <Fragment>
      <OrbitStroke sizing={orbitSizing} />
      <div
        className='absolute rounded-full z-10'
        style={{
          width: `${orbitSizing}%`,
          height: `${orbitSizing}%`,
        }}
      >
        <div
          className={`w-full h-full relative rounded-full animate-move-circularly-orbit ${
            props.isAnimating ? 'run' : 'pause'
          }`}
          style={{
            animationDuration: `${props.animationTiming}s`,
          }}
        >
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default MemberPlanetOrbit;
