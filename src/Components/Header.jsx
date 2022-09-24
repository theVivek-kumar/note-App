import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div class='bg-blue-500'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header