import react from 'react';

export default class index extends react.Component {
  state = {
    message: 'GitHub for everyone'
  };
  render() {
    return (
      <h1>{{this.state.message}}</h1>
    )
  }
}
