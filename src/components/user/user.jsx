import React, {useContext} from "react";
import UserIcon from "../../assets/icons/user.svg?react";
import AuthContext from "../../context/auth-context.jsx";

export function UserInfo() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleClick = () => {
    console.log("clicked");
  if (isLoggedIn) {
    logout() // должен присвоить false
    alert("Logged out");
  }  else {
    login();  // должен присвоить true
    alert("Logged in");
  }
  }

  return (
    <li className="header__user-menu-item">
      <button className="header__user-menu-link" onClick={handleClick}>
        <UserIcon className="header__user-menu-icon header__user-menu-icon--user" width={20} height={20} />
      </button>
    </li>
  )
}
