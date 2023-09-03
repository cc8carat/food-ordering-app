import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.modal}>{children}</div>
    </>,
    document.getElementById('overlay')
  );
}

export default Modal;
