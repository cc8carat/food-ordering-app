import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import AddMeal from './AddMeal';

import styles from './MealItem.module.css';

function MealItem({ id, name, description, price: rawPrice }) {
  const cartCtx = useContext(CartContext);
  const price = `$${rawPrice.toFixed(2)}`;
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, amount: +amount, price: rawPrice });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <AddMeal id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
