const initialState = {
  id: '',
  username: '',
  profile_pic: ''
};

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo(id, username, profile_pic) {
  return {
    type: GET_USER_INFO,
    payload: {
      id,
      username,
      profile_pic
    }
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      console.log(action.payload);
      return Object.assign({}, state, {
        id: action.payload.id,
        username: action.payload.username,
        profile_pic: action.payload.profile_pic
      });
    default:
      return state;
  }
}
