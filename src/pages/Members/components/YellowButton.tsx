import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { extractPageNumber } from 'helpers';
import { CardButtonProps } from 'types';
import { DataContext } from 'context';
import { YellowCircle } from './svgs';

const YellowButton: React.FC<CardButtonProps> = (props) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { members } = useContext(DataContext);

  const handleClick = () => {
    const member = members.find((member) => member._id === props._id);
    const page = extractPageNumber(search);

    navigate('edit', { state: { ...member, page } });
  };

  return (
    <button
      onClick={handleClick}
      title='შეცვლა'
      data-testid={`${props._id}-yellow-button`}
    >
      <YellowCircle />
    </button>
  );
};

export default YellowButton;
