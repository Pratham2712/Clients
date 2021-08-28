const initstate = {
	contentData: [],
	isLoading: true
};

const contentReducers = (state = initstate, action) => {
	switch (action.type) {
		case 'FETCH_DATA':
			return {
				...state,
				contentData: action.payload.getData,
				isLoading: false
			};
		case 'CREATE':
			return {
				...state,
				contentData: action.payload.createData
			};
		case 'LOADING':
			return {
				...state,
				isLoading: true
			};
		default:
			return {
				...state
			};
	}
};

export default contentReducers;
