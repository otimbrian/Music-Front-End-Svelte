<script>
	let url = 'https://i1.sndcdn.com/artworks-000167527289-p3zpfg-large.jpg';
</script>

<div class="player" id="player">
	<div class="playback_wrapper">
		<div class="playback_blur" />
		<div class="playback_thumb" />
		<div class="playback_info">
			<div class="title">Friday Comes</div>
			<div class="artist">Early</div>
		</div>
		<div class="playback_btn_wrapper">
			<i class="btn-prev fa fa-step-backward" aria-hidden="true" />
			<div class="btn-switch">
				<i class="btn-play fa fa-play" aria-hidden="true" />
				<i class="btn-pause fa fa-pause" aria-hidden="true" />
			</div>
			<i class="btn-next fa fa-step-forward" aria-hidden="true" />
		</div>
		<div class="playback_timeline">
			<div class="playback_timeline_start-time">00:31</div>
			<div class="playback_timeline_slider">
				<div class="slider_base" />
				<div class="slider_progress" />
				<div class="slider_handle" />
			</div>
			<div class="playback_timeline_end-time">03:11</div>
		</div>
	</div>
	<div class="list_wrapper">
		<ul class="list">
			<li class="list_item selected">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
			<li class="list_item">
				<div class="thumb" />
				<div class="info">
					<div class="title">Friday Comes</div>
					<div class="artist">Early</div>
				</div>
			</li>
		</ul>
	</div>
</div>

<style>
	.player {
		/* --background: rgba(255, 255, 255, 0.7); */
		--color-black: #252120;
		box-shadow: 0px 30px 80px 0px rgba(97, 45, 45, 0.25);
		width: 40%;
		height: 75vh;
		float: right;
		font-size: 14px;
	}

	.playback_wrapper {
		height: 300px;
		position: relative;
		overflow: hidden;
		background-color: #fff9e1;
	}

	.playback_blur {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		position: absolute;
		transform: scale(1.1);
		filter: blur(30px);
		opacity: 0.24;
		background-image: url(https://i1.sndcdn.com/artworks-000167527289-p3zpfg-large.jpg);
	}

	.playback_thumb {
		transition: 0.5s;
		width: 150px;
		height: 164px;
		border-radius: 5px;
		background-size: cover;
		position: absolute;
		margin: 35px;
		box-shadow: 0px 12px 30px 0px rgba(97, 45, 45, 0.2);
		background-image: url(https://i1.sndcdn.com/artworks-000167527289-p3zpfg-t500x500.jpg);
	}

	.playback_info {
		display: block;
		position: absolute;
		left: 120px;
		z-index: 10;
		margin: 42px 8px 8px 70px;
		width: 55%;
		min-width: 100px;
		mix-blend-mode: color-burn;
	}

	.playback_info .title {
		font-size: 30px;
		display: inline;
		color: var(--color-black);
	}

	.playback_info .artist {
		margin-top: 14px;
		font-size: 16px;
		opacity: 0.34;
		color: var(--color-black);
	}

	.playback_btn_wrapper {
		position: absolute;
		z-index: 10;
		mix-blend-mode: color-burn;
		width: 124px;
		left: 55px;
		top: 240px;
		opacity: 0.6;
		display: flex;
		justify-content: space-between;
	}

	.playback_btn_wrapper i {
		margin: 0;
	}

	.playback_timeline {
		position: absolute;
		width: 60%;
		left: 234px;
		top: 238px;
		mix-blend-mode: color-burn;
		color: #252120;
	}

	.playback_timeline_start-time,
	.playback_timeline_end-time {
		font-size: 14px;
		opacity: 0.4;
		margin-right: 15px;
		display: inline-block;
		vertical-align: middle;
	}

	.playback_timeline_slider {
		height: 24.67px;
		position: relative;
		cursor: pointer;
		width: 65%;
		margin-right: 15px;
		opacity: 1;
		display: inline-block;
		vertical-align: middle;
	}

	.slider_base {
		width: 100%;
		height: 2px;
		background-color: rgba(37, 33, 32, 0.12);
		border-radius: 2px;
		position: absolute;
		top: 12px;
	}

	.slider_progress {
		transform: matrix(0.15812, 0, 0, 1, 0, 0);
		transform-origin: 0 0;
		width: 100%;
		height: 2px;
		background-color: rgba(37, 33, 32, 0.5);
		border-radius: 2px;
		position: absolute;
		top: 12px;
	}

	.slider_handle {
		transform: matrix(1, 0, 0, 1, 37, 0);
		width: 12px;
		height: 12px;
		background-color: rgb(37, 33, 32);
		border-radius: 50%;
		position: absolute;
		top: 7px;
		left: -6px;
	}

	.list_wrapper {
		height: calc(100% - 310px);
		/* // overflow: hidden; */
		overflow: auto;
	}

	.list {
		padding: 20px 0;
	}

	.list .list_item {
		display: flex;
		align-items: center;
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
		color: #999;
	}

	.list .info .artist {
		font-size: 13px;
		text-transform: uppercase;
		color: #bbb;
	}

	.list_item:hover {
		background-color: rgba(12, 12, 12, 0.096);
	}

	.list_item:active {
		transform: scale(0.98);
	}

	.selected {
		background-color: rgba(224, 186, 171, 0.19);
	}

	.selected:hover {
		background-color: rgba(224, 186, 171, 0.3);
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
