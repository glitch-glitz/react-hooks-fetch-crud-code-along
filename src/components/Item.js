import React from "react";

function Item({ item, onToggleInCart, onDeleteItem }) {
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        onClick={() => onToggleInCart(item.id)}
        className={item.isInCart ? "remove" : "add"}
      >
        {item.isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
      <button onClick={() => onDeleteItem(item.id)} className="remove">
        Delete
      </button>
    </li>
  );
}

export default Item;
