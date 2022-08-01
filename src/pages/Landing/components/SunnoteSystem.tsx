import { useContext } from 'react';

import { MemberPlanet, MemberPlanetOrbit, Sunnote } from '../components';
import { SunnoteSystemProps } from 'types';
import { DataContext } from 'context';
import {
  calcOrbitRatios,
  calcAnimationTimings,
  sortMembersByRadius,
} from 'helpers';

const SunnoteSystem: React.FC<SunnoteSystemProps> = (props) => {
  const { members } = useContext(DataContext);
  const sortedMembers = sortMembersByRadius(members);

  const orbitRatios = calcOrbitRatios(members);
  const animationTimings = calcAnimationTimings(orbitRatios);

  return (
    <article className='w-216 h-216 flex justify-center items-center relative'>
      {sortedMembers.map((member, index) => (
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
            index={index}
            handleClick={props.handleMemberClick}
          />
        </MemberPlanetOrbit>
      ))}
      <Sunnote handleClick={props.handleSunnoteClick} />
    </article>
  );
};

export default SunnoteSystem;
