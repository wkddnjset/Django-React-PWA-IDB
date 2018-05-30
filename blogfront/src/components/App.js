import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import Home from './Home'
import PostList from '../containers/PostList'
import PostDetail from '../containers/PostDetail'

import '../static/styles/App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Blog, 블로그</h1>
        </div>
        <div className="content-wrapper">
          <ul>
            <li><NavLink exact to="/">홈으로</NavLink></li>
            <li><NavLink to="/post/">포스트 리스트</NavLink></li>
          </ul>
        <Switch>
          <Route exact path="/post/" component={PostList}/>
          <Route exact path="/post/:id/" component={PostDetail}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;