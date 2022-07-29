import { Fragment, useState } from 'react';

import { MemberDeleteModal } from '../components';
import { CardButtonProps } from 'types';
import { RedCircle } from './svgs';

const RedButton: React.FC<CardButtonProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <button
        onClick={() => setIsModalOpen(true)}
        title='წაშლა'
        data-testid={`${props._id}-red-button`}
      >
        <RedCircle />
      </button>
      {isModalOpen && (
        <MemberDeleteModal
          _id={props._id}
          index={props.index}
          handleClose={handleModalClose}
        />
      )}
    </Fragment>
  );
};

export default RedButton;
