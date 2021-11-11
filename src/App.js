 webkitURL
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/privateRoute'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
