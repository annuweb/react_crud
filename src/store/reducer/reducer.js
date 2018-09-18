
import { SET_GAME } from '../action/fetch_game_action';

const  INITIAL_STATE ={
  userName : "tester  userName",
  topic : "testing purposee topic .",
  topic_about:"Lorem ipsum dolor sit amet, consectetuer.  ut aliquip ex ea commodo consequat topic_about."

}


export default (states=INITIAL_STATE,action)=>{
 switch(action.type)
 {
     case 'CHANGETOPICE':
      return ({
          ...states,
          topic_about : action.payload
      })

     case 'SET_GAME':
     return({
         ...states,
         topic : action.payload
     })

      
     default:
      return states;


 }
}

