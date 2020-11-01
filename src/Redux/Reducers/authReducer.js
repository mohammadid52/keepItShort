import { message } from 'antd';
import * as actionTypes from '../Types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
      message.success('Sign up successfull');
      return state;
    case actionTypes.REGISTER_ERR:
      message.error(action.err, 2);
      return state;
    case actionTypes.SIGN_IN:
      message.success('Welcome Back...', 2);
      return state;
    case actionTypes.SIGN_IN_ERR:
      message.error(action.err, 2);
      return state;
    case actionTypes.SIGN_OUT:
      message.success('Logout successfull', 2);
      return state;
    case actionTypes.SIGN_OUT_ERR:
      message.error(action.err, 2);
      return state;
    default:
      return state;
  }
};

export default authReducer;
