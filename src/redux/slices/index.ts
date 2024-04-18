import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IntialDataState {
    dummyValue: string,
    status: boolean
}

const initialState: IntialDataState = {
    dummyValue: "start value",
    status: false
}


export const DataSlices = createSlice({
    name: "data",
    initialState,
    reducers: {
        changeDummyValue: (state, action) => {
            state.dummyValue = action.payload.dummyValue
        },
        statusToogle: (state, action) => {
            state.status = action.payload.status
        }
    }
})

export const { changeDummyValue, statusToogle } = DataSlices.actions;

export default DataSlices.reducer;