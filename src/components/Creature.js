import React from 'react';
import { connect } from 'react-redux';
/*

 import { createStore, applyMiddleware, compose } from 'redux';
 import thunk from 'redux-thunk';
 import reducer from '../reducers';
 //import { getCreatures } from '../reducers/creatures/actions';
 import { getCreatureProfile } from '../reducers/creature/actions';

*/


const Creature = ({ profile }) => {
  return <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div>
            <p>Name: { profile.name  }</p>
            {
              /*
               <p>Name: { profile.name  }</p>
               <p>Rank: { profile.rank } of possible { profile.max_rank }</p>
               <p>element_type: { profile.element_type }</p>
               <p>combat_type: { profile.combat_type }</p>
               <p>skills: { profile.skills }</p>
               <p>evolution: { profile.evolution }</p>
               <p>health: { profile.health }</p>
               <p>attack: { profile.attack }</p>
               <p>defense: { profile.defense }</p>
               <p>speed: { profile.speed }</p>
               <p>crit: { profile.crit }</p>
               <p>crit_damage: { profile.crit_damage }</p>
               <p>accuracy: { profile.accuracy }</p>
               <p>resistance: { profile.resistance }</p>
              */
            }
          </div>
        </div>
      </div>
    </div>
  </div>
};

/*
const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));

store.dispatch(getCreatureProfile(2));
*/

const mapStateToProps = ({ creature: { profile, skills } }) => ({
  profile,
  skills,
});

export default connect(mapStateToProps)(Creature);
