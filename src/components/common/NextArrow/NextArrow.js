import React from "react";
import arrow from '../../../assets/images/arrow-right.svg';

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", width: '39px', height: '39px', backgroundImage: `url(${arrow})`, border: 'none' }}
      onClick={onClick}>
    </button>
  );
}