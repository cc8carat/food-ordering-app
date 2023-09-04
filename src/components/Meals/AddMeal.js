import { useRef, useState } from 'react';
import Input from '../UI/Input';

import styles from './AddMeal.module.css';

function AddMeal({ id, onAddToCart }) {
  const [isAmountInputValid, setIsAmountInputValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;
    if (amount.trim().length === 0 || amount < 1 || amount > 5) {
      setIsAmountInputValid(false);
    } else {
      onAddToCart(amount);
      setIsAmountInputValid(true);
    }
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label={'Amount'} input={{ id, type: 'number', max: 5, min: 1, defaultValue: 1, step: 1 }} ref={amountInputRef} />
      <button>+ Add</button>
      {!isAmountInputValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default AddMeal;
