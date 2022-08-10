import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { capitalize, validateFileSize } from 'helpers';
import { AuthContext, DataContext } from 'context';
import { PhotoUploadModalProps } from 'types';
import { uploadIcon } from 'services';
import {
  ModalOverlay,
  ModalCard,
  ModalCardHeader,
  PhotoUploadForm,
  LoadingSpinner,
} from 'components';

const IconUploadModal: React.FC<PhotoUploadModalProps> = (props) => {
  const [newIconSource, setNewIconSource] = useState<
    string | ArrayBuffer | null
  >(null);
  const [largeFileError, setLargeFileError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { socialMedia, updateSocialMedia } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const socialMediaItem = socialMedia.find((item) => item._id === props._id);
  const iconUrl = `${process.env.REACT_APP_API_BASE_URL}/${socialMediaItem?.iconPath}`;

  const navigate = useNavigate();

  const handleSettingNewIcon = (iconSource: string | ArrayBuffer | null) => {
    setNewIconSource(iconSource);
  };

  const handleIconUpload = async (icon: File) => {
    if (!validateFileSize(icon)) {
      return setLargeFileError('ხატულა არ უნდა აღემატებოდეს 1MB-ს!');
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('icon', icon);
    try {
      const response = await uploadIcon(formData, props._id, token);
      setIsLoading(false);

      const { iconPath } = response.data;

      const updatedSocialMedia = socialMedia.map((item) => {
        if (item._id === props._id) {
          return { ...item, iconPath };
        }

        return item;
      });

      updateSocialMedia(updatedSocialMedia);
      props.handleClose();
    } catch (err: any) {
      setIsLoading(false);
      const { status } = err.response;

      if (status === 403) {
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
        <ModalCardHeader>შეცვალე სოციალური ბმულის ხატულა</ModalCardHeader>
        <h2 className='mt-14 text-center text-lg font-nino-mtavruli'>
          {capitalize(socialMediaItem?.name as string)}
        </h2>
        <div className='w-64 h-64 mt-10 mb-10 flex justify-center items-center border-[6.3px] border-social-media-icon-frame rounded-full drop-shadow-social-media-icon overflow-hidden'>
          {newIconSource ? (
            <img
              src={newIconSource as string | undefined}
              className='max-w-full max-h-full'
              alt='New social media icon'
            />
          ) : socialMediaItem?.iconPath ? (
            <img
              src={iconUrl}
              className='max-w-full max-h-full'
              alt='Social media icon'
            />
          ) : null}
        </div>
        <PhotoUploadForm
          inputName='icon'
          payloadError={largeFileError}
          handleSettingFile={handleSettingNewIcon}
          handleUpload={handleIconUpload}
        />
        {isLoading && (
          <LoadingSpinner className='fixed scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
        )}
      </ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default IconUploadModal;
