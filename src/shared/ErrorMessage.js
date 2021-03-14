import PropTypes from 'prop-types';

export default function ErrorMessage({ error }) {
	return <p>{typeof error === 'string' ? error : 'Something went wrong'}</p>;
}

Error.propTypes = {
	error: PropTypes.any,
};
