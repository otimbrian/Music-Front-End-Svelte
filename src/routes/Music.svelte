<script lang="ts">
	
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const url = 'http://localhost:8080/music/get/music';

	// const musicStore = writable([])
	let musicData: any[] = [];

	onMount(async () => {
		try {
			const request = await axios.get(url);
			musicData = request.data;
			console.log(request.data);
			// musicStore.set(request.data)
		} catch (error) {
			console.log(error);
		}
	});

</script>

<div class="second_class">
	<h4>Available Music</h4>
	<ul class="list">
		{#each musicData as music}
			<!-- content here -->
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">{music.title}</div>
					<div class="artist">{music.artist.name}</div>
				</div>
				<i />
			</li>
		{/each}
	</ul>
</div>

<style>
	.second_class {
		width: 40%;
		height: 75vh;
		/* background-color: rgba(255, 255, 255, 0.7); */
		box-shadow: 0px 30px 80px 0px rgba(97, 45, 45, 0.25);
		overflow: auto;
	}

	.second_class h4 {
		text-align: center;
		color: rgba(78, 53, 53, 0.795);
	}

	/* .list_wrapper {
        height: calc(100% - 310px);
        // overflow: hidden;
        overflow: auto;
    } */

	.list {
		padding: 20px 0;
	}

	.list .list_item {
		display: flex;
		align-items: center;
		padding-bottom: 2px;
		cursor: pointer;
		width: 100%;
		height: 74px;
		transition: 0.4s;
	}

	.list .thumb {
		width: 50px;
		height: 50px;
		margin: 0 12px 0 31px;
		border-radius: 50%;
		position: relative;
		opacity: 0.8;
		background-size: cover;
	}

	.list .info {
		max-width: 600px;
	}

	.list .info .title {
		font-size: 15px;
		color: rgb(77, 72, 72);
	}

	.list .info .artist {
		font-size: 13px;
		text-transform: uppercase;
		color: rgb(124, 121, 121);
	}

	.list_item:hover {
		background-color: rgba(12, 12, 12, 0.096);
	}

	.list_item:active {
		transform: scale(0.98);
	}

	.info .title {
		color: #252120;
		font-size: 15px;
	}
	.info .artist {
		color: rgba(37, 33, 32, 0.7);
		font-size: 13px;
		text-transform: uppercase;
	}
</style>
