import { Fragment, useState } from 'react';

import { PhotoUploadButtonProps } from 'types';
import { ImageUploadModal } from './index';
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
        className='w-13 h-13 absolute bottom-0 right-3 rounded-full shadow-avatar-upload-button'
        data-test-id='image-upload-button'
      >
        <CameraIcon />
      </button>
      {isModalOpen && (
        <ImageUploadModal _id={props._id} handleClose={handleModalClose} />
      )}
    </Fragment>
  );
};

export default AvatarUploadButton;
