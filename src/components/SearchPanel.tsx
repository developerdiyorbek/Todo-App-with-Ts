import { Dispatch, FC, SetStateAction } from "react";

interface SearchPanelType {
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchPanel: FC<SearchPanelType> = ({ setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchPanel;
