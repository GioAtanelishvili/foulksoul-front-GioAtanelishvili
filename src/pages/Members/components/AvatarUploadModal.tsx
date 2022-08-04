import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { DataContext, AuthContext } from 'context';
import { PhotoUploadModalProps } from 'types';
import { PhotoUploadForm } from 'components';
import { uploadAvatar } from 'services';
import { MemberAvatar } from './index';

import {
  ModalOverlay,
  ModalCard,
  ModalCardHeader,
  LoadingSpinner,
} from 'components';

const AvatarUploadModal: React.FC<PhotoUploadModalProps> = (props) => {
  const [newAvatarSource, setNewAvatarSource] = useState<
    string | ArrayBuffer | null
  >(null);
  const [largeFileError, setLargeFileError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { members, updateMembers } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const member = members.find((member) => member._id === props._id);

  const navigate = useNavigate();

  const handleSettingNewAvatar = (
    avatarSource: string | ArrayBuffer | null
  ) => {
    setNewAvatarSource(avatarSource);
  };

  const handleAvatarUpload = async (avatar: File) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('avatar', avatar);
    try {
      const response = await uploadAvatar(formData, props._id, token);
      setIsLoading(false);

      const { avatarPath } = response.data;

      const updatedMembers = members.map((member) => {
        if (member._id === props._id) {
          return { ...member, avatarPath };
        }

        return member;
      });

      updateMembers(updatedMembers);
      props.handleClose();
    } catch (err: any) {
      setIsLoading(false);
      const { status } = err.response;

      if (status === 413) {
        setLargeFileError('ფაილი ზედმეტად დიდია!');
      } else if (status === 403) {
        navigate('/403');
      } else if (status === 500) {
        navigate('/500');
      }
    }
  };

  return createPortal(
    <Fragment>
      <ModalOverlay handleClick={props.handleClose} />
      <ModalCard handleClose={props.handleClose}>
        <ModalCardHeader>შეცვალე ჯგუფის წევრის ავატარი</ModalCardHeader>
        <div className='w-56 h-56 mt-20 mb-10 flex justify-center items-center'>
          {newAvatarSource ? (
            <MemberAvatar
              background={member?.color as string}
              source={newAvatarSource as string | undefined}
              avatarPath=''
              className='shadow-modal-avatar'
            />
          ) : (
            <MemberAvatar
              background={member?.color as string}
              avatarPath={member?.avatarPath as string}
              className='shadow-modal-avatar'
            />
          )}
        </div>
        <PhotoUploadForm
          inputName='avatar'
          payloadError={largeFileError}
          handleSettingFile={handleSettingNewAvatar}
          handleUpload={handleAvatarUpload}
        />
        {isLoading && (
          <LoadingSpinner className='fixed scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
        )}
      </ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default AvatarUploadModal;
