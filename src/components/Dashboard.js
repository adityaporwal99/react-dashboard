import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchWidget } from "../features/widget/widgetSlice";
import { Col, Row } from "react-bootstrap";
import Category from "./Category";

const Dashboard = () => {
    const categories = useSelector(state => state.widget.categories)
    const dispatch = useDispatch()

    const searchHandler = e => {
        dispatch(searchWidget(e.target.value))
    }

    return <div>
        <Row className="justify-content-center">
            <Col lg={4}>
                <input
                    type="text"
                    placeholder="Search Widgets"
                    onChange={searchHandler}
                    className="form-control text-center rounded-pill border-secondary"
                />
            </Col>
        </Row>

        {
            categories.map(category => {
                return <Category key={category.id} category={category} />
            })
        }
    </div>
}

export default Dashboard

