import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'
import Message from './pages/ui/message'
import Tabs from './pages/ui/tab'
import NoMatch from './pages/nomatch'

export default class Fouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/ui/button" component={Buttons} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loading" component={Loading} />
                <Route path="/admin/ui/notification" component={Notification} />
                <Route path="/admin/ui/message" component={Message} />
                <Route path="/admin/ui/tab" component={Tabs} />
                <Route component={NoMatch}></Route>
              </Switch>
            </Admin>
          } />
          <Route path="/order/detail" component={Login} />
        </App>
      </Router>
    );
  }
}