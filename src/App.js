import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/Area';
import Projeto from './pages/Projeto';
import Notificações from './pages/Notificações';


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
