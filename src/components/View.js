import React from 'react';
import PropTypes from 'prop-types';

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

View.propTypes = {
	data: PropTypes.array,
};
