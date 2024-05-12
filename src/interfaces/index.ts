export interface listTypes {
  id: string;
  title: string;
  size: number;
  active: boolean;
}

export interface InformationProps {
  length: number;
}

export interface shoppingListItemType {
  item: listTypes;
  onDeleteItem: () => void;
  onActiveItem: () => void;
}

export interface shoppingListType {
  data: listTypes[];
  onDelete: (id: string) => void;
  onActive: (id: string) => void;
}
