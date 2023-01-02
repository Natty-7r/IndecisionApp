// this file is create to that react elements and immutable and how to chage them by generating and rerendring each time we need.

let count = 0;
const increment = () => {
	count++;
	console.log(count);
	rendering();
};
const decrement = () => {
	count--;
	console.log(count);
	rendering();
};
const reset = () => {
	count = 0;
	console.log(count);
	rendering();
};
function rendering() {
	const myApp = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increment}>+1</button>

			<button onClick={decrement}>-1</button>

			<button onClick={reset}>reset</button>
		</div>
	);
	root.render(
		// <React.StrictMode>
		// 	<App />
		// </React.StrictMode>
		myApp
	);
}
