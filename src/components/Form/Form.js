import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/contentAction';
import { loadData } from '../../actions/contentAction';

const Form = () => {
	const [ postData, setPostData ] = useState({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: ''
	});

	const dispatch = useDispatch();

	const handelSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
		setPostData({
			creator: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: ''
		});
		dispatch(loadData());
	};
	return (
		<div className="px-3 py-3">
			<h4 className="mb-3 text-center">Create your Events</h4>
			<form onSubmit={handelSubmit}>
				<div className="mb-1">
					<label for="exampleInputEmail1" className="form-label">
						Creator
					</label>
					<input
						type="text"
						name="creator"
						className="form-control form-control-sm"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={postData.creator}
						onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
					/>
				</div>
				<div className="mb-1">
					<label for="exampleInputEmail1" className="form-label">
						Title
					</label>
					<input
						name="title"
						type="text"
						className="form-control form-control-sm"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={postData.title}
						onChange={(e) => setPostData({ ...postData, title: e.target.value })}
					/>
				</div>
				<div className="mb-1">
					<label for="exampleInputEmail1" className="form-label">
						Message
					</label>
					<input
						name="message"
						type="text"
						className="form-control form-control-sm"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={postData.message}
						onChange={(e) => setPostData({ ...postData, message: e.target.value })}
					/>
				</div>
				<div className="mb-1">
					<label for="exampleInputEmail1" className="form-label">
						Tags
					</label>
					<input
						name="tags"
						type="text"
						className="form-control form-control-sm"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={postData.tags}
						onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
					/>
				</div>
				<div className="mb-1">
					<label for="exampleInputEmail1" className="form-label " />
					<FileBase
						type="file"
						multiple={false}
						className="form-control form-control-sm "
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
					/>
				</div>
				<div className="d-block   mt-3 ">
					<button type="submit" className="btn btn-warning   ">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
