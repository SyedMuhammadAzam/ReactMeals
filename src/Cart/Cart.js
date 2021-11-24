// import React from 'react'
// import Modal from '../UI/Modal';
// import classes from './Cart.module.css'


// const Cart = () => {
    
//     const CartItem = <ul className={classes['cart-items']} >{[
//        { id:'m2',
//     Name:'Decaf', 
//     description : 'Decaf coffee is brewed with these decaffeinated beans.' ,
//     prize : 550 },  ].map((item) => <li>{item.Name}</li> 
    
//     )} </ul>;

//     return(
    

//     <Modal>
//             <div>
//                 {CartItem}
//            <div className={classes.total}> 
//            <span >Total</span>
//             <span>330</span> </div>
//             <div className = {classes.actions}>
//                 <button className={classes['button--alt']}>Close</button>
//                 <button className={classes.button}>Order</button>
//             </div>
//             </div>
//     </Modal>
//     )
// }
// export default Cart;
 
import React , {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import MyContext from '../Store/CartContext';


const Cart = (props) => {
  const cartCtx = useContext(MyContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;