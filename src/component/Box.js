import React from 'react';

const Box = (props) => {
  const resultCss = (rslt) => {
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

  return (
    <div className={`box mgl5 ${resultCss(props.result)}-box`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2 className={`${resultCss(props.result)}`}>{props.result}</h2>
    </div>
  );
};

export default Box;
