import React from 'react';
import useProfileContext from '../contexts/profile/profileContext';

const ChangeTeam = () => {
  const { switchTeam } = useProfileContext();
  return (
    <>
      <button
        type="button"
        className="profile-button"
        onClick={() => switchTeam('team', 'Kendo for Angular')}
      >
        Angular
      </button>
      <button
        type="button"
        className="profile-button"
        onClick={() => switchTeam('team', 'Kendo for React')}
      >
        React
      </button>
      <button
        type="button"
        className="profile-button"
        onClick={() => switchTeam('team', 'Kendo for Vue')}
      >
        Vue
      </button>
    </>
  );
};

export default ChangeTeam;
