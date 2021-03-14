import PropTypes from 'prop-types';

export default function ErrorMessage({ error = {} }) {
	console.log({ error });
	return (
		<p>
			{typeof error === 'object' && error.message
				? error.message
				: 'Something went wrong'}
		</p>
	);
}

Error.propTypes = {
	error: PropTypes.any,
};
