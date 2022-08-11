import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { extractPageNumber } from 'helpers';
import { YellowCircle } from 'components';
import { CardButtonProps } from 'types';
import { DataContext } from 'context';

const YellowButton: React.FC<CardButtonProps> = (props) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { members } = useContext(DataContext);

  const handleClick = () => {
    const member = members.find((member) => member._id === props.id);
    const page = extractPageNumber(search) || 1;

    navigate('edit', { state: { ...member, page } });
  };

  return (
    <button
      onClick={handleClick}
      title='შეცვლა'
      data-test-id={`${props.id}-yellow-button`}
    >
      <YellowCircle />
    </button>
  );
};

export default YellowButton;
