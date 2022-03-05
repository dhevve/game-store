import { combineReducers } from "redux";
import { gameReducer } from "./gameReduser";
import { authReducer } from "./authReduser";
import { registerReducer} from "./registerReduser"

export const rootReducer = combineReducers({
    basket: gameReducer,
    auth: authReducer,
    register: registerReducer
})

export type RootState = ReturnType<typeof rootReducer>