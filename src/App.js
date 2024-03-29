import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/home/Home'
import WebPolicy from './components/general/WebPolicy'
import ArticleList from "./provider/ArticleListProvider";
import BookList from "./provider/BookListProvider";
import ArticlePage from "./provider/ArticlePageProvider";
import BookPage from "./provider/BookPageProvider"
import './css/App.css'

const App = () => {
  return (
    <div id='app'>
      <Router forceRefresh={true}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/privacy-policy" render={() => <WebPolicy />} />
          <Route path="/terms-of-use" render={() => <WebPolicy />} />
          <Route exact path="/article" render={routeProps => <ArticleList type="article" {...routeProps} />} />
          <Route exact path="/book" render={routeProps => <BookList type="book" {...routeProps} />} />
          <Route path="/article/:cid" render={routeProps => <ArticlePage type="article" {...routeProps} />} />
          <Route path="/book/:cid" render={routeProps => <BookPage type="book" {...routeProps} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
