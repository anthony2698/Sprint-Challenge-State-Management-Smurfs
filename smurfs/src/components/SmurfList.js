import React from "react";
import { connect } from "react-redux";

const SmurfList = (props) => {
  return (
    <div>
        {props.smurfs.map(smurf => 
        <div>
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(SmurfList);