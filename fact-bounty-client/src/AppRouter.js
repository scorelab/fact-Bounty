import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'

//pages
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Posts from './pages/Posts'
import PostDetailView from './pages/PostDetailView'
import Tweets from './pages/Tweets'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/resetpassword/:verificationToken"
            component={ResetPassword}
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/tweets" component={Tweets} />
          <Route exact path="/post/:id" component={PostDetailView} />
        </Fragment>
      </Router>
    )
  }
}

export default AppRouter
