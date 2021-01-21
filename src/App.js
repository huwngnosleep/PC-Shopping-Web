import React, { Component } from "react";
import "./styles.css";

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

import { auth } from './firebase/firebase.utils'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./pages/home/Header";
import Footer from "./pages/home/Footer"

import Home from "./pages/Home"
import Products from "./pages/Products"
import DetailProduct from "./pages/DetailProduct"
import Payment from './pages/Payment'
import SignIn from './pages/Signin'


class App extends Component {

  componentDidMount() {
    const { setCurrentUser } = this.props

    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    }) 
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Footer />
        </div>
        
        <Switch>
          <Route exact path="/signin/" render={() => 
            this.props.currentUser ? <Redirect to="/" /> : <SignIn />
          } />
          <Route path="/detail-product/" component={DetailProduct} />
          <Route path="/products/" component={Products} />
          <Route path="/payment" component={Payment}/>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)