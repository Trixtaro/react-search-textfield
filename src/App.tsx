import { useState } from "react";
import "./App.css";
import SearchTextField from "./lib/components/SearchTextField/SearchTextfield";

function App() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="App">
      <SearchTextField
        items={["pepito", "bolita"]}
        onChange={(e) => setValue(e.target.value)}
        onClickItem={(selectedItem: string) => setValue(selectedItem)}
        name={"input"}
        value={value}
      />
    </div>
  );
}

export default App;
