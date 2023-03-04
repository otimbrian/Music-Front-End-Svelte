<script lang="ts">
	import Sidepane from './Sidepane.svelte';
	import Player from './Player.svelte';
	import Music from './Music.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="homepage" content="Playlists and current music" />
</svelte:head>

<section>
	<div style="width: 100%; display: flex; justify-content: space-around">
		<Sidepane />
		<Music />
		<Player />
	</div>
</section>
