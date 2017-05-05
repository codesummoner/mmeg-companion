import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Home from './Home';
import Creatures from './Creatures';
import Creature from './Creature';
import Skills from './Skills';
import CreatureSearchForm from './CreatureSearchForm';

import './App.css';

const App = () =>
  <div>
    <Router>
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">EG Companion</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav">
              <li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true" /> Home</Link></li>
              <li><Link to="/creatures"><span className="glyphicon glyphicon-th" aria-hidden="true" /> Creatures</Link></li>
              <li><Link to="/skills"><span className="glyphicon glyphicon-th-list" aria-hidden="true" /> Skills</Link></li>
            </ul>
            <CreatureSearchForm />
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/" component={ Home } />
        <Route exact path="/creatures" component={ Creatures } />
        <Route path="/creatures/:id" component={ Creature } />
        <Route exact path="/skills" component={ Skills } />
      </div>
    </Router>
  </div>;

export default App;

