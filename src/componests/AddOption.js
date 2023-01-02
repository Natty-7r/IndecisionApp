import React from 'react';
class AddOption extends React.Component {
	state = { error: undefined };

	handleaddOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);
		e.target.elements.option.value = '';
		this.setState(() => ({ error }));
	};
	render() {
		return (
			<form className="widget-form" onSubmit={this.handleaddOption}>
				{this.state.error && (
					<p className="form_error-message">{this.state.error}</p>
				)}
				<div className="form-actions">
					<input type="text" name="option" className="form-input" />{' '}
					<button type="submit" className="btn">
						{' '}
						Add Options
					</button>
				</div>
			</form>
		);
	}
}
export default AddOption;
