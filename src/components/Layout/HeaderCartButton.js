import { useState, useEffect, useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../SVG/CartIcon';

import styles from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const { button, icon, badge, bump } = styles;
  const { items } = useContext(CartContext);
  useEffect(() => {
    setIsButtonHighlighted(true);
    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const totalItems = items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <button className={`${button} ${isButtonHighlighted ? bump : ''}`} onClick={onClick}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={badge}>{totalItems}</span>
    </button>
  );
}

export default HeaderCartButton;
