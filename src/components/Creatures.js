import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setCurrentCreature,
  getCreatureProfile,
} from '../reducers/creature/actions';

const Creatures = ({ creatures, setCreature }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ul>
            { creatures.map((creature, i) =>
              <li key={ i }>
                <Link to={`/creatures/${creature.id}`} onClick={ setCreature(i + 1) }>{creature.name}</Link>
              </li>
            ) }
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ creatures }) => ({
  creatures,
});

const mapDispatchToProps = dispatch => ({
  setCreature(id) {
    return () => {
      dispatch(setCurrentCreature(id));
      dispatch(getCreatureProfile(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Creatures);
