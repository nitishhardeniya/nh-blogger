import {BASE_URL,USER_LISTING} from './../constants/config';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';

export const receivedUsers = res => ({
	type: RECEIVE_USERS,
	users: res,
});

export const receivedUserDetails = res => ({
	type: RECEIVE_USER_DETAILS,
	userDetails: res,
});

export function fetchUsers(userId) {
	return function (dispatch) {
	   //dispatch(getUserPosts());
	   return fetch(BASE_URL+USER_LISTING)
				.then(resp=>resp.json())
				.then((data)=>{
					//Dispatch
					dispatch(receivedUsers(data));
				})
				.catch(err=>console.log(err.message))
 };
}

export function fetchUserDetails(userId) {
	return function (dispatch) {
		//dispatch(getUserPosts());
		return fetch(BASE_URL+USER_LISTING+userId)
				 .then(resp=>resp.json())
				 .then((data)=>{
					 //Dispatch
					 dispatch(receivedUserDetails(data));
				 })
				 .catch(err=>console.log(err.message))
  };
}