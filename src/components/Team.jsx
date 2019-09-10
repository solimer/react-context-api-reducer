import React from 'react';
import useProfileContext from '../contexts/profile/profileContext';

const Team = () => {
  const { userInformation } = useProfileContext();
  return (
    <div className="team">
      <p className="profile-team">{userInformation.team}</p>
    </div>
  );
};

export default Team;
