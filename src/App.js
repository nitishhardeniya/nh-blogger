import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import PostStore from './stores/poststore';
import './App.css';
// import Home from './components/home';
import Posts from './components/posts';
import PostDetails from './components/postdetails';
import UserDetails from './components/userdetails';

const store = PostStore();

const Section = () => (
		<BrowserRouter>
			<Switch>
				{/* <Route path="/" component={Home} exact /> */}
				<Route path="/" component={Posts} exact />
				<Route path="/posts/:userid" component={Posts} />
				<Route path="/postdetails/:postid" component={PostDetails} />
				<Route path="/userdetails/:userid" component={UserDetails} />
			</Switch>
		</BrowserRouter>
	);

function App() {
  return (
    <div className="App">
      <div className="App-header">
       	<div className="top-bar">
			<div className="title-text">Blogger</div>
		</div>

		<div className="app-page">
			<Provider store={store}>
				<Section />
			</Provider>
		</div>
        
      </div>
    </div>
  );
}

export default App;
