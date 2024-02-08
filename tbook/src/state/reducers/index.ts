import cellsReducer from "./cellsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    cells: cellsReducer
})

export default reducers;

// apply types to redux
export type RootState = ReturnType<typeof reducers>;