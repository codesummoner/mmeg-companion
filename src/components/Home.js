import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <p><Link to="/creatures">Browse Creatures</Link></p>
          <p><Link to="/skills">Browse Skills</Link></p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
