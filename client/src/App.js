import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import MobileMenu from './components/MobileMenu';
import Home from './pages/Home';
import Rockets from './pages/Rockets';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar/>
          <MobileMenu/>
          <Route exact path = '/' component = { Home }/>
          <Route exact path = '/rockets' component = { Rockets }/>
          <Route exact path = '/forum'component = { Forum }/>
          <AuthRoute exact path = '/login' component = { Login }/>
          <AuthRoute exact path = '/register' component = { Register }/>
          <Route exact path="/posts/:postId" component={SinglePost}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
