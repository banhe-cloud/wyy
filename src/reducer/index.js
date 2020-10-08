import { createContext } from 'react';
import { combineReducers } from 'redux';
import loginReducer from "./loginReducer"
import songReducer from "./songReducer"
export let Reducer = combineReducers({//合并reducer
    login: loginReducer,
    song: songReducer,
})



export const Context = createContext();
