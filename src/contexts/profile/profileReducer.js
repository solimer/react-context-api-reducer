import actions from './profileActions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.DECREMENT:
      return { count: state.userInformation.count - 1 };
    case actions.INCREMENT:
      return { count: state.userInformation.count + 1 };
    case actions.SWITCH_TEAM:
      return {
        ...state,
        userInformation: {
          ...state.userInformation,
          [action.payload.property]: action.payload.value,
        },
      };
    default:
      throw new Error('Undefined error');
  }
};

export default reducer;
