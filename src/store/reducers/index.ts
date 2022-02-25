import { combineReducers } from "redux";
import { gameReducer } from "./gameReduser";
import { authReducer } from "./authReduser";

export const rootReducer = combineReducers({
    basket: gameReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>