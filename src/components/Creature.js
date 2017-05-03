/**
 * Libs
 */
import React from 'react';
import { connect } from 'react-redux';

const Creature = ({ match, creatures = {} }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div>
            {
              creatures.reduce((creature, i) => {
                return <div key={ i }>
                  <p>Name: { creature.name }</p>
                  <p>Rank: { creature.rank } of possible { creature.max_rank }</p>
                  <p>element_type: { creature.element_type }</p>
                  <p>combat_type: { creature.combat_type }</p>
                  <p>skills: { creature.skills }</p>
                  <p>evolution: { creature.evolution }</p>
                  <p>health: { creature.health }</p>
                  <p>attack: { creature.attack }</p>
                  <p>defense: { creature.defense }</p>
                  <p>speed: { creature.speed }</p>
                  <p>crit: { creature.crit }</p>
                  <p>crit_damage: { creature.crit_damage }</p>
                  <p>accuracy: { creature.accuracy }</p>
                  <p>resistance: { creature.resistance }</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ creatures }) => ({
  creatures
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Creature);
