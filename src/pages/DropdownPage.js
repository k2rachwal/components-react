import Dropdown from "../components/Dropdown";
import { useState } from "react";
import ButtonPage from "./ButtonPage";


function DropdownPage() {
const [selection, setSelection] = useState(null);
const handleSelect = (option) => {
  setSelection(option);
  console.log(option);
}

const options = [
  {label: 'Red', value: 'red'},
  {label: 'Blue', value: 'blue'},
  {label: 'Green', value: 'green'},
]


return <><Dropdown options={options} value={selection} onChange={handleSelect}/>
</>;
}

export default DropdownPage;