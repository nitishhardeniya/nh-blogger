import React from 'react';

const Comments = (props) => {
	let {commentsData:comments} = props;
	return (
		<div className="post-content">{comments.map((comment)=>{
			return (<div className="post-comment" key={comment.id}>{comment.name}</div>)
		})}</div>
	);
}
export default Comments;