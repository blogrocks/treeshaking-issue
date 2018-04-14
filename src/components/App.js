import React, { Component } from 'react';
import { hot, setConfig } from 'react-hot-loader';
// Debug mode adds additional warnings and can tells you
// why React Hot Loader is not working properly in your application
setConfig({ logLevel: 'debug' });

class App extends Component {
	render() {
		return (
			<div>
				<h1>My React App</h1>
			</div>
		);
	}
}

export default hot(module)(App);