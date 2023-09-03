import AddMeal from './AddMeal';

import styles from './MealItem.module.css';

function MealItem({ id, name, description, price: rawPrice }) {
  const price = `$${rawPrice.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <AddMeal id={id} />
      </div>
    </li>
  );
}

export default MealItem;
