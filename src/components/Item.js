import {useEffect, useRef, useState} from "react";

const Item = ({name, setItems, index}) => {
    const [modifyOn, setModifyOn] = useState(false);
    const [text, setText] = useState(name || "");
    const refInput = useRef()
    function removeItem(){
        setItems((items) =>{
            items = items.filter((item)=>{
                return index !== item.key;
            });
            // console.log(items)
            return [...items];
        })
    }
    function modify(){
        setModifyOn(!modifyOn)
    }
    function handleItemChange(e){
        // console.log(e.target.value);
        setText(e.target.value)
    }

    function blur(e){
        setModifyOn(false)
        setItems((items) =>{
            items = items.map((item)=>{
                if (index === item.key) item.name = e.target.value;
                return item;
            });
            return [...items];
        })
    }

    useEffect(() => {
        if (refInput.current) refInput.current.focus();
    }, []);
    return (
        <li style={{marginTop: "5px"}}>
            {modifyOn ?
                <input ref={refInput} type="text" onChange={handleItemChange} value={text} onBlur={blur} /> : <span>{text}</span>
            }
            &nbsp;
            <button onClick={modify}>Edit</button>
            &nbsp;
            <button onClick={removeItem}>Remove</button>
        </li>
    );
};

export default Item;