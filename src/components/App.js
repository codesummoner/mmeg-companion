/**
 * Libs
 */
import React from 'react';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Components
 */
import Home from './Home';
import Creatures from './Creatures';
import Creature from './Creature';
import Skills from './Skills';
import CreatureSearchForm from './CreatureSearchForm';

/**
 * CSS
 */
import './App.css';

/**
 * Constants
 */
import { READ, UNREAD } from '../constants/index'

/**
 * Parent Component
 */



const App = ({ store = () => {} }) =>
  <Provider store={ store }>
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
              <Nav>
                <li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true" /> Home</Link></li>
                <li role="presentation"><Link to="/creatures"><span className="glyphicon glyphicon-th" aria-hidden="true" /> Creatures</Link></li>
                <li role="presentation"><Link to="/skills"><span className="glyphicon glyphicon-th-list" aria-hidden="true" /> Skills</Link></li>
              </Nav>
              <CreatureSearchForm />
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={ Home } />
          <Route exact path="/creatures" component={ Creatures } />
          { /* <Route path="/creatures/:id" component={ CreatureView } />*/ }
          <Route exact path="/skills" component={ Skills } />
          <Route path="/creatures/:id" component={ Creature } />
        </div>
      </Router>
    </div>
  </Provider>;



const mapStateToProps = (state) => ({
  creatures: state.creatures,
  skills: state.skills
});

const mapDispatchToProps = (dispatch) => ({
  markPostAsRead: () => dispatch({ type: READ }),
  markPostAsUnread: () => dispatch({ type: UNREAD })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

