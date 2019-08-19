import React from 'react';
import User from './User'

export default class UserBoard extends User {
  render() {
    return (<div>
      <h3>User Board:</h3>
      <User name="Basil" />
      <User name="Charlie" />
      <User name="Denise" />
    </div >)
  }
}
