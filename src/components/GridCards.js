import React from 'react';
import Card from './Card';

export default function GridCards({ cards = [] }) {
	return cards.map((card) => {
		return <Card key={card.id} cardInfo={card} />;
	});
}
