import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    return (
      <div className={`box ${this.props.color}-box`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt=""
        />
        <h2 className={`${this.props.color}`}>{this.props.result}</h2>
      </div>
    );
  }
}
