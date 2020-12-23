import { BASE_URL,POSTS,USER, USER_LISTING } from './../constants/config';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_DETAILS = 'RECEIVE_POST_DETAILS';
export const GET_USER_POSTS = 'GET_USER_POSTS';

export const receivedPosts = res => ({
	type: RECEIVE_POSTS,
	posts: res,
});

export const receivedPostDetails = res => ({
	type: RECEIVE_POST_DETAILS,
	postDetails: res,
});

export const getUserPosts = () => ({
	type : GET_USER_POSTS
})


export function fetchPosts(userId) {
	return function (dispatch) {
	   //dispatch(getUserPosts());
	   return fetch(BASE_URL+POSTS+`${userId ? USER+userId : ''}`)
				.then(resp=>resp.json())
				.then((data)=>{
					//Dispatch
					dispatch(receivedPosts(data));
				})
				.catch(err=>console.log(err.message))
 	};
}

export function fetchPostDetails(postId) {
	return function (dispatch) {
	   //dispatch(getUserPosts());
	   return fetch(BASE_URL+'posts/'+postId)
				.then(resp=>resp.json())
				.then((data)=>{
					//Dispatch
					dispatch(receivedPostDetails(data));
				})
				.catch(err=>console.log(err.message))
 };
}