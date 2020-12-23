import { RECEIVE_POSTS,RECEIVE_POST_DETAILS } from '../actions/postactions';
import { RECEIVE_USERS } from '../actions/useractions';

const defaultPostState = {};
export default (state = defaultPostState, action) => {
	switch(action.type){
		case 'GET_USER_POSTS':
			return [
				...state,
				action.userId
			]
		case RECEIVE_USERS:
			return { ...state, users: action.users}
	    case RECEIVE_POSTS:
	       return { ...state, posts: action.posts };
	    case RECEIVE_POST_DETAILS:
	       return { ...state, postDetails: action.postDetails };
		default :
			return state;
	}
}