import Item from "./Item";

const Items = ({items, setItems}) => {

    return (
        <>
            <ul>
                {items.map((item) => {
                    const {name,key} = item;
                    return <Item key={key} name={name} index={key} setItems={setItems} />
                })}
            </ul>
        </>
    );
};

export default Items;