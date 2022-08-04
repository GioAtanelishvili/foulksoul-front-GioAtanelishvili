import { SunNoteProps } from './types';
import { SunNoteIcon } from './svgs';

const SunNote: React.FC<SunNoteProps> = (props) => {
  return (
    <button
      onClick={() => props.handleClick({ subject: 'band', memberId: null })}
      className={`z-20 animate-pulse ${props.isAnimating ? 'run' : 'pause'}`}
      data-testid='landing-sunnote'
    >
      <SunNoteIcon />
    </button>
  );
};

export default SunNote;
