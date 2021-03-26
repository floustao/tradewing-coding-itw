import React from 'react';
import styled from 'styled-components';

import ProfileIcon from '../assets/User.svg';

export default function Card({ cardInfo = {} }) {
	const {
		name,
		description,
		speakerName,
		audienceCapacity,
		audienceCount,
		dateString,
		isLive,
		picture,
		id,
	} = cardInfo;

	const isFull = audienceCount >= audienceCapacity;

	return (
		<Container id={id}>
			<ImageContainer>
				<TopImage src={picture} alt='session speaker' />

				{isLive && <Tag isNotLive={!isLive}>Live</Tag>}
			</ImageContainer>

			<TextContainer>
				<Title>{name}</Title>
				<DateInfo>{dateString}</DateInfo>

				<Paragraph>{description}</Paragraph>

				<Signature>{speakerName}</Signature>

				<CardFooter isNotLive={!isLive}>
					<Button disabled={isFull}>
						{isFull ? 'Session is Full' : 'Join'}
					</Button>

					<Participants>
						<img src={ProfileIcon} alt='profile icon' />
						<Count>{`${audienceCount} / ${audienceCapacity}`}</Count>
					</Participants>
				</CardFooter>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	border-radius: 0.5rem;
	border: 1px solid grey;
	box-shadow: var(--bs);
	cursor: pointer;
	margin: 1rem auto;
	width: 25rem;

	&:hover {
		button {
			background-color: var(--white);
			color: var(--blue);
			border: 1px solid var(--lightGrey);
		}

		border: 1px solid var(--blue);
	}
`;

const CardFooter = styled.div`
	display: flex;
	justify-content: space-between;

	${(p) =>
		p.isNotLive &&
		`
    visibility: hidden;
  `}
`;

const Participants = styled.div`
	display: flex;
	align-items: center;
`;

const Count = styled.p`
	margin: 0;
`;

const Button = styled.button`
	background-color: var(--blue);
	border-radius: 0.25rem;
	border: 1px solid var(--blue);
	color: var(--white);
	padding: 0.5rem 1.25rem;

	${(p) =>
		p.disabled &&
		`
    background-color: var(--lightGreyish);
    color: var(--lightGrey);
  `}
`;

const ImageContainer = styled.div`
	position: relative;
`;

const TopImage = styled.img`
	position: relative;
	border-radius: 0.5rem 0.5rem 0 0;
	width: 100%;
`;

const Tag = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;

	background-color: var(--blue);
	border-radius: 0.25rem;
	color: var(--white);
	padding: 0.5rem;

	${(p) =>
		p.isNotLive &&
		`
    display: none;
  `}
`;

const TextContainer = styled.div`
	padding: 1rem 1rem 1.5rem 1rem;
`;

const Title = styled.h4``;

const DateInfo = styled.h5``;

const Paragraph = styled.p``;

const Signature = styled.p``;
