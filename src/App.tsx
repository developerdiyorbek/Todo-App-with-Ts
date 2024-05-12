import { useState } from "react";

import {
  Filter,
  Information,
  SearchPanel,
  ShoppingAddForm,
  ShoppingList,
} from "./components";

import { initialData } from "./components/constants/data";

import { listTypes } from "./interfaces";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState<listTypes[]>(initialData);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  // handle Delete Item
  const handleDeleteItem = (id: string) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  //handleActive item
  const handleActive = (id: string) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });
    setData(updatedData);
  };

  // handleSearch
  const handleSearch = (arr: listTypes[], term: string) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter(
      (item: listTypes) =>
        item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  // handle Filter
  const handleFilter = (arr: listTypes[], filter: string) => {
    switch (filter) {
      case "completed":
        return arr.filter((item) => item.active);
      case "big-size":
        return arr.filter((item) => item.size > 10);
      default:
        return arr;
    }
  };

  const allData = handleFilter(handleSearch(data, search), filter);

  return (
    <div className="app">
      <div className="card">
        <Information length={data.length} />
        <SearchPanel setSearch={setSearch} />
        <ShoppingAddForm setData={setData} data={data} />
        <ShoppingList
          data={allData}
          onDelete={handleDeleteItem}
          onActive={handleActive}
        />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
