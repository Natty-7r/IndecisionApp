import React from 'react';
import Modal from 'react-modal';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		padding: '10%',
		transform: 'translate(-50%, -50%)',
		background: 'gray',
		color: 'white',
		textAlign: 'center',
	},
};
const me = 6;

const OptionModal = (props) => (
	<div>
		<Modal
			isOpen={props.selected}
			style={customStyles}
			onRequestClose={props.closeModal}
			className="modal"
		>
			<h2 className="modal-header">Selected option</h2>
			{props.selected && <p className="modal-text">{props.selected}</p>}
			<button className="btn modal_btn" onClick={props.closeModal}>
				okay{' '}
			</button>
		</Modal>
	</div>
);
export default OptionModal;
