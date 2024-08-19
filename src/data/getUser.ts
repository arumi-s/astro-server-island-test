import { API_URL } from 'astro:env/server';
import type { User } from './user';

export async function getUser(id: number): Promise<User> {
	// Simulate a long-running request
	await new Promise((r) => setTimeout(r, id * 500));

	const user: User = await (await fetch(`${API_URL}/users/${id}`)).json();

	return user;
}
