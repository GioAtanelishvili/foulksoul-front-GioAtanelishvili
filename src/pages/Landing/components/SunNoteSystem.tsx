import { useContext } from 'react';

import { MemberPlanet, MemberPlanetOrbit, SunNote } from './index';
import { SunNoteSystemProps } from './types';
import { DataContext } from 'context';
import {
  calcOrbitRatios,
  calcAnimationTimings,
  sortMembersByRadius,
} from 'helpers';

const SunNoteSystem: React.FC<SunNoteSystemProps> = (props) => {
  const { members } = useContext(DataContext);
  const sortedMembers = sortMembersByRadius(members);

  const orbitRatios = calcOrbitRatios(members);
  const animationTimings = calcAnimationTimings(orbitRatios);

  return (
    <article className='w-180 h-180 flex justify-center items-center relative'>
      {sortedMembers.map((member, index) => (
        <MemberPlanetOrbit
          key={member._id}
          sizeRatio={orbitRatios[index]}
          isAnimating={props.cardSubject.subject === 'band'}
          animationTiming={animationTimings[index]}
        >
          <MemberPlanet
            id={member._id}
            name={member.name}
            color={member.color}
            width={orbitRatios[index]}
            avatarPath={member.avatarPath}
            cardSubject={props.cardSubject}
            animationTiming={animationTimings[index]}
            index={index}
            handleClick={props.handleMemberClick}
          />
        </MemberPlanetOrbit>
      ))}
      <SunNote
        handleClick={props.handleSunNoteClick}
        isAnimating={props.cardSubject.subject === 'band'}
      />
    </article>
  );
};

export default SunNoteSystem;
