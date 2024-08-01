import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../redux/ageSlice';
import logo from '../logo.svg'; 

const AgeCounter = () => {
  const age = useSelector((state) => state.age.value);
  const loading = useSelector((state) => state.age.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={() => dispatch(ageUpAsync(1))}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync(1))}>Age Down</button>
      {loading && <img src={logo} alt="loading" style={{ width: '50px' }} />}
    </div>
  );
};

export default AgeCounter;
