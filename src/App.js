import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*import './App.css';*/
import Home from './pages/Home';
import About from './pages/Area';
import Projeto from './pages/Projeto';
import Notificações from './pages/Notificações';
import Login from './pages/Login';
import SingUp from './pages/SingUp';


function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Area" exact component={About} />
					<Route path="/Projeto" exact component={Projeto} />
					<Route path="/Notificações" exact component={Notificações} />
					<Route path="/Login" exact component={Login} />
					<Route path="/SingUp" exact component={SingUp} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
