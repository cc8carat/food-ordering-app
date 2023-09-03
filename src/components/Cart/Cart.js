import Modal from '../UI/Modal';

import styles from './Cart.module.css';

function Cart({ onClose }) {
  const cartItems = [{ name: 'Sushi' }];
  return (
    <Modal onClose={onClose}>
      <ul className={styles['cart-items']}>
        {cartItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total</span>
        <span>35</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
