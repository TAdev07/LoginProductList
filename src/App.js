import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';

import routes from './routes';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
                token : ''
              }
        }

    componentWillMount(){
        var token = localStorage.getItem('token');
        if(token === null) {
            this.setState({
                token : token
            })
        }
    }
  render() {
    var {token} = this.state;
    return (
      <Router>
        <div className="wrapper">

            <Menu />
            <Switch> 
                { this.showContentMenus(routes) }
            </Switch>

        
        
      </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
        result = routes.map((route,index) => {
            return (
                    <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact}
                        component={route.main}
                        item={this.showValue}
                    />
                );
        });
    }

    return result;
  }
}

export default App;
