import styled from 'styled-components';

import GlobalStyles from './shared/GlobalStyles';
import Navbar from './components/navbar/Navbar';
import Routes from './components/routes/Routes';

export default function App() {
	return (
		<div>
			<GlobalStyles />
			<Navbar
				links={[
					{ title: 'About', destination: '/about' },
					{ title: 'FAQs', destination: '/faq' },
				]}
			/>
			<MainContent>
				<Routes />
			</MainContent>
		</div>
	);
}

const MainContent = styled.main`
	max-width: var(--maxWidth);
	margin: 3rem auto;
`;
