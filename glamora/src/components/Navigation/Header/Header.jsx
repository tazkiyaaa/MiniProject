import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import '../Header/Header.css';
import { auth } from '../../../firebase/firebase.utils';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/selectors/user.selector';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = ({ currentUser }) => {
  const navigate = useNavigate(); 

  return (
    <div className="header">
      <div className="header_section sticky-top">
      {currentUser ? (
            <span onClick={() => auth.signOut()}>
              <Link to="/" className="logout">
                Log Out
              </Link>
            </span>
          ) : (
            <Link to="/login" className="login">
              Log In
            </Link>
          )}
        <h2>
          <Link to="/" className="logo text-center">
            GLAMORA
          </Link>
        </h2>
            <div onClick={() => navigate("/checkoutpage")}>
              <CartIcon />
            </div>

        </div>
      </div>

  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
