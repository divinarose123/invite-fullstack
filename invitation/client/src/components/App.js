import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Example from './Example'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactCard from './ContactCard'
import Going from './Going'
import NotGoing from './NotGoing'
export default () => <div className="App">
  <Provider store={store}>
  </Provider>
  <Router>
    <Route path="/" exact component={ContactCard} />
    <Route path="/Going" component={Going} />
    <Route path="/Not-Going" component={NotGoing} />
  </Router>

</div>
