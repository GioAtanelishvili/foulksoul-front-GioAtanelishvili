import { createPortal } from 'react-dom';
import { Fragment } from 'react';

import { ModalOverlay, ModalCard } from 'components';
import { DataDeleteModalProps } from 'types';

const SocialMediaDeleteModal: React.FC<DataDeleteModalProps> = (props) => {
  return createPortal(
    <Fragment>
      <ModalOverlay handleClick={props.handleClose} />
      <ModalCard handleClose={props.handleClose}>as</ModalCard>
    </Fragment>,
    document.getElementById('modal') as Element
  );
};

export default SocialMediaDeleteModal;
