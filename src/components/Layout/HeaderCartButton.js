import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../SVG/CartIcon';

import styles from './HeaderCartButton.module.css';

function HeaderCartButton({ onClick }) {
  const { button, icon, badge } = styles;
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <button className={button} onClick={onClick}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={badge}>{totalItems}</span>
    </button>
  );
}

export default HeaderCartButton;
