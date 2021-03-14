import axios from 'axios';
import { useEffect, useReducer, useCallback } from 'react';

import { API_STATES } from '../../shared/constants';

export default function useApi(url, options) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = useCallback(async () => {
		try {
			const response = await axios.get(url, options);
			dispatch({ type: API_STATES.SUCCESS, payload: response.data });
		} catch (error) {
			dispatch({ type: API_STATES.ERROR, payload: error });
		}
	}, [url, options]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const { apiState, error, data } = state;

	return {
		apiState,
		error,
		data,
	};
}

const initialState = {
	apiState: API_STATES.LOADING,
	error: {},
	data: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case API_STATES.SUCCESS:
			return {
				apiState: API_STATES.SUCCESS,
				error: '',
				data: action.payload,
			};

		case API_STATES.ERROR:
			return {
				apiState: API_STATES.ERROR,
				error: action.payload,
				data: [],
			};

		default:
			return state;
	}
};
