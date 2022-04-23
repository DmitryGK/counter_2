import { counterValueReducer } from './counterValue-reducer';
import { combineReducers, createStore } from "redux";


export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    value: counterValueReducer
})

export const store = createStore(rootReducer)