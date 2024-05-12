import { v4 as uuidv4 } from "uuid";

import React, { Dispatch, FC, SetStateAction } from "react";
import { listTypes } from "../interfaces";
import { toast } from "react-toastify";

interface ShoppingAddFormTypes {
  data: listTypes[];
  setData: Dispatch<SetStateAction<listTypes[]>>;
}

const ShoppingAddForm: FC<ShoppingAddFormTypes> = ({ setData, data }) => {
  //handleSubmit
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: listTypes = {
      id: uuidv4(),
      title: (e.currentTarget.elements.namedItem("title") as HTMLInputElement)
        .value,
      size: +(e.currentTarget.elements.namedItem("number") as HTMLInputElement)
        .value,
      active: false,
    };
    if (formData.title === "") {
      toast.warning("Write something!");
    } else if (formData.size < 0 || formData.size === 0) {
      toast.warning("Enter right size!");
    } else {
      setData([...data, formData]);
      toast.success("Added Successfully!");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="title"
        placeholder="title..."
      />
      <input type="number" name="number" className="number" placeholder="14" />
      <button>Add</button>
    </form>
  );
};

export default ShoppingAddForm;
