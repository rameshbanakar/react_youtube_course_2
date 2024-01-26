import React, { Component } from "react";
import UpdatedComponent from "./HighComp_3";
export class HighComp_1 extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Click {this.props.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(HighComp_1);
