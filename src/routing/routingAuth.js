import React, { useContext } from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import {userContext} from '../context/userContext'

export default function PrivateRoute({ children, ...rest }) {
  let User = useContext(userContext);
  //User= null;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        User ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
