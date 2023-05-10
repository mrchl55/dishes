import ActionType from "../action-types";
import Action from "../actions";

export interface FormData {
    id?: number,
    name?: string,
    preparation_time?: string,
    type?: string,
    no_of_slices?: number,
    diameter?: number,
    spiciness_scale?: number,
    slices_of_bread?: number,
}

interface DishesState {
    loading: boolean;
    error: string | null;
    data: FormData;
}

const initialState = {
    loading: false,
    error: null,
    data: {id: 0, name: '', preparation_time: '', type: ''},
}

const reducer = (state: DishesState = initialState, action: Action): DishesState => {
    switch (action.type) {
        case ActionType.SEARCH_DISHES:
            return {
                loading: true,
                error: null,
                data: {}
            }
        case ActionType.SEARCH_DISHES_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload
            }
        case ActionType.SEARCH_DISHES_ERROR:

            return {
                loading: false,
                error: action.payload,
                data: {},
            }
        default:
            return state
    }
}

export default reducer