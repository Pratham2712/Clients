import axios from 'axios';

const url = 'http://localhost:5000/posts';

/* const postUrl = (newPost) => axios.post(url, newPost); */

export const loadData = () => async (dispatch) => {
	try {
		dispatch({ type: 'LOADING' });
		const { data } = await axios.get(url);

		dispatch({
			type: 'FETCH_DATA',
			payload: {
				getData: data
			}
		});
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await axios.post(url, post);

		dispatch({
			type: 'CREATE',
			payload: {
				createData: data
			}
		});
	} catch (error) {
		console.log(error.message);
	}
};
