import React from 'react';

export default function View({ data = [] }) {
	return (
		<ul>
			{data.map((item, index) => {
				const key = `${index}-${item.title.toLowerCase().replace(/ /g, '-')}`;

				return <li key={key}>{item.title}</li>;
			})}
		</ul>
	);
}
