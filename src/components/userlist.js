import React, { Component } from 'react';
import Card from './card';
import Loader from './hoc/loader';

class UserList extends Component {
	render() {

		let {users:allUsers} = this.props;
		return (
			<div className="items-container">
				{ allUsers.map((item)=>{
					return <Card key={item.id} userInfo={item} {...this.props}/>
				})}
			</div>
		);
	}
}


export default Loader('users')(UserList);