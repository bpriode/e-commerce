import React, { Component } from 'react';

export default class Home extends Component {
  render() {


    return(
      <div className="jumbotron">
        <h1 className="display-2">Hello, Dolly Fans!</h1>
        <p className="lead">A platform to shwocase Dolly-inspired merchandise in one place.</p>
        <hr className="my-4"/>
        <p>Anything seen here can be purchased online through separate vendors.</p>
        <p className="lead">
        <a className="btn btn-light btn-lg" href="/contactUs" role="button">Reach out to us!</a>
        </p>
      </div>
    )
  }
}
