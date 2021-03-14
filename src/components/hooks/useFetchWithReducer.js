import { useEffect, useReducer } from 'react';

export default function useFetchWithReducer(url, options) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, options);
				const data = await response.json();
				dispatch({ type: 'success', payload: data });
			} catch (error) {
				dispatch({ type: 'error', payload: error });
			}
		};
		fetchData();
	}, []);

	const { loading, error, data } = state;

	return {
		loading,
		error,
		data,
	};
}

const initialState = {
	loading: true,
	error: {},
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'success':
			return {
				loading: false,
				error: '',
				data: action.payload,
			};

		case 'error':
			return {
				loading: false,
				error: action.payload,
				data: [],
			};

		case 'loading':
			return {
				loading: true,
				error: '',
				data: [],
			};
		default:
			return state;
	}
};
