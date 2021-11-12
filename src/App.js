import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import {Route,Switch} from 'react-router-dom'

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/privateRoute'
import {useDispatch,useSelector} from 'react-redux';
import {isUserLoggedIn} from './actions/auth.actions';

function App() {
	
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth)
	
	useEffect(()=>{
		if(!auth.authenticate){
			dispatch(isUserLoggedIn());	
		}
	},[]);
	
  return (
	  <div className="App">
		  <Header />
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
	  </div>
  );
}

export default App;
