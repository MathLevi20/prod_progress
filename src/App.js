import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Area';
import Projeto from './components/Projeto';
import Notificações from './components/Notificações';


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Area" exact component={About} />
					<Route path="/Projeto" exact component={Projeto} />
					<Route path="/Notificações" exact component={Notificações} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
