import React from 'react';
import BookDetails from './pages/bookDetails';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Sell from './pages/sell';
import Home from './pages/home';
import BookDetail from './pages/bookDetails'
import NavContainer from './container/navbar';
import ProvideUser from './context/ProviderUser';
import ProtectedRoute from './routing/routingAuth'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <ProvideUser>
      <Router>
        <NavContainer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/bookDetails/:BookId" component={BookDetail} />
          <Route path="/sign-in">
            <Signin />
          </Route>
          <ProtectedRoute path="/sell">
            <Sell />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ProvideUser>
  );
}



// {
  //   "Books" : {
//     "Category" : "Mathematics",
//     "DatePosted" : "2021-01-02",
//     "Description" : "Very Good",
//     "MinPrice" : 1200,
//     "Name" : "Calculas",
//     "State" : "Available",
//     "User_id" : 1,
//     "id" : 1
//   },
//   "Offers" : {
//     "Book_id" : 1,
//     "Price" : 14000,
//     "User_id" : 1,
//     "id" : 1
//   },
//   "Orders" : {
//     "Book_id" : 1,
//     "Status" : "Delivered",
//     "UsrOrd" : 1,
//     "UsrSold" : 2,
//     "id" : 1
//   },
//   "University" : {
//     "Location" : "27.88984349,67.453423",


