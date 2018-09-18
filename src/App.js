import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/scss/bootstrap.css';

//import './components/scss/bootsnav.css';
/*import './components/scss/font-awesome.min.css'; */
import './components/scss/responsive.css';
import './components/scss/style.css';
import { Provider } from 'react-redux'
import store from './store'

/*Import all component here */

import Navigation_menu from './components/navigation_menu';
/*import Home from './components/home';
import About from './components/about';*/

/*End Import all component here */

class App extends Component {
  render() {
    return (
      <div className="culmn">
        <Provider store={store} >
        <Navigation_menu/>
        </Provider>
      </div>
    );
  }
}


export default App;
