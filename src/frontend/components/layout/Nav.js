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
      <div>
        NAV
      </div>
    );
  }
}
