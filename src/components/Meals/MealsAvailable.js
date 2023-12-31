import Card from '../UI/Card';
import MealItem from './MealItem';

import styles from './MealsAvailable.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function MealsAvailable() {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map(({ id, name, description, price }) => (
            <MealItem key={id} name={name} description={description} price={price} id={id} />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default MealsAvailable;
