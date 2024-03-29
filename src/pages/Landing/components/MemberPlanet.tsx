import { useRef } from 'react';

import { MemberPlanetProps } from './types';
import { DefaultAvatar } from 'components';
import { calcScaling } from 'helpers';

const MemberPlanet: React.FC<MemberPlanetProps> = (props) => {
  const refContainer = useRef(calcScaling());

  const avatarUrl = `${process.env.REACT_APP_API_BASE_URL}/${props.avatarPath}`;

  const isActive = props.cardSubject.memberId === props.id;
  const isAnimating = props.cardSubject.subject === 'band';

  return (
    <div
      className={`absolute -top-10 left-1/2 animate-move-circularly-planet visible ${
        isAnimating ? 'run' : 'pause'
      }`}
      style={{
        animationDuration: `${props.animationTiming}s`,
      }}
      data-test-id={`${props.id}-planet`}
    >
      <div
        onClick={() =>
          props.handleClick({ subject: 'member', memberId: props.id })
        }
        className={`w-32 flex flex-col items-center relative cursor-pointer drop-shadow-member-planet ${
          refContainer.current
        } transition ease-in-out hover:scale-125 ${
          isActive ? 'scale-125' : ''
        }`}
      >
        <figure
          style={{ backgroundColor: props.color }}
          className='border-member-planet w-24 h-24 flex justify-center items-center border-[4.02px] rounded-full overflow-hidden'
        >
          {props.avatarPath ? (
            <img
              src={avatarUrl}
              className='max-w-full max-h-full'
              alt='Band member'
            />
          ) : (
            <div className='max-w-[3rem] max-h-[3rem] flex justify-center items-center'>
              <DefaultAvatar />
            </div>
          )}
        </figure>
        <h2
          className='bg-member-planet text-primary-dark-blue min-w-full pt-1 px-2 absolute -bottom-4 text-lg text-center font-bold font-nino-mtavruli tracking-[1.72347px] border-[5.17px] rounded-[80.43px]'
          style={{ borderColor: props.color }}
        >
          {props.name}
        </h2>
      </div>
    </div>
  );
};

export default MemberPlanet;
