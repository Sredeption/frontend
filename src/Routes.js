import {Route} from 'react-router-dom';
import React from 'react';
import {Chart, Home, HttpView, WebSocketView} from "./view";

const
  Routes = (props) => (
    <Route>
      <Route path="/" exact component={Home}/>
      <Route path="/chart" component={Chart}/>
      <Route path="/home" component={Home}/>
      <Route path="/http" component={HttpView}/>
      <Route path="/websocket" component={WebSocketView}/>
    </Route>
  );

export default Routes;