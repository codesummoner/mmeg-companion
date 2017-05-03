/**
 * Libs
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Components
 */
import { Link } from 'react-router-dom';

/**
 * CSS
 */

/**
 * Actions
 */

/**
 * Constants
 */
import { READ, UNREAD } from '../constants/index'

const ListCreatures = ({ creatures = () => {} }) => {
  return <ul>
    { creatures.map((creature, i) =>
      <li key={ i }>
        <Link to={`/creatures/${creature.id}`}>{creature.name}</Link>
      </li>
    ) }
  </ul>;
};

const Creatures = ({ creatures = {} }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ListCreatures creatures={ creatures } />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ creatures }) => ({
  creatures
});

const mapDispatchToProps = (dispatch) => ({
  markPostAsRead: () => dispatch({ type: READ }),
  markPostAsUnread: () => dispatch({ type: UNREAD })
});

export default connect(mapStateToProps, mapDispatchToProps)(Creatures);
