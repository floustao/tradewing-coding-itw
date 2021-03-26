import { useState } from 'react';
import { cardData } from '../../shared/constants';

export default function useSearchBar() {
	const [cards, setCards] = useState(cardData);

	const handleChange = (event) => {
		const userInput = event.target.value;
		const filteredCards = cardData.filter((card) => {
			const { name, speakerName, description } = card;
			return (
				name.includes(userInput) ||
				speakerName.includes(userInput) ||
				description.includes(userInput)
			);
		});

		setCards(filteredCards);
	};

	return {
		handleChange,
		cards,
	};
}
