import { Fragment } from 'react';
import './App.css';

function App() {
	return (
		<ol>
			<List />
		</ol>
	);
}

function List() {
	const names = [
		{ first: 'mannu', last: 'singh' },
		{ first: 'biraj', last: 'poddar' },
	];
	return names.map((n) => {
		return (
			<Fragment>
				<li>{n.first}</li>
				<li>{n.last}</li>
			</Fragment>
		);
	});
}

export default App;
