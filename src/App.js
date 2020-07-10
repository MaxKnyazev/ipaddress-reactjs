import React, {Component} from 'react';
import IPAddress from './IPAddress.js';
import Spinner from './Spinner';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ip: '',
      city : '',
      country : '',
      loc : '',
      org : '',
      postal : '',
      timezone : '',
      loading : true,
    };
  }

  async componentDidMount() {
    let result = await fetch('https://ipinfo.io/json?token=6c6f02ef23ccab');
    result = await result.json();

    let {ip, city, country, loc, org, postal, timezone} = result;

    this.setState({
      ip, 
      city,
      country,
      loc,
      org, 
      postal,
      timezone,
      loading : false,
    });
  }

  render() {
    return this.state.loading ? <Spinner /> : <IPAddress {...this.state} />;
  }
}

export default App;