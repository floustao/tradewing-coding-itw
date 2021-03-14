import React from 'react';

export default function View({ data = [] }) {
	return (
		<ul>
			{data.map((drink) => {
				return <li>{drink.strDrink}</li>;
			})}
		</ul>
	);
}
