import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.querySelector('#root'));
//
const app = {
	title: 'Indecision',
	subTitle: 'This is sub title for indecision app',
	options: [],
};
const formSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		rendering();
		e.target.elements.option.value = '';
	}
};

const Form = (
	<form action="" methode="POST" onSubmit={formSubmit}>
		<input type="text" name="option"></input>
		<button name="btn">submit</button>
	</form>
);
const resetOptions = () => {
	app.options = [];
	rendering();
};
const makeChoice = () => {
	const random = Math.trunc(Math.random() * app.options.length);
	alert(app.options[random]);
};
const nums = [1, 23, 4, 6];
const rendering = () => {
	const App = (
		<div>
			<h1>{app.title}</h1>
			{app.subTitle && <p>{app.subTitle}</p>}
			{Form}
			<br />
			<button onClick={resetOptions}>remove all</button>
			<span> </span>
			<button disabled={app.options.length === 0} onClick={makeChoice}>
				choose action
			</button>

			<br />
			<br />

			{app.options.length > 0 ? 'Here are some options' : 'No options'}
			{
				<ol>
					{app.options.map((option, index) => (
						<li key={index + 1}>{option}</li>
					))}
				</ol>
			}
		</div>
	);
	root.render(App);
};
rendering();
