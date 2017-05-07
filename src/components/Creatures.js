import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setCurrentCreature,
  getCreatureProfile,
} from '../reducers/creature/actions';

import './Creatures.css';

const CreatureMiniPortrait = ({ src, altText, cssClasses }) =>
  <div>
    <img src={ src } alt={ altText } className={ cssClasses } />
  </div>;

const Creatures = ({ creatures, setCreature }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h3>FIRE</h3>
        <div className="creatures fire">
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'fire') {
                console.log(profile.id);
                return <Link to={`/creatures/${profile.id}`} onClick={ setCreature(i + 1) } key={ profile.id } className="pull-left">
                  <CreatureMiniPortrait src={ profile.portrait } altText={ profile.name } cssClasses="portrait"/>
                </Link>
              } else {
                return '';
              }
            })
          }
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>AIR</h3>
        <div className="creatures air">
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'air') {
                console.log(profile.id);
                return <Link to={`/creatures/${profile.id}`} onClick={ setCreature(i + 1) } key={ profile.id } className="pull-left">
                  <CreatureMiniPortrait src={ profile.portrait } altText={ profile.name } cssClasses="portrait"/>
                </Link>
              } else {
                return '';
              }
            })
          }
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>EARTH</h3>
        <div className="creatures earth">
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'earth') {
                console.log(profile.id);
                return <Link to={`/creatures/${profile.id}`} onClick={ setCreature(i + 1) } key={ profile.id } className="pull-left">
                  <CreatureMiniPortrait src={ profile.portrait } altText={ profile.name } cssClasses="portrait"/>
                </Link>
              } else {
                return '';
              }
            })
          }
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>WATER</h3>
        <div className="creatures water">
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'water') {
                console.log(profile.id);
                return <Link to={`/creatures/${profile.id}`} onClick={ setCreature(i + 1) } key={ profile.id } className="pull-left">
                  <CreatureMiniPortrait src={ profile.portrait } altText={ profile.name } cssClasses="portrait"/>
                </Link>
              } else {
                return '';
              }
            })
          }
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
