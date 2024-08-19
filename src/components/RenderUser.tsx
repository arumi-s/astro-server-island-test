import type { User } from '@/data/user';
import RenameButton from './RenameButton';
import { useState } from 'react';

export default function RenderUser({ user }: { user: User }) {
	const [name, setName] = useState(user.name);

	return (
		<div className="relative flex flex-col space-y-1 rounded-lg border border-slate-200 bg-slate-100 p-4 shadow-md">
			<dl>
				<dt className="font-bold">Name</dt>
				<dd className="ml-4 flex items-center">
					{name} <RenameButton name={name} setName={setName} />
				</dd>
			</dl>
			<dl>
				<dt className="font-bold">Username</dt>
				<dd className="ml-4">{user.username}</dd>
			</dl>
			<dl>
				<dt className="font-bold">Email</dt>
				<dd className="ml-4">{user.email}</dd>
			</dl>
			<dl>
				<dt className="font-bold">Address</dt>
				<dd className="ml-4">{user.address.street}</dd>
			</dl>
			<dl>
				<dt className="font-bold">Company</dt>
				<dd className="ml-4">{user.company.name}</dd>
			</dl>
		</div>
	);
}
