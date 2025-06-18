import React from 'react';
import socialData from "../../../data/social-data.json";
import {Link} from "../link/link.jsx";
import "./social-list.css"

// список социал
export function SocialList() {
  return (
    <ul className="social-list">
      {socialData.map(item => {
        return (
          <Link
            key={item.id}
            asListItem
            liProps={{className: 'social-item'}}
            linkProps={{
              title: item.title,
              href: item.url,
              target: '_blank',
              className: 'social-link',
            }}
          />
        );
      })}
    </ul>
  )
}
