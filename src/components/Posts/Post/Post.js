import React from 'react';
import './Post.css';

const Post = ({ data }) => {
	const { title, creator, message, selectedFile, tags, createdAt } = data;
	return (
		<div>
			<div className=" mt-5 font-weight-bold">
				<span style={{ color: '#C93079' }}>creator:</span> {creator}
			</div>
			<img src={selectedFile} className="w-100  border" alt="image" />
			<div className="d-flex justify-content-between px-3 ">
				<div className="font-weight-lighter" style={{ color: '#0BA3E0', fontSize: '15px' }}>
					{tags}
				</div>
				<i className="fas fa-ellipsis-h pt-1 text-muted" style={{ cursor: 'pointer', fontSize: '20px' }} />
			</div>
			<h3 className="mt-2 pl-3">{title}</h3>
			<div className="pl-3 text-muted h6">{message}</div>
		</div>
	);
};

export default Post;
