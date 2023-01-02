import React from 'react';
const Action = (props) => (
	<button
		className={
			!props.hasOptions
				? 'action_btn_disabled btn action_btn'
				: 'btn action_btn'
		}
		disabled={!props.hasOptions}
		onClick={props.handlePic}
	>
		what should I do ?
	</button>
);

export default Action;
