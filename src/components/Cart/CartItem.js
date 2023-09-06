import styles from './CartItem.module.css';

function CartItem({ name, price, amount, onAdd, onRemove }) {
  const formatedPrice = price.toFixed(2);
  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formatedPrice}</span>
          <span className={styles.amount}>{amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
