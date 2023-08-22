<script>
	import Signin from '../components/Signin.svelte';
	import { page } from '$app/stores';

</script>
<h1 class="text-3xl font-bold underline">
	Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Signin />

<p><span class="font-bold">UserId:</span> {$page.data.user.userId}</p>
