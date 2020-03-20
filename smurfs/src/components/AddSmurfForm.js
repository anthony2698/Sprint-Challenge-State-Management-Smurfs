import React, { useState } from 'react';

import { postData } from "../actions";
import { connect } from "react-redux";

const AddSmurfForm = props => {
  const[smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  });

const handleChanges = event => {
    setSmurf({
        [event.target.name]: event.target.value
    });
    console.log('+++++++', smurf);
  }

const handleSubmit = event => {
    event.preventDefault();
    props.postData(smurf);
    console.log('+++++++', smurf);
    setSmurf({
      name: '',
      age: '',
      height: '',
  });
}

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' placeholder='add name..' value={smurf.name} onChange={handleChanges}/>
      <input type='text' name='age' placeholder='add age..' value={smurf.age} onChange={handleChanges}/>
      <input type='text' name='height' placeholder='add height..' value={smurf.height} onChange={handleChanges}/>
      <button>Add</button>
    </form>
  );
};


const mapStateToProps = state => {
return {
    isFetchingData: state.isFetchingData
    }
};

export default connect(
  mapStateToProps,
  { postData }
)(AddSmurfForm);