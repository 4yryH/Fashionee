import React from 'react';
import logo from '../../../assets/images/logo.svg?url';

// лого в шапке и подвале
export function Logo({ width, height }) {
  return (
    <a href="#">
      <img src={logo} alt="logo" width={width} height={height} />
    </a>
  );
}
