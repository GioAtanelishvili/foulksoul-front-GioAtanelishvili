import { Fragment, useState } from 'react';

import { MemberDetailsModal } from '../components';
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
        data-testid={`${props._id}-green-button`}
      >
        <GreenCircle />
      </button>
      {isModalOpen && (
        <MemberDetailsModal
          _id={props._id}
          index={props.index}
          handleClose={handleModalClose}
        />
      )}
    </Fragment>
  );
};

export default GreenButton;
