import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addWidget } from "../features/widget/widgetSlice";
import { Card } from "react-bootstrap";

const AddWidget = ({ selectCategory }) => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addWidget({ selectCategory, widgetAdd: { id: Date.now().toString(), name } }));
        setName('');
    }

    return <form onSubmit={handleSubmit} className="pb-3 px-1">
        <Card className="addWidget shadow">
            <Card.Body>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Widget Name"
                    required
                    className="form-control border-secondary"
                />
                <button type="submit" className="btn btn-outline-dark">Add Widget</button>
            </Card.Body>
        </Card>
    </form >
}

export default AddWidget