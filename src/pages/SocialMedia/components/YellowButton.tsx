import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { extractPageNumber } from 'helpers';
import { YellowCircle } from 'components';
import { CardButtonProps } from 'types';
import { DataContext } from 'context';

const YellowButton: React.FC<CardButtonProps> = (props) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { socialMedia } = useContext(DataContext);

  const handleClick = () => {
    const item = socialMedia.find((item) => item._id === props.id);
    const page = extractPageNumber(search) || 1;

    navigate('edit', { state: { ...item, page } });
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
