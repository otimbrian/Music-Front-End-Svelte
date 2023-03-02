<script lang="ts">
	export let createAlbum = false;
	export let createArtist = false;
	export let createMusic = false;
</script>

<div class="clickable_button">
	<div>
		<input type="checkbox" name="Artist" id="" bind:checked={createArtist} />
		<h1>Artist</h1>
	</div>
	<div>
		<input type="checkbox" name="Album" id="" bind:checked={createAlbum} />
		<h1>Album</h1>
	</div>
	<div>
		<input type="checkbox" name="Music" id="" bind:checked={createMusic} />
		<h1>Music</h1>
	</div>
</div>

<style>
	.clickable_button {
		display: flex;
		padding: 10px 80px;
	}

	.clickable_button div {
		display: block;
		padding: 50px 50px;
	}
</style>
