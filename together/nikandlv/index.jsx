import react from 'react';

export default class index extends react.Component {
  state = {
    message: 'Github for everyone'
  };
  render() {
    return (
      <h1>{{this.state.message}}</h1>
    )
  }
}
