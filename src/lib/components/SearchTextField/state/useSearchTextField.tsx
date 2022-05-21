import { useState } from "react";
import { ISearchTextFieldProps } from "../SearchTextField.interface";

export const useSearchTextField = ({
  value,
  items,
  onClickItem,
}: ISearchTextFieldProps) => {
  const [showFlag, setShowFlag] = useState<boolean>(false);

  const showItems = () => {
    setShowFlag(true);
  };

  const hideItems = () => setTimeout(() => setShowFlag(false), 150);

  const renderItems = () => {
    if (value === "") {
      return null;
    }

    return items
      .filter((item) => item.includes(value.trim()))
      .map((item, index) => (
        <div
          onClick={() => {
            onClickItem(item);
          }}
          key={index}
        >
          {item}
        </div>
      ));
  };

  return {
    functions: {
      hideItems,
      renderItems,
      showItems,
    },
    values: {
      showFlag,
    },
  };
};
