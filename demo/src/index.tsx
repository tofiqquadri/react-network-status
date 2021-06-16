import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NetworkDetector } from 'react-network-status';

class App extends Component {

	state = {
		networkStatus: true
	}

	config = {
		timeout: 5000,
		interval: 1000,
	};

	onNetworkStatusChange = (networkStatus: boolean) => {
		this.setState({ networkStatus });
	}

	render() {
		const { networkStatus } = this.state;

		return <div>
			You are: {networkStatus ? 'online' : 'offline'}
			<NetworkDetector config={true} onChange={this.onNetworkStatusChange} />
		</div>;
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
