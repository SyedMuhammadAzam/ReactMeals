import { useState } from "react";
import Cart from "./Cart/Cart.js";

import Header from "./Layout/Header";
import Meals from './Meals/Meals.js'
import ContextProvider from "./Store/ContextProvider.js";

function App() {

  const[opencart , setOpenCart] = useState(false)

  const CartShownHandler =  () => {
      setOpenCart(true);
  }
  const HideCartHandler = () => {
    setOpenCart(false);
  }


  return (
    <ContextProvider>
      {opencart && <Cart onClose={HideCartHandler}/>}
      <Header onClick={CartShownHandler} />
      <Meals/>
      
    </ContextProvider>
    
  );
}

export default App;
