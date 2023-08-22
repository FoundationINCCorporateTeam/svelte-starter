<script>
	import clerkStore, { useAuth } from '$lib/client/clerk.client';

	function handleClick(){
		$clerkStore.openSignIn()
	}
</script>

{#if $useAuth.status === 'authenticated'}
	<div class="flex">
		<button on:click={() => $clerkStore.signOut()} class="button hover:underline ">Sign out</button>
		{#if $clerkStore?.user?.profileImageUrl}
			<img
				class="h-10"
				src={$clerkStore?.user?.profileImageUrl}
				alt={$clerkStore?.user?.fullName ?? 'Profile image'}
			/>
		{/if}
	</div>
{:else}
	<button on:click={handleClick}>Sign In</button>
{/if}
