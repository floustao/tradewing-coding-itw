import React from 'react';

import useApi from './hooks/useApi';
import View from './View';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';
import { API_STATES } from '../shared/constants';

export default function Controller() {
	const { apiState, error, data } = useApi(
		'https://jsonplaceholder.typicode.com/posts'
	);

	switch (apiState) {
		case API_STATES.ERROR:
			return <ErrorMessage error={error} />;

		case API_STATES.SUCCESS:
			return <View data={data} />;

		default:
			return <Loader />;
	}
}
