import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from './../actions/postactions';

class Posts extends Component {
	componentDidMount(){
		// this.props.getUserPosts(this.props.match.params.userid);
		this.props.getUserPosts();
	}

	postDetails = (postId) => {
		this.props.history.push('/postdetails/'+postId);
	}

	viewUser = (event,userId) => {
		event.stopPropagation();
		this.props.history.push('/userdetails/'+userId);
	}

	render() {
		const { posts } = this.props;
		return (
			<React.Fragment>
				<div className="info post-body">
					{posts && posts.length > 0 && posts.map((item)=>{
							return (
								<div key={item.id} className="post-content" onClick={() => this.postDetails(item.id)}>
									<div className="title">{item.title.length < 100 ? item.title : item.title.substring(0, 100)+'...'}</div>
									<span className="username item-link" onClick={(e) => this.viewUser(e,item.userId)}>User {item.userId}</span>
									{/* <div className="post-button" onClick={this.postDetails.bind(this,item.id)} >Post details</div> */}
								</div>)
						})
					}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts : state.results.posts
	}
}

const mapDispatchToProps = {
	getUserPosts : fetchPosts
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Posts);
