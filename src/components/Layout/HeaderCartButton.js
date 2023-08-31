import CartIcon from '../SVG/CartIcon';

import styles from './HeaderCartButton.module.css';

function HeaderCartButton() {
  const { button, icon, badge } = styles;
  return (
    <button className={button}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
