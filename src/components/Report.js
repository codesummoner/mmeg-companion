import React from 'react';

const Report = ({ match }) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>Report data</h1>
          <p>ID: { match.params.id }</p>
        </div>
      </div>
    </div>
  </div>
);

export default Report;
