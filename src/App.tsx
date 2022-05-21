import { useState } from "react";
import "./App.css";
import SearchTextField from "./lib/components/SearchTextField/SearchTextfield";

function App() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="App">
      <SearchTextField
        items={["Item 1", "Item 2", "Item 3"]}
        onChange={(e) => setValue(e.target.value)}
        onClickItem={(selectedItem: string) => setValue(selectedItem)}
        name={"input"}
        value={value}
        inputStyles={{ width: "200px" }}
        itemStyles={{ textAlign: "left" }}
      />
    </div>
  );
}

export default App;
