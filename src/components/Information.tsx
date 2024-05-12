import { FC } from "react";
import { InformationProps } from "../interfaces";

const Information: FC<InformationProps> = ({ length }) => {
  return (
    <div className="information">
      <h1>Shopping List</h1>
      <span>{length}</span>
    </div>
  );
};

export default Information;
