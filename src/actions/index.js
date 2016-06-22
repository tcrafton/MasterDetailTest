import axios from 'axios';
import _ from 'lodash';
import { USER_SELECTED, FETCH_USERS } from './types';

export function fetchUsers(){
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function selectUser(user){
  const assignDepartment = function(user){
    if (user.id === 3) {
      return { department: 'HR'};
    } else if (user.id % 2 === 0) {
      return { department: 'I.T.'};
    } else {
      return { department: 'Admin'}
    }
  }

  return {
    type: USER_SELECTED,
    payload: Object.assign({}, user, user.address, user.company, (user.id % 2 === 0 ? {shouldFire : true} : {shouldFire : false}), assignDepartment(user))
  };
}
