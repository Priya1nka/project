/* import { SAY_GOOD_AFTERNOON, SAY_GOOD_EVENING, SAY_GOOD_MORNING } from "./wish-message.action-type";

export const messageKey='messageCard';


let initialState={
    message:'Hello'
}

let messageReducer =(state=initialState,action)=>{

     let {type,payload}=action

    switch(type){
        case SAY_GOOD_MORNING:
            return{
                message:'Good Morning'
            };
        case SAY_GOOD_AFTERNOON:
            return{     
                message:'Good Afternoon'
                };
        case SAY_GOOD_EVENING:
            return{         
                message:'Good Evening'
                    }

    }
}

export {messageReducer}; */