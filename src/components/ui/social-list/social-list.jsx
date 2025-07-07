import React from 'react';
import socialData from '../../../data/SocialData.json';
import { Link } from '../link/Link.jsx';
import './SocialList.css';

// список социал
export function SocialList() {
  return (
    <ul className="social-list">
      {socialData.map((item) => {
        return (
          <Link
            key={item.id}
            asListItem
            liProps={{ className: 'social-item' }}
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
  );
}
