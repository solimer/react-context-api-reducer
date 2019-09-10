import React from 'react';
import useProfileContext from '../contexts/profile/profileContext';
import Team from './Team';
import ChangeTeam from './changeTeam';

const User = () => {
  const { userInformation } = useProfileContext();
  return (
    <div className="user">
      <a href={userInformation.url}>
        <img src={userInformation.userImage} alt="" />
      </a>
      <h1 className="profile-userName">{userInformation.userName}</h1>
      <p className="profile-fullName">{userInformation.fullName}</p>
      <Team />
      <ChangeTeam />
    </div>
  );
};

export default User;
