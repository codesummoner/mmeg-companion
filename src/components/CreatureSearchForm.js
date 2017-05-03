import React from 'react';
import { FormGroup,  FormControl } from 'react-bootstrap';

const CreatureSearchForm = () =>
  <form className="navbar-form navbar-right">
    <FormGroup
      controlId="formBasicText"
    >
      <FormControl
        type="text"
        value=""
        placeholder="Search"
      />
      <FormControl.Feedback />
    </FormGroup>
  </form>;

export default CreatureSearchForm;