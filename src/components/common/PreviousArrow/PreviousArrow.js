import React from "react";
import arrow from '../../../assets/images/arrow-left.svg';

export default function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", width: '39px', height: '39px', backgroundImage: `url(${arrow})`, border: 'none' }}
      onClick={onClick}
    >
    </button>
  );
}