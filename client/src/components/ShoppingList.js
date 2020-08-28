import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AddElement from "./AddElement";

function ShoppingList() {
    const [items, setItems] = useState([]);

    function addItem(element) {
        setItems([...items, element]);
    }

    return (
        <div>
            <AddElement addItem={addItem}/>
            <ListGroup>
                {items.map(itm => {
                    return <ListGroupItem key={itm.id}>{itm.name}</ListGroupItem>
                })}
            </ListGroup>
        </div>
    );
}

export default ShoppingList;