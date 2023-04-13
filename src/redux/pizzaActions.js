 import { BUY_PIZZA } from "./pizzaActionTypes";

  const buyPizza=()=>{
    return{
        type:BUY_PIZZA,
        payload:'purchase a pizza'
    }
 }
 export {buyPizza};