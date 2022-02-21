import { useContext } from "react";

// Components
import MealItermForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

// Assets
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItermForm onAddToCart={addItemToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
