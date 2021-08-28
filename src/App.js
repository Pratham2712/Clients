import React, { useEffect } from 'react';
import logo from './img/logo.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import './App.css';
import { loadData } from './actions/contentAction';

const App = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(loadData());
		},
		[ dispatch ]
	);

	return (
		<div>
			<nav>
				<div className="d-flex justify-content-center border align-items-center py-1">
					<div className="navbar-brand">
						<img src={logo} width="50" height="50" className="d-inline-block align-top rounded" alt="" />
					</div>
					<h1 className="h1 text-warning">Events</h1>
				</div>
			</nav>
			<section>
				<div className="d-flex flex-column justify-content-center  align-items-center">
					<div className="  shadow-lg content ">
						<Posts />
					</div>
					<div className="  border form">
						<Form />
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
