import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import Loading from '../Loading';

const Posts = () => {
	const { contentData, isLoading } = useSelector((state) => state.top);
	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<div className="px-2 d-flex flex-column-reverse">
					{contentData.map((data) => <Post data={data} key={data._id} />)}
				</div>
			)}
		</div>
	);
};

export default Posts;
