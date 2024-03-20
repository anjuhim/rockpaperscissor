import React from 'react';

const Box = (props) => {
  return (
    <div className={`box ${props.color}-box`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="" />
      <h2 className={`${props.color}`}>{props.result}</h2>
    </div>
  );
};

export default Box;
