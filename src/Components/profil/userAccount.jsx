import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import users from './user';

const Profile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = users.find((user) => user.id === userId);
    setUserData(user);
  }, [userId]);
  
  return (
    <div>
      {userData ? (
        <div>
          <h2>Profil de {userData.name}</h2>
          <p>Email : {userData.email}</p>
        </div>
      ) : (
        <p>Utilisateur introuvable</p>
      )}
    </div>
  );
};

export default Profile;
