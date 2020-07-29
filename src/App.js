import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { SinglePost } from './App/Posts/SinglePost'
import CreateNewPost from './App/CreateNewPost/CreateNewPost.js'
import SingleAutor from "./App/Authors/SingleAutor.js"
import Posts from './App/Posts/Posts'
import About from './App/About/About'
import Authors from './App/Authors/Authors'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Posts} />
      <Route path='/createnewpost' component={CreateNewPost}/>
      <Route exact path='/posts' component={Posts} />
      <Route path='/posts/:id' component={SinglePost} />
      <Route path='/about' component={About} />
      <Route exact path='/authors' component={Authors} />
      <Route path='/authors/:id' component={SingleAutor} />
    </Switch>
  );
}

export default App;
