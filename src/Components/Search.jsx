import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div class='flex p-2 bg-gray-300 items-center gap-3 justify-center  '>
			<MdSearch className='text-2xl' />
			<input class="bg-gray-100 p-2 rounded-lg text-xl"
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search