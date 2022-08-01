import { SunnoteProps } from 'types';
import { SunnoteIcon } from './svgs';

const Sunnote: React.FC<SunnoteProps> = (props) => {
  return (
    <button
      onClick={() => props.handleClick({ subject: 'band', memberId: null })}
      className={`z-20 animate-pulse ${props.isAnimating ? 'run' : 'pause'}`}
    >
      <SunnoteIcon />
    </button>
  );
};

export default Sunnote;
