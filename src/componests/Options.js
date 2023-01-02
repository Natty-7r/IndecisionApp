import React from 'react';
import Option from './Option';
const Options = (props) => {
	if (props.options.length == 0)
		return (
			<p className="widget-sub-header">
				{' '}
				Please Enter options to get started !
			</p>
		);
	return (
		<div>
			<div className="widget-header">
				<h2>your options</h2>
				<button className="btn btn--link" onClick={props.clearOptions}>
					Remove All
				</button>
			</div>
			<ol className="options-list">
				{props.options.map((option, index) => (
					<Option
						key={index}
						optionText={option}
						index={index}
						removeOne={props.removeOne}
					/>
				))}
			</ol>
		</div>
	);
};

export default Options;
