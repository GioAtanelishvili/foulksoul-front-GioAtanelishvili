import { Fragment, useState } from 'react';

import { PhotoUploadButtonProps } from 'types';
import { AvatarUploadModal } from './index';
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
        data-test-id={`${props.id}-avatar-upload-button`}
      >
        <CameraIcon />
      </button>
      {isModalOpen && (
        <AvatarUploadModal id={props.id} handleClose={handleModalClose} />
      )}
    </Fragment>
  );
};

export default AvatarUploadButton;
