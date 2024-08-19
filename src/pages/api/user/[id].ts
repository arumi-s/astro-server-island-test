import type { APIRoute } from 'astro';
import { z } from 'zod';
import { getUser } from '@/data/getUser';

export const prerender = false;

export const GET = (async (context) => {
	console.log(context.preferredLocaleList);
	const { params } = context;
	const { success, data: id } = z.coerce.number().int().safeParse(params.id);

	if (!success) {
		return new Response(
			JSON.stringify({
				error: 'Invalid user ID'
			}),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}

	const user = await getUser(id);

	return new Response(JSON.stringify(user), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 's-maxage=60'
		}
	});
}) satisfies APIRoute;
