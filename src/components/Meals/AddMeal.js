import Input from '../UI/Input';

import styles from './AddMeal.module.css';

function AddMeal({ id }) {
  return (
    <form className={styles.form}>
      <Input label={'Amount'} input={{ id, type: 'number', max: 5, min: 1, defaultValue: 1, step: 1 }} />
      <button>+ Add</button>
    </form>
  );
}

export default AddMeal;
