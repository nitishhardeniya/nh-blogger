import React, { Component } from 'react';
import user_place from './../assets/images/user_place.png';

export default class Card extends Component {
	
	gotoPost(userId){
		this.props.history.push('/posts/'+userId);
	}


	render() {
		let { id, name, company} = this.props.userInfo;
		return (<div className="item">
				<div className="card-content">
					<img src={user_place} alt="user_icon" width="150" height="150" />
					<div className="title"> {name.length < 20 ? name : name.substring(0, 100)+'...'} </div>
					<div className="info">{company.name} </div>
				</div>

				<div className="card-footer">
					<button className="item-button" onClick={this.gotoPost.bind(this,id)}>Blog posts</button>
				</div>
			</div>);
	}
}