
export function changeState(topicState){

   return dispatch => {
  
    dispatch({ type:"CHANGETOPICE",payload:topicState})

   }

}