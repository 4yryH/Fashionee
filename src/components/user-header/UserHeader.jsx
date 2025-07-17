import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext.jsx';
import { Button, StyledUserIcon, UserListItem } from './UserHeader.styles.js';

export function UserInfo() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleClick = () => {
    console.log('clicked');
    if (isLoggedIn) {
      logout(); // должен присвоить false
      alert('Logged out');
    } else {
      login(); // должен присвоить true
      alert('Logged in');
    }
  };

  return (
    <UserListItem>
      <Button onClick={handleClick}>
        <StyledUserIcon />
      </Button>
    </UserListItem>
  );
}
