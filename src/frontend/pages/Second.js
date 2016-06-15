import React from "react";

export default class Second extends React.Component {
  constructor(){
    super();
    console.log("SECOND CLASS LOADED");
  }
  render() {
    return (
      <div>
        SECOND COMPONENT
      </div>
    );
  }
}
