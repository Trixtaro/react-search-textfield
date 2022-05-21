import { FC } from "react";
import { ISearchTextFieldProps } from "./SearchTextField.interface";
import { useSearchTextField } from "./state/useSearchTextField";

const SearchTextField: FC<ISearchTextFieldProps> = (
  props: ISearchTextFieldProps
) => {
  const { onChange, value, name } = props;
  const { functions, values } = useSearchTextField(props);
  const { renderItems, showItems, hideItems } = functions;
  const { showFlag } = values;

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <input
        style={{}}
        type="text"
        onChange={onChange}
        name={name}
        value={value}
        onFocus={showItems}
        onBlur={hideItems}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "100%",
        }}
      >
        {showFlag && renderItems()}
      </div>
    </div>
  );
};

export default SearchTextField;
