import {combineReducers} from "redux";
import dishesReducer from "./dishesReducer";


const reducers = combineReducers({
    dishes: dishesReducer,
})


export default reducers

export type RootState = ReturnType<typeof reducers>