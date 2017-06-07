import React from 'react';
import { connect } from 'react-redux';
import {
  API_URL,
  API_PORTRAIT_PATH, API_PORTRAIT_FILE_EXT,
  API_PHOTO_PATH, API_PHOTO_FILE_EXT,
  API_ELEMENTAL_TYPES_PATH, API_ELEMENTAL_TYPES_EXT,
  API_COMBAT_CLASSES_PATH, API_COMBAT_CLASSES_EXT
} from '../constants';
import { Link } from 'react-router-dom';

import './Creature.css';

const ReportDataUI = ({ creatureId }) => <div className="row">
  <div className="col-xs-12 text-right">
    <Link to={`/report/${ creatureId }`} className="btn btn-danger"><span className="glyphicon glyphicon-exclamation-sign"></span> Report data</Link>
  </div>
</div>;

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

/*const Ranking = ({ rank }) =>
  <div className="row ranking">
    <div className="col-xs-12">
      <span className="glyphicon glyphicon-star"></span>
    </div>
  </div>;*/

const EvolvesInto = ({ creatureId, creatures }) => {
  if (creatureId === 0) {
    return <span>No evolution</span>;
  } else {
    let profile = 0;
    creatures.map((profileitem) => {
      if (profileitem.id === creatureId) {
        profile = profileitem;
      }
      return true;
    });
    return <span>
    <Link to={`/creatures/${ profile.id }`}><img src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } alt={ profile.name } className="mini" /> { profile.name }</Link>
    </span>;
  }
};

const ElementalIcon = ({ elementalName, className }) =>
  <div className={ className }>
    <img src={ API_URL + API_ELEMENTAL_TYPES_PATH + elementalName + API_ELEMENTAL_TYPES_EXT } alt={ elementalName } className={ className } />
  </div>;


const CombatClassIcon = ({ combatClassName, className }) =>
  <div className={ className }>
    <img src={ API_URL + API_COMBAT_CLASSES_PATH + combatClassName + API_COMBAT_CLASSES_EXT } alt={ combatClassName } className={ className } />
  </div>;

const Creature = ({ creatures, skills, match }) => {
  let profile = 0;
  let id = parseInt(match.params.id,10);
  creatures.map((profileitem) => {
    if (profileitem.id === id) {
      profile = profileitem;
    }
    return true;
  });

  return <div className="container creature">
    <ReportDataUI creatureId={ profile.id } />
    <CreaturePortrait src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } altText={ profile.name } cssClasses="portrait" />
    { /*<Ranking rank={ profile.rank } />*/ }
    <div className="row">
      <div className="col-xs-6 text-center">
        <ElementalIcon elementalName={ profile.element_type } className="mini" /> <span className="text-capitalize">{ profile.element_type }</span>
      </div>
      <div className="col-xs-6 text-center">
        <CombatClassIcon combatClassName={ profile.combat_type } className="mini" /> <span className="text-capitalize">{ profile.combat_type }</span>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <p>Skills:</p>
        <ul>
          { skills.map((skill, i) =>
            <li key={ i }>
              { skill.name }
            </li>
          ) }
        </ul>
        <p>Evolves into: <EvolvesInto creatureId={ profile.evolution } creatures={ creatures } /></p>
        <p>Can be killed the following levels:
          <ul>
            <li><Link to="">Mystical Forest - Normal - 6</Link></li>
            <li><Link to="">Volcano - Advanced - 3</Link></li>
            <li><Link to="">World-Tree Mountain - Nightmare - 7</Link></li>
          </ul>
        </p>
        <div className="table-responsive">
          <table className="table">
            <thead>
            <tr>
              <th>&nbsp;</th>
              <th>RANK 1</th>
              <th>RANK 2</th>
              <th>RANK 3</th>
              <th>RANK 4</th>
              <th>RANK 5</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Health</td>
              <td>{ profile.rank1_base_health }</td>
              <td>{ profile.rank2_base_health }</td>
              <td>{ profile.rank3_base_health }</td>
              <td>{ profile.rank4_base_health }</td>
              <td>{ profile.rank5_base_health }</td>
            </tr>
            </tbody>
          </table>
        </div>
        <p>Attack: { profile.rank1_base_attack }</p>
        <p>Defense: { profile.rank1_base_defense }</p>
        <p>Speed: { profile.rank1_base_speed }</p>
        <p>Critical Chance: { profile.rank1_base_crit }</p>
        <p>Critical Damage: { profile.rank1_base_crit_damage }</p>
        <p>Accuracy: { profile.rank1_base_accuracy }</p>
        <p>Resistance: { profile.rank1_base_resistance }</p>
      </div>
    </div>
    <CreaturePhoto src={ API_URL + API_PHOTO_PATH + profile.id + API_PHOTO_FILE_EXT } altText={ profile.name } cssClasses="photo img-fluid" />
  </div>
};

const mapStateToProps = ({ creatures, creature: {profile, skills} }) => ({
  creatures,
  profile,
  skills
});

export default connect(mapStateToProps)(Creature);
