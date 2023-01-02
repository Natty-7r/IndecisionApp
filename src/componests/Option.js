import React from 'react';
const Option = (props) => {
	return (
		<li className="option">
			<p className="option__text">
				{props.index + 1}. {props.optionText}
			</p>
			<button
				className="btn btn--link"
				onClick={() => {
					props.removeOne(props.optionText);
				}}
			>
				{' '}
				remove
			</button>
		</li>
	);
};

export default Option;
