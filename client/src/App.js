import React, { Component, Fragment } from 'react'
import axios from 'axios';

export default class App extends Component {

  componentDidMount() {
    axios.get('/api')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render(){
    return (
    <Fragment>
      <p>open the browser console to see your api response-</p>
      <p> be sure to set the pg config to your database / table / port / etc name</p>
      <p> also be sure to start your postgres server in the terminal</p>
      <p>pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start</p>
    </Fragment>
    )}
}