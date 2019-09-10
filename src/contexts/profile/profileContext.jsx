import { useReducer } from 'react';
import createUseContext from 'constate';
import reducer from './profileReducer';
import actions from './profileActions';

const initialState = {
  userInformation: {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoken',
    fullName: 'Kendoken No Michi',
    team: 'KendoReact',
    count: 0,
  },
};

const useProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userInformation } = state;
  const increment = () => {
    dispatch({
      type: actions.INCREMENT,
    });
  };
  const decrement = () => {
    dispatch({
      type: actions.DECREMENT,
    });
  };

  const switchTeam = (property, value) => {
    dispatch({
      type: actions.SWITCH_TEAM,
      payload: { property, value },
    });
  };

  return { userInformation, increment, decrement, switchTeam };
};

export default createUseContext(useProfile);
