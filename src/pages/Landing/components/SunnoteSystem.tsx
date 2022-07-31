import { useContext } from 'react';

import { MemberPlanet, MemberPlanetOrbit, Sunnote } from '../components';
import { calcOrbitRatios, calcAnimationTimings } from 'helpers';
import { SunnoteSystemProps } from 'types';
import { DataContext } from 'context';

const SunnoteSystem: React.FC<SunnoteSystemProps> = (props) => {
  const { members } = useContext(DataContext);

  const orbitRatios = calcOrbitRatios(members);
  const animationTimings = calcAnimationTimings(orbitRatios);

  return (
    <article className='w-216 h-216 flex justify-center items-center relative'>
      {members.map((member, index) => (
        <MemberPlanetOrbit
          key={member._id}
          sizeRatio={orbitRatios[index]}
          isAnimating={props.cardSubject.subject === 'band'}
          animationTiming={animationTimings[index]}
        >
          <MemberPlanet
            _id={member._id}
            name={member.name}
            color={member.color}
            width={orbitRatios[index]}
            avatarPath={member.avatarPath}
            isAnimating={props.cardSubject.subject === 'band'}
            animationTiming={animationTimings[index]}
            handleClick={props.handleMemberClick}
          />
        </MemberPlanetOrbit>
      ))}
      <Sunnote handleClick={props.handleSunnoteClick} />
    </article>
  );
};

export default SunnoteSystem;
