import React from 'react';

import useFetchWithReducer from './hooks/useFetchWithReducer';
import View from './View';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';

export default function Controller() {
	const { loading, error, data } = useFetchWithReducer(
		'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
	);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage error={error} />;
	}

	return <View data={data.drinks} />;
}
