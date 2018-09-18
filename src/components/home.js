import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchGame} from '../store/action/fetch_game_action';
/*import {changeState} from '../store/action/action'
import GameCard from './GameCard';*/


class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      itemName:[]
    }
    }

   componentDidMount(){
    this.props.fetchGame();
    /*
   // this.props.fetchGame();
   fetch('/api/games',
    {
    method: 'post',
    body: {
     "page_name": "home"  
    }
     }
  
  )
  .then(res => res.json())
  .then(
    (result) =>{
      this.setState({
        itemName:result.games,
      })
      

    },(error) => {
      this.setState({
        itemName:' Error in database  bbbbbbbbbbbbbbbbbbbbbbbbbbb',
      });
    }
     
  );

    const gameList  =(
      <div className="testing">
      { // itemName.map(game => <GameCard game={game} key={game._id} /> ) }

      </div>
    )
    */
   }
    render(){
      const { itemName} = this.state;
    return (
      <div>
      <h1>Home testing </h1>
      <ul>
        {
         itemName.map(function(movie){
            return <li>{movie.id} - {movie.title}</li>;
          })
        }
        </ul>
       
      <br/>
      {this.props.userName}
      <br/>
      {this.props.topiceCheck}
      </div>

    )

    }


}


function mapStateToProps(state){

  return ({
    userName:state.rootReducer.userName ,
    topiceCheck:state.rootReducer.topic 
  })
}
/*
function mapDispatchToProps(dispatch){

  return ({
    changeStateToReducer: (topicCheckState)=>{
      dispatch(changeState(topicCheckState))
     }    
  })
}
*/

 




//export default connect(mapStateToProps,mapDispatchToProps)(Home);
export default connect(mapStateToProps,{fetchGame})(Home);