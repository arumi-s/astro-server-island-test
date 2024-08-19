export default function RenameButton({
	name,
	setName
}: {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
}) {
	function handleClick() {
		setName('John Doe');
	}

	return (
		<button
			className="ml-auto rounded-full bg-blue-500 px-2 py-1 text-xs/none text-white"
			onClick={handleClick}
			title="Rename User"
		>
			Rename
		</button>
	);
}
