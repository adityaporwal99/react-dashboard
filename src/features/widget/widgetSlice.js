import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        { id: 'c1', name: 'Category 1', widgets: [] },
        { id: 'c2', name: 'Category 2', widgets: [] },
        { id: 'c3', name: 'Category 3', widgets: [] }
    ],
    searchQuery: ''
}

const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { selectCategory, widgetAdd } = action.payload
            const updateWidget = state.categories.find(cat => cat.id === selectCategory)
            if (updateWidget) {
                updateWidget.widgets.push(widgetAdd)
            }
        },
        removeWidget: (state, action) => {
            const { selectCategory, widgetRemove } = action.payload;
            const category = state.categories.find(cat => cat.id === selectCategory);
            if (category) {
                category.widgets = category.widgets.filter(widget => widget.id !== widgetRemove);
            }
        },
        searchWidget: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
})

export const { addWidget, removeWidget, searchWidget } = widgetSlice.actions
export default widgetSlice.reducer