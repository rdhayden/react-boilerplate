import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // ...var_name references the rest of the props not explicitly destructured, in this case we called the variable 'rest'
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToprops = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToprops)(PrivateRoute);
