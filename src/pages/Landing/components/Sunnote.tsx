import { SunnoteProps } from 'types';
import { SunnoteIcon } from './svgs';

const Sunnote: React.FC<SunnoteProps> = (props) => {
  return (
    <button
      onClick={() => props.handleClick({ subject: 'band', memberId: null })}
    >
      <SunnoteIcon />
    </button>
  );
};

export default Sunnote;
