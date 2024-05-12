import { Dispatch, FC, SetStateAction } from "react";

interface FilterType {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const Filter: FC<FilterType> = ({ filter, setFilter }) => {
  const buttons = [
    {
      id: 1,
      value: "all",
      label: "All products",
    },
    {
      id: 2,
      value: "completed",
      label: "Completed",
    },
    {
      id: 3,
      value: "big-size",
      label: "Big size",
    },
  ];

  return (
    <div className="filter">
      <div className="btns">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`${filter === button.value && "active"}`}
            onClick={() => setFilter(button.value)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
