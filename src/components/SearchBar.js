import React from 'react';

export default function SearchBar({ onChange, count }) {
	return (
		<>
			<input
				type='search'
				id='site-search'
				name='q'
				aria-label='Search through site content'
				onChange={onChange}
			/>

			<p>total: {count}</p>
		</>
	);
}
