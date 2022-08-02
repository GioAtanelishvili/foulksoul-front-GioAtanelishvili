import { Fragment, useState } from 'react';

import { IconUploadModal } from '../components';
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
        className='w-5 h-5 absolute bottom-2 -right-1'
        data-testid={`${props._id}-icon-upload-button`}
      >
        <CameraIcon />
      </button>
      {isModalOpen && (
        <IconUploadModal _id={props._id} handleClose={handleModalClose} />
      )}
    </Fragment>
  );
};

export default AvatarUploadButton;
