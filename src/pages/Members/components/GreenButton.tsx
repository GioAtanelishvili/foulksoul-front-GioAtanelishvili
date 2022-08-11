import { Fragment, useState } from 'react';

import { MemberDetailsModal } from './index';
import { CardButtonProps } from 'types';
import { GreenCircle } from './svgs';

const GreenButton: React.FC<CardButtonProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <button
        onClick={() => setIsModalOpen(true)}
        title='დამატება'
        data-test-id={`${props.id}-green-button`}
      >
        <GreenCircle />
      </button>
      {isModalOpen && (
        <MemberDetailsModal id={props.id} handleClose={handleModalClose} />
      )}
    </Fragment>
  );
};

export default GreenButton;
