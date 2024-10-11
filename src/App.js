import './App.css';
import {useState} from "react";
import Items from "./components/Items";

function App() {
  const [items,setItems] = useState([]);
  const [key,setKey] = useState(1);


  const add = () => {
    const name = "Item " + key;
    setKey(key + 1);  // Increment the key to ensure unique ids for each new item.
    items.push({name, key});
    setItems([...items]);
    // console.log(items)
  }
  return (
    <>
      <button  onClick={add}>Add Item</button>
      <Items items={items} setItems={setItems} />
    </>
  );
}

export default App;
