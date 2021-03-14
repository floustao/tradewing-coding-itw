import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AirBalloon from './AirBalloon';

export default function Navbar({ links = [] }) {
	return (
		<Nav>
			<Content>
				<Link to='/'>
					<Logo className='company-logo' color={`var(--blue)`} />
				</Link>

				<NavigationItems>
					{links.map((link, index) => {
						const key = `${index}-${link.title
							.toLowerCase()
							.replace(/ /g, '-')}`;
						return (
							<li key={key}>
								<Link to={link.destination}>{link.title}</Link>
							</li>
						);
					})}
				</NavigationItems>
			</Content>
		</Nav>
	);
}

Navbar.propTypes = {
	logo: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			destination: PropTypes.string,
		})
	),
};

const Nav = styled.nav`
	width: 100%;
	border-bottom: 1px solid var(--grey);
	padding: 1rem 0;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	max-width: var(--maxWidth);
`;

const Logo = styled(AirBalloon)`
	&.company-logo {
		width: auto;
		height: 2rem;
	}
`;

const NavigationItems = styled.ul`
	list-style-type: none;
	display: flex;

	> li:first-child {
		margin-right: 2rem;
	}
`;
