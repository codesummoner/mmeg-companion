import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentCreature, getCreatureProfile } from '../reducers/creature/actions';
import { API_URL, API_PORTRAIT_PATH, API_PORTRAIT_FILE_EXT } from '../constants';

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
          <ul>
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'fire') {
                return <li><Link to={`/creatures/${profile.id}`} key={ profile.id } className="pull-left">
                    { /* <CreatureMiniPortrait src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } altText={ profile.name } cssClasses="portrait"/> */ }
                    { profile.name }
                </Link></li>
              } else {
                return '';
              }
            })
          }
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>WATER</h3>
        <div className="creatures water">
          <ul>
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'water') {
                return <li><Link to={`/creatures/${profile.id}`} key={ profile.id } className="pull-left">
                  { /* <CreatureMiniPortrait src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } altText={ profile.name } cssClasses="portrait"/> */ }
                  { profile.name }
                </Link></li>
              } else {
                return '';
              }
            })
          }
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>EARTH</h3>
        <div className="creatures earth">
          <ul>
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'earth') {
                return <li><Link to={`/creatures/${profile.id}`} key={ profile.id } className="pull-left">
                  { /* <CreatureMiniPortrait src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } altText={ profile.name } cssClasses="portrait"/> */ }
                  { profile.name }
                </Link></li>
              } else {
                return '';
              }
            })
          }
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>AIR</h3>
        <div className="creatures air">
          <ul>
          {
            creatures.map((profile, i) => {
              if (profile.element_type === 'air') {
                return <li><Link to={`/creatures/${profile.id}`} key={ profile.id } className="pull-left">
                  { /* <CreatureMiniPortrait src={ API_URL + API_PORTRAIT_PATH + profile.id + API_PORTRAIT_FILE_EXT } altText={ profile.name } cssClasses="portrait"/> */ }
                  { profile.name }
                </Link></li>
              } else {
                return '';
              }
            })
          }
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
