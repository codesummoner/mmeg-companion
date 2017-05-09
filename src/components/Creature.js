import React from 'react';
import { connect } from 'react-redux';
import { setCurrentCreature, getCreatureProfile } from '../reducers/creature/actions';
import { API_URL, API_PORTRAIT_PATH, API_PORTRAIT_FILE_EXT, API_PHOTO_PATH, API_PHOTO_FILE_EXT } from '../constants';

import './Creature.css';

const CreaturePortrait = ({ src, altText, cssClasses }) =>
  <div className="row">
    <div className="col-xs-12 flex-align-center">
      <img src={ src } alt={ altText } className={ cssClasses } />
      <p className="title">{ altText }</p>
    </div>
  </div>;

const CreaturePhoto = ({ src, altText, cssClasses }) =>
  <div className="row">
    <div className="col-xs-12">
      <img src={ src } alt={ altText } className={ cssClasses } />
    </div>
  </div>;

const Ranking = ({ rank }) =>
  <div className="row ranking">
    <div className="col-xs-12">
      <span className="glyphicon glyphicon-star"></span>
    </div>
  </div>;

const Creature = ({ profile, skills }) => {
  return <div className="container creature">
      <CreaturePortrait src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } altText={ profile.name } cssClasses="portrait"/>
      <Ranking rank={ profile.rank } />
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
          <p>Health: { profile.rank1_base_health }</p>
          <p>Attack: { profile.rank1_base_attack }</p>
          <p>Defense: { profile.rank1_base_defense }</p>
          <p>Speed: { profile.rank1_base_speed }</p>
          <p>Crital Chance: { profile.rank1_base_crit }</p>
          <p>Critical Damage: { profile.rank1_base_crit_damage }</p>
          <p>Accuracy: { profile.rank1_base_accuracy }</p>
          <p>Resistance: { profile.rank1_base_resistance }</p>
        </div>
      </div>
      <CreaturePhoto src={ API_URL + API_PHOTO_PATH + profile.id + API_PHOTO_FILE_EXT } altText={ profile.name } cssClasses="photo img-fluid" />
    </div>
};

const mapStateToProps = ({ creature: { profile, skills } }) => ({
  profile,
  skills,
});

const mapDispatchToProps = (dispatch, match) => {
  let id = match.match.url.replace('/creatures/','');
  dispatch(setCurrentCreature(id));
  dispatch(getCreatureProfile(id));
};

export default connect(mapStateToProps, mapDispatchToProps)(Creature);
