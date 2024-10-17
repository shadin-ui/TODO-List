import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import TodoList from './components/TodoList';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
          <Route exact path="/" component={TodoList} />
          <Route component={NotFound} />
      </div>
    </Router>
  );
};

export default App;
