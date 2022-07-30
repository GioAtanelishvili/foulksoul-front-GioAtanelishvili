import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { DataContext, AuthContext } from 'context';
import { MemberAvatar } from '../components';
import { DataDeleteModalProps } from 'types';
import { findDestination } from 'helpers';
import { deleteMember } from 'services';
import {
  ModalOverlay,
  ModalCard,
  ModalCardHeader,
  LoadingSpinner,
  DataDeleteButton,
} from 'components';

const MemberDeleteModal: React.FC<DataDeleteModalProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const { members, updateMembers } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const member = members.find((member) => member._id === props._id);

  const navigate = useNavigate();
  const page = findDestination(props.index as number);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteMember(props._id, token);
      setIsLoading(false);

      const updatedMembers = members.filter(
        (member) => member._id !== props._id
      );
      updateMembers(updatedMembers);
      navigate(`../members?page=${page}`);
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
        <ModalCardHeader>წაშალე ჯგუფის წევრი</ModalCardHeader>
        <div>
          <MemberAvatar
            background={member?.color as string}
            avatarPath={member?.avatarPath as string}
            index={props.index as number}
            className='mt-8 shadow-modal-avatar'
          />
        </div>
        <p className='text-base font-nino-mtavruli'>
          {member?.name} ~ {member?.instrument}
        </p>
        <DataDeleteButton handleClick={handleDelete} />
        {isLoading && (
          <LoadingSpinner className='fixed scale-[2] left-[calc(50%-1rem)] top-[calc(50%-1rem)]' />
        )}
      </ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default MemberDeleteModal;
