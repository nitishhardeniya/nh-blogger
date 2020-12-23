import React, { Component } from 'react';

const loader = (inProps) => (WrapperComponent) => {
	return class Loader extends Component {
		render(){
			console.log(this.props)
			return !this.props[inProps] ? (
				<div className="loader" id="loader-1">
					<WrapperComponent {...this.props}/>
				</div>
				) : <WrapperComponent {...this.props}/>;
			}
	}
}

export default loader;