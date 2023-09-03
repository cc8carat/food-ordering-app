import HeaderCartButton from './HeaderCartButton';

import headerBackgroundImg from '../../assets/meals.jpg';
import styles from './Header.module.css';

function Header({ onShowCart }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals Dev</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={headerBackgroundImg} alt='A table full of food!' />
      </div>
    </>
  );
}

export default Header;
