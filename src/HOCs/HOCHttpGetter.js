import React from 'react';
import axios from 'axios';

function HOCHttpGetter(Module, getJson) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
      this.takeData = this.takeData.bind(this);
    }

    takeData(data) {
      this.setState({ data: data });
    }

    componentDidMount() {
      axios
        .get(getJson)
        .then(this.takeData)
        .catch(err => console.log(err));
    }

    render() {
      return <Module data={this.state.data} />;
    }
  };
}

export default HOCHttpGetter;
