import React, { Component } from 'react';

const loader = (inProps) => (WrapperComponent) => {
	return class Loader extends Component {
		render(){
			//console.log(this.props[inProps])
			return this.props[inProps].length === 0 ? (
					<div className="loader" id="loader-1"></div>
				) :<WrapperComponent {...this.props} />;
			}
	}
}

export default loader;