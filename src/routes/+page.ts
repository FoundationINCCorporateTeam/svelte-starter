type User = {
	userId: string;
};

export async function load({ fetch }): Promise<{ user: User }> {
	const user = await (await fetch('/api/me')).json();
	return { user };
}
