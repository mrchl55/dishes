import ActionType from "../action-types";
import {FormData} from "../reducers/dishesReducer";

interface SearchDishesAction{
    type: ActionType.SEARCH_DISHES
}
interface SearchDishesSuccessAction{
    type: ActionType.SEARCH_DISHES_SUCCESS,
    payload: FormData
}
interface SearchDishesErrorAction{
    type: ActionType.SEARCH_DISHES_ERROR,
    payload: string
}

 type Action = SearchDishesAction | SearchDishesSuccessAction | SearchDishesErrorAction;

export default Action;