import React from "react";

import "./Input.css";

export default function Input(props) {
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
      />
    ) : (
      <textarea placeholder={props.placeholder} className={props.className} />
    );

  return <div>{element}</div>;
}
