import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import MyContext from "../../Store/CartContext";

const MealItem = (props) => {
  const prize = `${props.prize.toFixed(2)}`;
  const cartCtx = useContext(MyContext);

  const addToCartHandler = (amount) =>
{
    cartCtx.addItem({
      id:props.id,
      Name:props.Name,
      amount: amount,
      price : props.price,
    })
};
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.Name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{prize} Rs/-</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
