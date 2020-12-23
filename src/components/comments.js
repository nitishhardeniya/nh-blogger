import React from 'react';

const Comments = (props) => {
	let {commentsData:comments} = props;
	return (
		<div className="post-content d-flex no-border">{comments.map((comment)=>{
			return (<div className="post-comment" key={comment.id}>{comment.name}</div>)
		})}</div>
	);
}
export default Comments;