import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div class='block text-white-900 p-6 max-w-sm bg-white rounded-lg border  shadow-md hover:bg-gray-500  dark:hover:bg-blue-400 hover:text-white'>
			<span class="flex-auto text-2xl flex-wrap w-full ">{text}</span>
			<div className='text-xl'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					class='flex justify-end  text-2xl'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note