import React, { Component } from 'react';
import { connect } from 'react-redux';

import {BASE_URL,COMMENTS } from './../constants/config';
import Comments from './comments';
import {fetchPostDetails} from './../actions/postactions';

class Postdetails extends Component {
	constructor(){
		super();
		this.state = {
			postDetails : [],
			showComments : false,
			allComments:[]
		}
	}

	componentDidMount(){
		this.props.getPostInfo(this.props.match.params.postid);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			postDetails:nextProps.postDetails
		})
	}

	loadComments(postId) {

		this.setState({
			showComments : !this.state.showComments
		},()=>{
			if(this.state.showComments){
				fetch(BASE_URL+COMMENTS+postId)
				.then(resp=>resp.json())
				.then((data)=>{
					//console.log(data,"Posts comments..")
					this.setState({
						allComments:data
					})
				})
				.catch(err=>console.log(err.message))
			}
			
		})
	}

	deletePost(postId,userId){
		//Delete API
		fetch(BASE_URL+'posts/'+postId, {
	        method: 'DELETE'
	    })
	    .then(response => response.json())
	    .then((data)=>{
	    	//console.log(data,userId);
	    	this.props.history.push('/posts/'+userId);
	    })
	}

	render() {
		let {postDetails} = this.state;
		return (
			<React.Fragment>
				<div className="post-content">

					{postDetails && postDetails.id && <div className="item-button" style={{position:'absolute',top:'10px',right:'10px'}} onClick={this.deletePost.bind(this,postDetails.id,postDetails.userId)}>Delete post</div>}
					<div className="title">{postDetails.title}</div>
					<div className="info">{postDetails.body}</div>

					<div className="item-link" onClick={this.loadComments.bind(this,postDetails.id)} >{this.state.showComments ? 'hide comments' : 'show comments'}</div>

					{this.state.showComments && <Comments commentsData={this.state.allComments}/>}
				</div>	
			</React.Fragment>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		postDetails : state.posts.postDetails
	}
}

const mapDispatchToProps = {
	getPostInfo : fetchPostDetails
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Postdetails);
