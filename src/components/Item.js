import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  function handleInCart(){
    setInCart(inCart => !inCart);
  }
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart": "Add to Cart";
  const buttonClass = inCart ? "remove" : "add"
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleInCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
