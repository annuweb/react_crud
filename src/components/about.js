import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeState} from '../store/action/action'


class About extends Component{

    constructor(props){
    super(props);
    this.state = {
      topicState:''

    }


    }

    _changeState(){
    //console.log('You are ready to change State!');
      this.props.changeStateToReducer(this.state.topicState);

    }
    _dynamicStateChange(evt){
    // console.log('dynamic value change message');
         this.setState({
        topicState:evt.target.value  
       })
     //this.props.changeStateToReducer();


    }
   render(){
    return(
        <div className="row">
           <div className="main_about">
               <div className="col-md-12">
                    <h1>
                    About us
                    </h1>
                    {this.props.topiceCheck}
                
                    <br/>
                    <input type="text" name="" value={this.state.topicState} onChange={this._dynamicStateChange.bind(this)}/>
                    <button onClick={this._changeState.bind(this)}>Change state </button>
                </div>    

            </div>    
     </div>
    )
   }
}

function mapStateToProps(state){
 return({
 topiceCheck: state.rootReducer.topic_about

 })
}

function mapDispatchToProps(dispatch){
    return({
    changeStateToReducer: (topicState)=>{
        dispatch(changeState(topicState))
       }       
    })

}


export default connect(mapStateToProps,mapDispatchToProps)(About);