import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../logo.svg';



/*Import all component here */
import Home from './home';
import About from './about';

/*End Import all component here */

class Navigation_menu extends Component{

 render(){
   return (
      
    <Router>
      <div>
            <Link to="/">Home</Link>
            <br/>
              <Link  to="/about">About</Link>
                <br/>
                <Route exact path="/" component={Home} />  
               <Route  path="/about" component={About} /> 
      </div> 
        
    </Router> 
      
   )

 }

}

export default Navigation_menu;