import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { v4 as uuid } from "uuid";

function AddElement(props) {
    const newElementRef = useRef();

    function handleAddElement(e) {
        const newValue = newElementRef.current.value;
        if (!newValue) {
            return;
        }

        const newItem = {"id": uuid(), "name": newValue};

        props.addItem(newItem);
        newElementRef.current.value = '';
    }

    return (
        <Form>
            <Form.Group controlId="newItem">
                <Form.Label>New Item</Form.Label>
                <Form.Control type="text" placeholder="new Item" ref={newElementRef} />
            </Form.Group>
            <Button onClick={handleAddElement}>Add new item</Button>
        </Form>
    )
}

export default AddElement;