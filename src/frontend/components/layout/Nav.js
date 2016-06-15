import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { location } = this.props;
    const FirstClass = location.pathname === "/" ? "active" : "";
    const SecondClass = location.pathname.match(/^\/archives/) ? "active" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <ul class="nav navbar-nav">
            <li class={FirstClass}>
              <IndexLink to="/">First</IndexLink>
            </li>
            <li class={SecondClass}>
              <Link to="second">Second</Link>
            </li>
          </ul>
      </nav>
    );
  }
}
