import { combineReducers } from "redux";
import { gameReducer } from "./gameReduser";

export const rootReducer = combineReducers({
    basket: gameReducer
})

export type RootState = ReturnType<typeof rootReducer>