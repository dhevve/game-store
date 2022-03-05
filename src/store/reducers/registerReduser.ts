import {IUsers} from "../../types/Arr"

interface IState {
    users: IUsers[],
    map?: any
}

interface UsersAction {
    type: string,
    payload?: any
}

const intitalState: IState = {
    users: [
        {
            name: "admin",
            password: "admin"
        }
    ],
}

export const registerReducer = (state = intitalState, action: UsersAction): IState => {
    switch(action.type) {
        case "ADD_USER": 
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}