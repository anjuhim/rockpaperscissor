import React, { Component } from 'react';

export default class BoxClass extends Component {
  resultCss = (rslt) => {
    let css = '';
    switch (rslt) {
      case '😭':
        css = 'green';
        break;
      case '😁':
        css = 'red';
        break;
      case '😑':
        css = 'black';
        break;
      default:
        css = '';
    }
    return css;
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate Box', this.props.title);
  };

  render() {
    return (
      <div className={`box mgl5 ${this.resultCss(this.props.result)}-box`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt=""
        />
        <h2 className={`${this.resultCss(this.props.result)}`}>
          {this.props.result}
        </h2>
      </div>
    );
  }
}
