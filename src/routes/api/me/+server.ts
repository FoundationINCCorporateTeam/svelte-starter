import { error, json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function GET({ locals }: RequestEvent) {
	const { userId } = locals.session;
	console.log('userId', userId);
	if (!userId) {
		throw error(401, 'Unverified');
	}
	return json({
		userId
	});
}
