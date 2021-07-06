import { Fragment } from "react";

// Components
import CartButton from '../UI/CartButton';

// Assets
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>React meals</h1>
      <CartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='meals'/>
    </div>
  </Fragment>;
};

export default Header;
