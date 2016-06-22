import { combineReducers } from 'redux';
import UsersReducer from './usersReducer';
import SelectedUser from './selectedUserReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: UsersReducer,
  selectedUser: SelectedUser,
  form: formReducer
});

export default rootReducer;
