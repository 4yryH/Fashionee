import React from 'react';

export function PaymentsItem({link, srcImage, width, height}) {
  return (
    <li className="">
      <a className="" href={link}>
        <img alt="" className="" width={width} height={height} src={srcImage}/>
      </a>
    </li>
  )
}
