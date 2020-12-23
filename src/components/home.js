import React, { Component } from 'react';
import {connect} from 'react-redux';

import UserList from './userlist';

import {fetchUsers} from './../actions/useractions';

class Home extends Component {
	
	constructor(){
		super();
		this.state = {
			users:[]
		}
	}

	componentDidMount(){
		this.props.getAllUsers();
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			users:nextProps.users
		})
	}
	

	render() {
		return (
			<React.Fragment>
				{this.state.users && this.state.users.length && <UserList users={this.state.users} {...this.props}/>}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users : state.posts.users
	}
}

const mapDispatchToProps = {
	getAllUsers : fetchUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
