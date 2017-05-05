import React from 'react';
import { connect } from 'react-redux';

const Creature = ({ match, profile, skills }) => {
  //console.log(setCharacter(match.params.id));
  //console.log('match', match);
  //console.log('profile', profile);
  return <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
};

const mapStateToProps = ({ creature: { profile, skills } }) => ({
  profile,
  skills,
});

export default connect(mapStateToProps)(Creature);
