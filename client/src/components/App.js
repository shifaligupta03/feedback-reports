import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';

// Browser router - brains of react routes, tells how to behave. It looks at the current url and changes the set of components that are visible on the screen
// Route - react component that used to set up a rule in a certain route that user might visit inside an application and a set a components that will be actually visible on the screen

const SurveyNew = ()=><h2>SurveyNew</h2>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
   render(){
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/surveys" component={Dashboard}></Route>
                    <Route exact path="/surveys/new" component={SurveyNew}></Route>
                </div>            
            </BrowserRouter>
        </div>
    )
   }
}

export default connect(null, actions)(App);