import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSellButtonClick = () => {
    // {user?history.push('/create'):history.push('/login')}
    if (user){
      history.push('/create')
    }
    else{
      alert("Please login")
      history.push('/login')
    }
    
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleLogoutClick = () => {
    const shouldLogout = window.confirm('Are you sure you want to logout?');
    if (shouldLogout) 
    {
    firebase.auth().signOut();
    history.push('/login');}
  };
  const handleLoginMouseEnter = () => { 
    setLoginHovered(true);
  };

  const handleLoginMouseLeave = () => {
   
    setLoginHovered(false);
  };

  const [isLoginHovered, setLoginHovered] = useState(false);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find car, mobile phone and more..." />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div
          className={`loginPage ${isLoginHovered?'hoverEffect':''}`}
          onClick={handleLoginClick}
          onMouseEnter={handleLoginMouseEnter}
          onMouseLeave={handleLoginMouseLeave}
        >
          <span>{user ? `Welcome ${user.displayName}` : 'Login'}</span>
          {user && (
            <span
              onClick={handleLogoutClick}
              className="hoverEffect"
            >
              &nbsp;Logout
            </span>
          )}
        </div>

        <div className="sellMenu" onClick={handleSellButtonClick}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
