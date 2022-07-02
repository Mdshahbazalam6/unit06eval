import { MOVIEDATA } from "./action"


export const reducerhome = (state = [],{type,payload}) => {
  switch(type) {
    case MOVIEDATA:{
        return{
          state:payload
        }
    }
 
    default:{
        return state
    }
  }
}