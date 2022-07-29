import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { CardButtonProps } from 'types';
import { DataContext } from 'context';
import { YellowCircle } from './svgs';

const YellowButton: React.FC<CardButtonProps> = (props) => {
  const navigate = useNavigate();

  const { members } = useContext(DataContext);

  const handleClick = () => {
    const member = members.find((member) => member._id === props._id);

    navigate('edit', { state: { ...member } });
  };

  return (
    <button onClick={handleClick} title='შეცვლა'>
      <YellowCircle />
    </button>
  );
};

export default YellowButton;
