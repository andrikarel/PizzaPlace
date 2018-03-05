import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import NavigationBar from './components/NavBar/NavBar';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';



const App = () => {
    return (
        <div>
            <NavigationBar logoImageUrl="http://piq.codeus.net/static/media/userpics/piq_248646_400x400.png"/>
            <Switch>
                <Route path="/menu" component={Menu}/>
                <Route exact path="/" render={() => {
                    return <Redirect to="/menu" />;
                }} />
                {/* <Route path="/offers" component={Menu}/>
                <Route path="/about" component={Menu}/>
                <Route path="/cart" component={Menu}/> */}
            </Switch>
        </div>
    )
};

ReactDOM.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app')); 