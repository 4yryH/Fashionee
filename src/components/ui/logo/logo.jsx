import React from "react";
import logo from "../../../assets/images/logo.svg?url";

export function Logo ({className, width, height}) {
  return (
    <a href="#" className={className}>
      <img src={logo} alt="logo" width={width} height={height} />
    </a>
  )
}
