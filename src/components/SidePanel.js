import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWidget } from "../features/widget/widgetSlice";
import { TrashFill } from "react-bootstrap-icons";

const SidePanel = () => {
    const categories = useSelector(state => state.widget.categories)
    const dispatch = useDispatch()

    const removeHandler = (selectCategory, widgetRemove) => {
        dispatch(removeWidget({ selectCategory, widgetRemove }))
    }

    return <>
        {
            categories.map((category) => {
                return <div key={category.id}>
                    <h5>{category.name}</h5>
                    {
                        category.widgets.map((widget) => {
                            return <div key={widget.id}>
                                <p className="m-0 px-3 pb-1 fw-semibold ">
                                    {widget.name} <TrashFill className="trash" size={16} onClick={() =>
                                        removeHandler(category.id, widget.id)} />
                                </p>
                            </div>
                        })
                    }
                </div>
            })
        }
    </>
}

export default SidePanel