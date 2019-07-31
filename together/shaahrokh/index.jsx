// GitHub is for everyone
// Do not ban Iranian developers
// Shahrokh Moghimi from Iran 🇮🇷

import react from 'react';

export default class index extends react.Component {
  state = {
    message: 'GitHub is for everyone'
  };
  render() {
    return (
      <h1>{this.state.message}</h1>
    )
  }
}
