// src/components/UserData.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/userSlice';

function UserData() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Data</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Username: {userData.username}</p>
    </div>
  );
}

export default UserData;
