import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../../redux/actions/user.action';
import { auth, createUserProfile } from '../../../firebase/firebase.utils';
import Header from '../Header/Header';
import { Home } from '../../../pages/Home/Home';
import { ShopPage } from '../../../pages/Shop/ShopPage/ShopPage';
import { CreateAccount } from '../../../pages/UserAuth/CreateAccount';
import { Login } from '../../../pages/UserAuth/Login';
import CheckoutPage from '../../../pages/CheckOut/CheckoutPage/CheckoutPage';
import { Routes, Route, Navigate } from 'react-router-dom';

class NavBar extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route
            path="/createaccount"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <CreateAccount />
              )
            }
          />
          <Route
            path="/login"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
