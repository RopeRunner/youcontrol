import React from 'react';
import axios from 'axios';

function HOCHttpGetter(Module, getJson) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
      this.takeData = this.takeData.bind(this);
      this.newData = this.newData.bind(this);
    }

    componentDidMount() {
      this.newData(getJson);
    }

    newData(getNewJson) {
      console.log(getNewJson);
      axios
        .get(getNewJson)
        .then(this.takeData)
        .catch(err => console.log(err));
    }

    takeData(data) {
      this.setState({ data: data });
    }

    render() {
      return <Module data={this.state.data} newData={this.newData} />;
    }
  };
}

export default HOCHttpGetter;
