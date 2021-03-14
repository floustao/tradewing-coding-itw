import { useEffect, useState } from 'react';

export default function useFetchWithState(url, options) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, options);
				const data = await response.json();
				setData(data);
				setError('');
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return {
		loading,
		error,
		data,
	};
}
