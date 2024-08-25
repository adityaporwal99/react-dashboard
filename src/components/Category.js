import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget } from "../features/widget/widgetSlice";
import { Card, Col, Row } from "react-bootstrap";
import { XCircleFill } from "react-bootstrap-icons";
import AddWidget from "./AddWidget";

const Category = ({ category }) => {
    const searchQuery = useSelector(state => state.widget.searchQuery)
    const dispatch = useDispatch()

    const filteredWidgets = category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const removeHandler = (selectCategory, widgetRemove) => {
        dispatch(removeWidget({ selectCategory, widgetRemove }))
    }

    return <div className="px-3">
        <h3>{category.name}</h3>
        <Row className="g-0">
            {
                filteredWidgets.map((widget) => {
                    return <Col lg={3} key={widget.id} className="position-relative pb-3 px-1">
                        <XCircleFill size={22} className="cross end-0 translate-middle-y rounded-circle" onClick={() =>
                            removeHandler(category.id, widget.id)} />
                        <Card key={widget.id} className="widget shadow">
                            <Card.Body>
                                <h4>{widget.name}</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                })
            }
            <Col lg={3}>
                <AddWidget selectCategory={category.id} />
            </Col>
        </Row>
    </div>
}

export default Category