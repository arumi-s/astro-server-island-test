import { API_URL } from 'astro:env/server';
import type { User } from './user';

export async function getUser(id: number): Promise<User> {
	// Simulate a long-running request
	await new Promise((r) => setTimeout(r, id * 2000));

	const user: User = await fetch(`${API_URL}/users/${id}`).then((r) => r.json());

	return user;
}
