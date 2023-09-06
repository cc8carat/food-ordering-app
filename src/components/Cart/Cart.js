import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import styles from './Cart.module.css';
import CartItem from './CartItem';

function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const isCartValid = cartItems.length > 1;

  const addItemHandler = () => {};
  const removeItemHandler = (id) => {
    console.log(id);
  };
  return (
    <Modal onClose={onClose}>
      <ul className={styles['cart-items']}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {isCartValid && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
