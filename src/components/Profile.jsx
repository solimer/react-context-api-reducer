import React from 'react';
import useProfileContext from '../contexts/profile/profileContext';
import User from './User';

const Profile = () => {
  const { userInformation } = useProfileContext();
  return (
    <div className="profile">
      <img src={userInformation.companyImage} alt="" />
      <User />
    </div>
  );
};

export default Profile;
