import { FC } from "react";
import { shoppingListItemType } from "../interfaces";

const ShoppingListItem: FC<shoppingListItemType> = ({
  item,
  onDeleteItem,
  onActiveItem,
}) => {
  return (
    <div className={`${item.active ? "list-item active" : "list-item"}`}>
      <div className="item-info">
        <span>{item.size}</span>
        <p>{item.title}</p>
      </div>
      <div className="item-actions">
        <span className="check" onClick={onActiveItem}>
          &#10003;
        </span>
        <span className="times" onClick={onDeleteItem}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default ShoppingListItem;
