import styled from 'styled-components';

import GlobalStyles from './shared/GlobalStyles';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import CompanyLogo from './assets/airballoon.svg';

export default function App() {
	return (
		<div>
			<GlobalStyles />
			<Navbar
				logo={{ src: CompanyLogo, alt: 'company logo' }}
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
