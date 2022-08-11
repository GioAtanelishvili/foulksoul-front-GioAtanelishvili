import { Fragment, useState } from 'react';

import { SocialMediaDeleteModal } from './index';
import { CardButtonProps } from 'types';
import { RedCircle } from 'components';

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
        data-test-id={`${props.id}-red-button`}
      >
        <RedCircle />
      </button>
      {isModalOpen && (
        <SocialMediaDeleteModal id={props.id} handleClose={handleModalClose} />
      )}
    </Fragment>
  );
};

export default RedButton;
