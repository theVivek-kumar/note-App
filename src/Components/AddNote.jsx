import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 300;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='flex  p-2 bg-gray-200 items-center gap-4 justify-center  flex-wrap max-w-0 min-w-min'>
			<input class=" w-full rounded-lg border text-white-800 shadow-md p-6 "
				rows='6'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			/>
			<div className='flex gap-4 bg-white rounded-xl border  shadow-md p-3'>
				<small class='text-white-700 text-xl'>
					{characterLimit - noteText.length} Remaining
				</small>
				<button class='flex justify-center p-3  text-gray-100 rounded-lg text-xl bg-green-700  ' onClick={handleSaveClick}>
				Add 
				</button>
			</div>
		</div>
	);
};

export default AddNote