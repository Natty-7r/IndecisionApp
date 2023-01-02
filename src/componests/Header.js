import React from 'react';

const Header = (props) => (
	<header>
		<div className="container">
			<h1 className="header_title">{props.headerData.title}</h1>
			<h2 className="header_sub_title">{props.headerData.subTitle}</h2>
		</div>
	</header>
);

export default Header;
