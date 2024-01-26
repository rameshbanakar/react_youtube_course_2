import React, { Component } from "react";
import UpdatedComponent from "./HighComp_3";
export class HighComp_2 extends Component {

  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          Hover over {this.props.count} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HighComp_2);
