import React from 'react';
import PropTypes from 'prop-types';

export default function PropeTypes(props) {
  return (
       <div>
      <h1>{`hello ${props.name}`}</h1>
      {/* <h1>{props.age}</h1>
      <h1>{props.university}</h1> */}
    </div>
  );
}


//propTypes check whether the props are valid to the data or not
//if not, then it throws a warning
PropeTypes.propTypes={
    name:PropTypes.string,
//     age:PropTypes.number,
//     university:PropTypes.string
// 
}
