import React from 'react';
import Portfolio from '../screens/Portfolio';
import { BrowserRouter, Route } from "react-router-dom";

const Navigation = () => {
	return (
		<BrowserRouter>
			<Route path="/" component={Portfolio} />
			<Route path="/about" component={Portfolio} />
		</BrowserRouter>
	)
}

export default Navigation;
