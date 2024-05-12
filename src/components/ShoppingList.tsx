import { FC } from "react";
import { listTypes, shoppingListType } from "../interfaces";
import ShoppingListItem from "./shopping-list-item";

const ShoppingList: FC<shoppingListType> = ({ data, onDelete, onActive }) => {
  return (
    <div className="shopping-list">
      {data.length ? (
        data.map((item: listTypes) => (
          <ShoppingListItem
            item={item}
            key={item.id}
            onDeleteItem={() => onDelete(item.id)}
            onActiveItem={() => onActive(item.id)}
          />
        ))
      ) : (
        <div className="noInformation">
          <p>No data</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
