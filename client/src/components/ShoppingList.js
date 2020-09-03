import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AddElement from "./AddElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

function ShoppingList() {
    const [items, setItems] = useState([]);

    function addItem(item) {
        setItems([...items, item]);
    }

    function removeItem(item) {
        setItems(items.filter(itm => item.id !== itm.id));
    }

    return (
        <div>
            <AddElement addItem={addItem}/>
            <ListGroup>
                {items.map(itm => {
                    return <ListGroupItem key={itm.id}>{itm.name}
                        <FontAwesomeIcon className="float-right" icon={faTrash} onClick={() => removeItem(itm)} />
                    </ListGroupItem>
                })}
            </ListGroup>
        </div>
    );
}

export default ShoppingList;
