import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalOverlay, ModalCard, ModalCardHeader } from 'components';
import { MemberDetailsModalProps } from 'types';
import { MemberAvatar } from '../components';
import { DataContext } from 'context';

const MemberDetailsModal: React.FC<MemberDetailsModalProps> = (props) => {
  const { members } = useContext(DataContext);

  const member = members.find((member) => member._id === props._id);
  console.log(props._id);

  return createPortal(
    <Fragment>
      <ModalOverlay handleClick={props.handleClose} />
      <ModalCard handleClose={props.handleClose}>
        <ModalCardHeader>
          {member?.name} ~ {member?.instrument}
        </ModalCardHeader>
        <div
          id='member-details-modal-div'
          className='w-full h-120 mb-12 pb-3 px-14 flex flex-col items-center overflow-y-auto'
        >
          <div data-testid='avatar'>
            <MemberAvatar
              background={member?.color as string}
              avatarPath={member?.avatarPath as string}
              index={props.index}
              className='mt-8 shadow-modal-avatar'
            />
          </div>
          <h2 className='text-sm font-nino-mtavruli' data-testid='orbit-radius'>
            ორბიტალური დაშორება:{' '}
            <span className='font-semibold'>{member?.orbitRadius}</span>
          </h2>
          <article
            className='w-full mt-3 text-base text-justify font-arial'
            data-testid='biography'
          >
            {member?.biography}
          </article>
        </div>
      </ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default MemberDetailsModal;
