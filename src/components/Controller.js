import React from 'react';
import GridCards from './GridCards';
import SearchBar from './SearchBar';

import useSearchBar from '../components/hooks/useSearchBar';

export default function Controller() {
	const { handleChange, cards } = useSearchBar();
	const countCards = cards.length;

	return (
		<>
			<SearchBar onChange={handleChange} count={countCards} />
			<GridCards cards={cards} />
		</>
	);
}
