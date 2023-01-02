import React, { useDebugValue } from 'react';
import Header from './Header.js';
import Options from './Options.js';
import AddOption from './AddOption.js';
import Action from './Action.js';
import OptionModal from './OptionModal.js';

class IndecisonApp extends React.Component {
	constructor(props) {
		super(props);
		this.clearOptions = this.clearOptions.bind(this);
		this.addOption = this.addOption.bind(this);
		this.handlePic = this.handlePic.bind(this);
		this.removeOne = this.removeOne.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = { options: this.props.options, selected: undefined }; // ['first thing ', 'second thing'] };
	}
	appHeader = {
		title: 'Indecision ',
		subTitle: 'Put your life activities in your computer',
	};
	clearOptions() {
		this.setState(() => ({ options: [] }));
	}
	removeOne(optionToRemove) {
		this.setState((prevstate) => {
			return {
				options: prevstate.options.filter(
					(option) => option !== optionToRemove
				),
			};
		});
	}
	addOption(option) {
		if (!option) return ' Invalid/ Empyty String input !';
		if (this.state.options.indexOf(option) > -1)
			return 'The Item Already exits !';
		this.setState((prevstate) => ({
			options: prevstate.options.concat([option]),
		}));
	}
	handlePic() {
		let options = this.state.options;
		let selectedOption = options[Math.trunc(Math.random() * options.length)];
		this.setState(() => ({ selected: selectedOption }));
	}
	closeModal() {
		this.setState(() => ({
			selected: undefined,
		}));
	}

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));
			if (options) {
				this.setState(() => ({ options: options.options }));
			}
		} catch (e) {}
	}
	componentDidUpdate() {
		console.log(this.state.options);
		localStorage.setItem(
			'options',
			JSON.stringify({ options: this.state.options })
		);
	}
	render() {
		return (
			<div>
				<Header headerData={this.appHeader} />
				<div className="container">
					<Action
						hasOptions={this.state.options.length > 0}
						handlePic={this.handlePic}
					/>
					<br />
					<div className="widget">
						<Options
							options={this.state.options}
							clearOptions={this.clearOptions}
							removeOne={this.removeOne}
						/>
						<AddOption
							options={this.state.options}
							addOption={this.addOption}
						/>
					</div>
					<OptionModal
						selected={this.state.selected}
						closeModal={this.closeModal}
					/>
				</div>
			</div>
		);
	}
}

IndecisonApp.defaultProps = {
	options: [],
};

export default IndecisonApp;
