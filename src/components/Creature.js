import React from 'react';
import { connect } from 'react-redux';
/*

 import { createStore, applyMiddleware, compose } from 'redux';
 import thunk from 'redux-thunk';
 import reducer from '../reducers';
 //import { getCreatures } from '../reducers/creatures/actions';
 import { getCreatureProfile } from '../reducers/creature/actions';

*/

const CreaturePortrait = ({ src, altText, cssClasses }) =>
  <div className="row">
    <div className="col-xs-4">
      <img src={ src } alt={ altText } className={ cssClasses } />
    </div>
    <div className="col-xs-8">
      <p className="title">{ altText }</p>
    </div>
  </div>;

const CreaturePhoto = ({ src, altText, cssClasses }) =>
  <div className="row">
    <div className="col-xs-12">
      <img src={ src } alt={ altText } className={ cssClasses } />
    </div>
  </div>;

const Ranking = ({ rank, maxRank }) =>
  <div className="row ranking">
    <div className="col-xs-12">
      <span className="glyphicon glyphicon-star"></span>
    </div>
  </div>;

const Creature = ({ profile, skills }) => {
  return <div className="container creature">
      <CreaturePortrait src={ profile.portrait } altText={ profile.name } cssClasses="portrait"/>
      <Ranking rank={ profile.rank } maxRank={ profile.max_rank } />
      <div className="row">
        <div className="col-xs-12">
          <p>Elemental Type: { profile.element_type }</p>
          <p>Combat Type: { profile.combat_type }</p>
          <p>Skills:</p>
          <ul>
            { skills.map((skill, i) =>
              <li key={ i }>
                {skill.name}
              </li>
            ) }
          </ul>
          <p>Evolves into: { profile.evolution }</p>
          <p>Health: { profile.health }</p>
          <p>Attack: { profile.attack }</p>
          <p>Defense: { profile.defense }</p>
          <p>Speed: { profile.speed }</p>
          <p>Crital Chance: { profile.crit }</p>
          <p>Critical Damage: { profile.crit_damage }</p>
          <p>Accuracy: { profile.accuracy }</p>
          <p>Resistance: { profile.resistance }</p>
        </div>
      </div>
      <CreaturePhoto src={ profile.photo } altText={ profile.name } cssClasses="photo img-fluid" />
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
