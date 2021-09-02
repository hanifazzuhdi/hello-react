import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Todo from './pages/Todo';
import Post from './pages/Post';
import Detail from './components/Post/Detail';

const App = () => {
  return (
      <Router>
        <Navbar />

        <Switch>
          <Route path='/posts' component={Post} />
          <Route path='/post/:id' component={Detail} />
          <Route path='/' component={Todo} />
        </Switch>
      </Router>
  )
}

export default App;