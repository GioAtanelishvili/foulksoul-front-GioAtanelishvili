import { Fragment, useState } from 'react';

import { AvatarUploadModal } from '../components';
import { PhotoUploadButtonProps } from 'types';
import { CameraIcon } from 'components';

const AvatarUploadButton: React.FC<PhotoUploadButtonProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <button
        onClick={() => setIsModalOpen(true)}
        className='w-9 h-9 absolute bottom-0 right-3'
        data-testid={`${props._id}-avatar-upload-button`}
      >
        <CameraIcon />
      </button>
      {isModalOpen && (
        <AvatarUploadModal _id={props._id} handleClose={handleModalClose} />
      )}
    </Fragment>
  );
};

export default AvatarUploadButton;
