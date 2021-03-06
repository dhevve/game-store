import {IArr} from "../../types/Arr"

interface IState {
    basket: IArr[],
    map?: any
}

interface BasketAction {
    type: string,
    payload?: any
}

const intitalState: IState = {
    basket: [],
}

export const gameReducer = (state = intitalState, action: BasketAction): IState => {
    switch(action.type) {
        case "ADD_GAME": 
            return {...state, basket: [...state.basket, action.payload]}
        case "REMOVE_GAME": 
            return {
                ...state,
                basket: state.basket.filter((b) => b.id !== action.payload),
              };
        default:
            return state
    }
}