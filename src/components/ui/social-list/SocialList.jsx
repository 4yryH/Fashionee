import React from 'react';
import socialData from '../../../data/SocialData.json';
import {
  SocialItem,
  SocialLink,
  StyledSocialList,
} from './SocialList.style.js';

// список социал
export function SocialList() {
  return (
    <StyledSocialList>
      {socialData.map((item) => {
        return (
          <SocialItem key={item.id}>
            <SocialLink href={item.url} target="_blank">
              {item.title}
            </SocialLink>
          </SocialItem>
        );
      })}
    </StyledSocialList>
  );
}
