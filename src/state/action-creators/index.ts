import axios from "axios";
import {Dispatch} from "redux";
import ActionType from "../action-types";
import Action from "../actions";


interface FormData {
    name: string,
    preparation_time: string,
    type: string,
    no_of_slices?: number,
    diameter?: number,
    spiciness_scale?: number,
    slices_of_bread?: number,
}

export const searchDishes = (formData: FormData) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_DISHES,
        });
        try {
            const {data} = await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
                formData)
            dispatch({
                type: ActionType.SEARCH_DISHES_SUCCESS,
                payload: data,
            })
        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_DISHES_ERROR,
                payload: err.message
            })
        }
    }
}