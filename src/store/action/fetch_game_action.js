
export  const SET_GAMES = 'SET_GAMES';


export function setGames(games){
    return{
       type: SET_GAMES,
       payload:games

    }
}



export function fetchGame(){

    return dispatch => {
 
  // fetch('/api/games');
   fetch('/api/games',
   {
   method: 'post',
     }
 
 ) 
}

}
