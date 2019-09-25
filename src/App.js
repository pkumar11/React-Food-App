import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Default from './pages/Default';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/recipes" component={Recipe} />
					<Route path="/recipes/:id" component={RecipeDetail} />
					<Route component={Default} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
