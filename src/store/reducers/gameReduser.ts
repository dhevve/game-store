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
    basket: [
        {id: 123123, name: "the witcher 2", price: 30}
    ],
}

export const gameReducer = (state = intitalState, action: BasketAction): IState => {
    switch(action.type) {
        case "ADD_GAME": 
            return {...state, basket: [...state.basket, action.payload]}
        default:
            return state
    }
}