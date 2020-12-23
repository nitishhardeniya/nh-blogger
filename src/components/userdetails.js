import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUserDetails} from './../actions/useractions';

const UserDetails = (props) => {

    useEffect(() => {
        props.getUserInfo(props.match.params.userid);
    } ,[]);
    
    const  { userDetails } = props;
    return (
        <React.Fragment>
            {userDetails && <div className="user-content full-view">
                <div className="title-24">{userDetails.name}</div>
                <div className="item-link">{userDetails.username}</div>
                <div className="info">{userDetails.email}</div>
                <a href={'http://'+userDetails.website} target="_blank" className="item-link">{userDetails.website}</a>
                <div className="info">{ userDetails.company && userDetails.company.name}</div>
            </div>}	
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
	return {
		userDetails : state.results.userDetails
	}
}

const mapDispatchToProps = {
	getUserInfo : fetchUserDetails
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(UserDetails);
