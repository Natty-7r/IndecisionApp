const root = ReactDOM.createRoot(document.getElementById('root'));
//

let visibility = false;
const toggleVisibilty = () => {
	visibility = !visibility;
	render();
};
const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibilty}>
				{visibility ? 'hide contents' : 'show content'}
			</button>
			{visibility && <p> her is some contet now you can see it !</p>}
		</div>
	);
	root.render(template);
};
render();
class VisiblityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: true,
		};
		this.handleVisibility = this.handleVisibility.bind(this);
	}
	handleVisibility() {
		this.setState((prevstate, prevProp) => {
			return { visibility: !prevstate.visibility };
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibility}>
					{this.state.visibility ? 'Hide contents' : 'Show contents'}
				</button>
				<br />
				<br />
				<div>
					{this.state.visibility && ' this is some content now you can see it '}
				</div>
			</div>
		);
	}
}
