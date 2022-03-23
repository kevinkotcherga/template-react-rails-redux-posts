import React from 'react';
import { useSelector } from 'react-redux';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { isEmpty } from './components/Utils';

const App = () => {
	const posts = useSelector(state => state.postReducer);

	return (
		<div>
			<h1>My list of projects</h1>
			<PostForm />
			<div>
				{!isEmpty(posts) &&
					posts.map((post, index) => <Post post={post} key={index} />)}
			</div>
		</div>
	);
};

export default App;
