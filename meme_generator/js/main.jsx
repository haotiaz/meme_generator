import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Index from './index';
import Search from './search';
import Edit from './edit';

ReactDOM.render(
    <Router>
    <Routes>
    <Route exact path="/" element={ <Index/> } />
        <Route path="/search/" element={ <Search/> } />
        <Route path="/edit/" element={ <Edit/> } />
    </Routes>
  </Router>,
  document.getElementById('root'),
);