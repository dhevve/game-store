
interface IState {
    auth: boolean
}

interface BasketAction {
    type: string,
    payload: boolean
}

const intitalState: IState = {
    auth: false,
}

export const authReducer = (state = intitalState, action: BasketAction): IState => {
    switch(action.type) {
        case "LOGIN": 
            return {...state, auth: true}
        case "LOGOUT": 
            return {...state, auth: false}
        default:
            return state
    }
}