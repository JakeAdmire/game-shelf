import React from 'react';
import GenreBar from './GenreBar';
import PlatformBar from './PlatformBar';
import LuckyBar from './LuckyBar';
import SearchBar from './SearchBar';
import MultiBar from './MultiBar';
import './styles/button.css';

import './styles/Footer.css';

export default function Footer(props) {
	return (
		<div className='footer'>
			<SearchBar {...props}/>
			<PlatformBar {...props}/>
			<GenreBar {...props} />
			<MultiBar {...props}/>
			<LuckyBar {...props}/>
		</div>
	);
}
