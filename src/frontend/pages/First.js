import React from "react";

export default class First extends React.Component {
  constructor(){
    super();
    console.log("FIRST CLASS LOADED");
  }
  render() {
    return (
      <div>
        FIRST COMPONENT
      </div>
    );
  }
}
