# ReactNetworkStatus

* This is a React Js library that provides network status (online/offline) with polling.

# Installation

`npm i react-network-status` or `yarn add react-network-status`

# Usage

### useNetworkStatus Hook for functional Components in React

Hook that updates component with the network status [offline/online state](https://developer.mozilla.org/en-US/docs/Online_and_offline_events).

This gives user a flexibility to programmatically render UI components.

```tsx
import { useNetworkStatus } from "react-network-status";

const App = () => {
  const [networkStatus, setNetworkStatus] = useState(true);
  const config = {
    timeout: 5000,
    interval: 1000,
  };

  useNetworkStatus((networkStatusUpdate) => {
    setNetworkStatus(networkStatusUpdate);
  }, config);

  return <div>You are: {networkStatus ? "online" : "offline"}</div>;
};
```

### Components

`NetworkDetector` - Component that can be used in State based Components.

It has no UI but just accepts config and onChange event.

```tsx
import { NetworkDetector } from "react-network-status";

class App extends Component {
  state = {
    networkStatus: true,
  };

  config = {
    timeout: 5000,
    interval: 1000,
  };

  onNetworkStatusChange = (networkStatus: boolean) => {
    this.setState({ networkStatus });
  };

  render() {
    const { networkStatus } = this.state;

    return (
      <div>
        You are: {networkStatus ? "online" : "offline"}
        <NetworkDetector
          config={this.config}
          onChange={this.onNetworkStatusChange}
        />
      </div>
    );
  }
}
```

### Props

`<NetworkDetector/>`, and `useNetworkStatus` accept the following props:

```tsx
const config = {
  url: // YOUR_POLLING URL,
  interval: // YOUR POLLING INTERVAL,
  timeout: // YOUR POLLING TIMEOUT
};
```

onChange: Event that provides status (true or false) as online value of the network.

| Prop               | Type        | Description                       | Default                        |
| ------------------ | ----------- | --------------------------------- | ------------------------------ |
| `config`           | Obj or Bool | Config for polling fallback [1]   | [see below]                    |
| `config.enabled`   | Boolean     | Force polling on or off           | Depends on the browser [1]     |
| `config.url`       | String      | URL to pool for connection status | `"https://ipv4.icanhazip.com"` |
| `config.interval`  | Number      | How often (in ms) to poll         | `5000`                         |
| `config.timeout`   | Number      | How long (in ms) before timeout   | `5000`                         |
| `onChange`         | Function    | Called when connection changes    | none                           |

[1] Polling is only used as a fallback for browsers that don't support the `"online"` event. Currently these are Chrome on Windows, Firefox on Windows, and Chrome on Linux.

[2] `<NetworkDetector/>` will not render `children`.

## Services

* For web development and related services visit us at: https://developershive.com
* Mail us at: contact@developershive.com

## Author

* Name: Tofiq Quadri
* Email: tofiqquadri@developershive.com
* This package is maintained by [tofiqquadri](https://github.com/tofiqquadri).