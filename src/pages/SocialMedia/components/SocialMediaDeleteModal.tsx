import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { capitalize } from 'helpers';
import { DataContext, AuthContext } from 'context';
import { deleteSocialMedia } from 'services';
import { DataDeleteModalProps } from 'types';
import {
  ModalOverlay,
  ModalCard,
  ModalCardHeader,
  LoadingSpinner,
  DataDeleteButton,
} from 'components';

const SocialMediaDeleteModal: React.FC<DataDeleteModalProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { socialMedia, updateSocialMedia } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const item = socialMedia.find((item) => item._id === props.id);
  const iconUrl = `${process.env.REACT_APP_API_BASE_URL}/${item?.iconPath}`;

  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteSocialMedia(props.id, token);
      setIsLoading(false);

      const updatedSocialMedia = socialMedia.filter(
        (item) => item._id !== props.id
      );
      updateSocialMedia(updatedSocialMedia);
      navigate(`/band/social-media`);
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
        <ModalCardHeader>წაშალე სოციალური ბმული</ModalCardHeader>
        <h2 className='mt-14 text-center text-lg font-nino-mtavruli'>
          {capitalize(item?.name as string)}
        </h2>
        <figure className='w-64 h-64 mt-10 mb-10 flex justify-center items-center border-[6.3px] border-social-media-icon-frame rounded-full drop-shadow-social-media-icon overflow-hidden'>
          {item?.iconPath ? (
            <img
              src={iconUrl}
              className='max-w-full max-h-full'
              alt='Social media icon'
            />
          ) : null}
        </figure>
        <DataDeleteButton handleClick={handleDelete} />
        {isLoading && (
          <LoadingSpinner className='fixed scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
        )}
      </ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default SocialMediaDeleteModal;
