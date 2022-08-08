import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { DataContext, AuthContext } from 'context';
import { PhotoUploadModalProps } from 'types';
import { uploadBandImage } from 'services';
import {
  LoadingSpinner,
  ModalCard,
  ModalCardHeader,
  ModalOverlay,
  PhotoUploadForm,
} from 'components';

const ImageUploadModal: React.FC<PhotoUploadModalProps> = (props) => {
  const [newImageSource, setNewImageSource] = useState<
    string | ArrayBuffer | null
  >(null);
  const [largeFileError, setLargeFileError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { bandDetails, updateBandDetails } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const { imagePath } = bandDetails;
  const imageUrl = `${process.env.REACT_APP_API_BASE_URL}/${imagePath}`;

  const navigate = useNavigate();

  const handleSettingNewImage = (imageSource: string | ArrayBuffer | null) => {
    setNewImageSource(imageSource);
  };

  const handleImageUpload = async (image: File) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await uploadBandImage(formData, token);
      setIsLoading(false);

      const { imagePath } = response.data;

      updateBandDetails({ ...bandDetails, imagePath });
      props.handleClose();
    } catch (err: any) {
      setIsLoading(false);
      const { status } = err.response;

      if (status === 413) {
        setLargeFileError('ფაილი არ უნდა აღემატებოდეს 1MB-ს!');
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
        <ModalCardHeader>შეცვალე ბენდის ფოტო</ModalCardHeader>
        <div className='w-64 h-64 mt-20 mb-10 flex justify-center items-center border-[6.3px] border-band-image-frame rounded-full drop-shadow-band-image overflow-hidden'>
          {newImageSource ? (
            <img
              src={newImageSource as string | undefined}
              className='max-w-full max-h-full'
              alt='New social media icon'
            />
          ) : imagePath ? (
            <img
              src={imageUrl}
              className='max-w-full max-h-full'
              alt='Social media icon'
            />
          ) : null}
        </div>
        <PhotoUploadForm
          inputName='image'
          payloadError={largeFileError}
          handleSettingFile={handleSettingNewImage}
          handleUpload={handleImageUpload}
        />
        {isLoading && (
          <LoadingSpinner className='fixed scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
        )}
      </ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default ImageUploadModal;
