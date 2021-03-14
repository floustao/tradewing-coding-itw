export default function ErrorMessage({ error }) {
	return <p>{typeof error === 'string' ? error : 'Something went wrong'}</p>;
}
