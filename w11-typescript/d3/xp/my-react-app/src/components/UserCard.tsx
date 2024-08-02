import React from 'react';

interface UserCardProps {
  name?: string; 
  age?: number;  
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  const defaultName = "Guest";
  const defaultAge = "Unknown";

  return (
    <div style={{ padding: '10px' }}>
      <h2>User Card</h2>
      <p><strong>Name:</strong> {name ? name : defaultName}</p>
      <p><strong>Age:</strong> {age !== undefined ? age : defaultAge}</p>
    </div>
  );
};

export default UserCard;
