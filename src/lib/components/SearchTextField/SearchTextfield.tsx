import { FC, useRef } from "react";
import { ISearchTextFieldProps } from "./SearchTextField.interface";
import { useSearchTextField } from "./state/useSearchTextField";

const SearchTextField: FC<ISearchTextFieldProps> = (
  props: ISearchTextFieldProps
) => {
  const { functions, values } = useSearchTextField(props);
  const { renderItems, showItems, hideItems } = functions;
  const { showFlag } = values;
  const ref = useRef(null);

  console.log((ref as any)?.current?.style);

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <input
        ref={ref}
        style={{ width: "150px", ...props.inputStyles }}
        type="text"
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        onFocus={showItems}
        onBlur={hideItems}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "100%",
          boxShadow: "revert",
          width: (ref as any)?.current?.style.width || "auto",
        }}
      >
        {showFlag && renderItems()}
      </div>
    </div>
  );
};

export default SearchTextField;
