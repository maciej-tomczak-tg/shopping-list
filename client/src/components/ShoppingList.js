import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AddElement from "./AddElement";

function ShoppingList() {
    const [items, setItems] = useState([{"id": 1,"name": "smth"}, {"id": 2,"name": "smth2"}]);

    return (
        <div>
            <AddElement setItems={setItems}/>
            <ListGroup>
                {items.map(itm => {
                    return <ListGroupItem key={itm.id}>{itm.name}</ListGroupItem>
                })}
            </ListGroup>
        </div>
    );
}

export default ShoppingList;