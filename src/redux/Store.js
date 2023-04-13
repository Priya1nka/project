
import { createStore} from 'redux'
 
import { combineReducers } from 'redux';
import { pizzaReducer } from "./pizzaReducer";



let rootReducer =combineReducers({
    pizza:pizzaReducer
})

let store =createStore(rootReducer);
export {store}