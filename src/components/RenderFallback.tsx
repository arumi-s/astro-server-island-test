import { useEffect, useState } from 'react';

export default function RenderFallback() {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime + 0.1);
		}, 100);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative flex flex-col space-y-1 rounded-lg border border-slate-200 bg-slate-100 p-4 shadow-md">
			<dl>
				<div className="absolute right-0 top-0 p-1 text-sm tabular-nums">{time.toFixed(1)}s</div>
				<dt className="font-bold">Name</dt>
				<dd className="my-2 ml-4 h-2 w-40 animate-pulse rounded-full bg-slate-500"></dd>
			</dl>
			<dl>
				<dt className="font-bold">Username</dt>
				<dd className="my-2 ml-4 h-2 w-40 animate-pulse rounded-full bg-slate-500"></dd>
			</dl>
			<dl>
				<dt className="font-bold">Email</dt>
				<dd className="my-2 ml-4 h-2 w-40 animate-pulse rounded-full bg-slate-500"></dd>
			</dl>
			<dl>
				<dt className="font-bold">Address</dt>
				<dd className="my-2 ml-4 h-2 w-40 animate-pulse rounded-full bg-slate-500"></dd>
			</dl>
			<dl>
				<dt className="font-bold">Company</dt>
				<dd className="my-2 ml-4 h-2 w-40 animate-pulse rounded-full bg-slate-500"></dd>
			</dl>
		</div>
	);
}
