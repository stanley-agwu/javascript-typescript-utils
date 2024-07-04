import ReactModal, { Props } from 'react-modal';

import './Modal.module.scss';

export interface ModalProps extends Props {
  children: any;
}

export const Modal = (props: ModalProps) => (
  <ReactModal
    {...props}
    closeTimeoutMS={props.closeTimeoutMS || 500}
    overlayClassName={`${props.overlayClassName || ''} ReactModal__Overlay`}
    className={`${props.className || ''} ReactModal__Content`}
    style={props.style}
  />
);
