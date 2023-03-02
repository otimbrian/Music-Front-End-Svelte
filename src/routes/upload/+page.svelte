<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { getUserToken } from '../getUser';

	// Import the functions you need from the SDKs you need
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore/lite';
	import {
		getStorage,
		ref,
		uploadBytesResumable,
		getDownloadURL,
		type StorageReference
	} from 'firebase/storage';
	import { writable, type Writable } from 'svelte/store';
	import Music from '../Music.svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import CheckBoxes from './CheckBoxes.svelte';

	onMount(async () => {
		try {
			const user = await getUserToken();
			console.log('Token', user);
		} catch (error) {
			console.log(error);
		}

		try {
			const request = await axios.get('http://localhost:8080/music/get/artists');
			// const artistList = request.data;
			request.data.forEach((element: any) => {
				console.log(element);
			});

			// artistListStore.set(request.data)
			artistList = request.data;
		} catch (error) {
			console.log(error);
		}
	});

	const musicFileUrlStore = writable('');
	const artistImagedUrlStore = writable('');
	const albumImageUrlStore = writable('');
	const artistListStore = writable([]);

	//Vriabbles for Artist Creation Form.
	let artistImage: any;
	let artistName: string;
	let avatar: any;

	//Variables for Music Creation form.
	let musicFile: FileList;
	let musicTiltle: string;
	let musicTrackNumber: number;
	let musicAlbum: string;
	let musicArtistid: number;
	let musicGenre: string;
	let musicYearOfRelease: string;
	let musicArtist: string;

	//variables for Album Creation.
	let albumName: string;
	let albumArtist: string;
	let albumImage: any;
	let selected: any;
	let answer = '';
	let artistList: any;

	// artistListStore.subscribe(
	// 	storedlist => {
	// 		artistList = storedlist
	// 	}
	// )

	console.log(artistList);

	//Variable to toggle the disply of the CreateAlbum, Create Artist, and Create Music
	//Forms.
	let createArtist = false;
	let createAlbum = false;
	let createMusic = false;

	//Variable to handle progress bar visuliser.
	let progress = 0;

	// import { getFirestore } from "firebase/analytics";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: 'AIzaSyCVWykTFipQKNkwBtCmsvn9xfTJK0pBvWQ',
		authDomain: 'music-app-b5889.firebaseapp.com',
		projectId: 'music-app-b5889',
		storageBucket: 'music-app-b5889.appspot.com',
		messagingSenderId: '888199501647',
		appId: '1:888199501647:web:371cbe209c63519c02973a',
		measurementId: 'G-4M0X71HHF3'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	const getFileType = (data: string) => {
		return data.split('.')[1];
	};

	const onFileSelection = () => {
		// console.log(event)
		// let image = event.target.files[0];
		let image = artistImage[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (event) => {
			if (event.target != null) {
				avatar = event.target.result;
				// console.log(avatar)
			}
		};
	};

	const uploadFileWithReference = (
		reference: StorageReference,
		file: any,
		urlStore: Writable<string>
	) => {
		const upload = uploadBytesResumable(reference, file);

		upload.on(
			'state_changed',
			(snapShot) => {
				progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
			},
			(err) => {
				console.log(err.code, ': ................................: ', err.message);
				// console.log(err.message);
			},
			async () => {
				const url = await getDownloadURL(upload.snapshot.ref);
				urlStore.set(url);
				// return url
			}
		);
	};

	const handleArtistCreation = async () => {
		const artistData = {
			ID: 0,
			Name: '',
			Thumbnail: ''
		};

		const baseStore = `Music/Artist/${artistName}/Thumbnail`;
		// console.log(artistImage[0]);
		const fileType = getFileType(artistImage[0].name);

		const storage = getStorage();
		const reference = ref(storage, `${baseStore}/${artistName}.${fileType}`);

		// Uploading the Artist Thumbnail to cloud fireStore.
		uploadFileWithReference(reference, artistImage[0], artistImagedUrlStore);
		artistImagedUrlStore.subscribe((url) => {
			artistData.Thumbnail = url;
		});
		artistData.Name = artistName;

		console.log(artistData);
	};

	const handleAlbumCreation = async () => {
		let albumData = {
			Name: '',
			ArtistID: '',
			Thumbnail: ''
		};
		let baseStoragePath = `Music/Artist/${albumName}`;
		const fileType = getFileType(albumImage[0].name);

		const storage = getStorage();
		const reference = ref(storage, `${baseStoragePath}/${albumImage[0].name}.${fileType}`);

		uploadFileWithReference(reference, albumImage[0], albumImageUrlStore);
		albumImageUrlStore.subscribe((url) => {
			albumData.Thumbnail = url;
		});
		albumData.Name = albumName;
		albumData.ArtistID = selected.id;

		console.log(albumData);
	};

	const handleMusicUpload = async () => {
		let musicData = {
			Title: '',
			Artist: '',
			ArtistID: 0,
			Album: '',
			AlbumID: 0,
			Genre: '',
			TrackNumber: 0,
			Year: '',
			UrlLink: ''
		};
		let baseStore = 'Music/Artist/';
		const fileType = getFileType(musicFile[0].name);

		const storage = getStorage();
		const reference = ref(storage, `${baseStore}/${musicTiltle}.${fileType}`);

		// Uploading the music File to cloud firestore
		uploadFileWithReference(reference, musicFile[0], musicFileUrlStore);

		musicFileUrlStore.subscribe((url) => {
			// console.log("In the store: ", url)
			musicData.UrlLink = url;
		});

		musicData.Title = musicTiltle;
		musicData.Year = musicYearOfRelease;
		musicData.TrackNumber = musicTrackNumber;
		musicData.Genre = musicGenre;
		musicData.Album = musicAlbum;
		musicData.ArtistID = musicArtistid;
		musicData.Artist = musicArtist;

		console.log(musicData);
	};
</script>

<div class="creation_page">
	<!-- <CheckBoxes createAlbum={createAlbum} createArtist={createArtist} createMusic={createMusic}/> -->

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

	{#if createArtist}
		<div class="artist">
			<h1>Create Artist</h1>
			<form action="" method="post" on:submit|preventDefault={handleArtistCreation}>
				<div class="name">
					<section>
						<h1>Name</h1>
						<input type="text" name="" id="" placeholder="Artist Name" bind:value={artistName} />
					</section>

					<section class="avatar-upload">
						<h1>Image</h1>
						<div class="avatar-edit">
							<input
								type="file"
								id="imageUpload"
								accept=".png, .jpg, .jpeg"
								bind:files={artistImage}
								on:change={onFileSelection}
							/>
							<label for="imageUpload" />
						</div>
						<div class="avatar-preview">
							{#if avatar}
								<!-- content here -->
								<img src={avatar} alt="avatar-imge" />
								<!-- <div id="imagePreview" style='background-image: url(${avatar});'>
                                </div> -->
							{:else}
								<!-- else content here -->
								<div
									id="imagePreview"
									style="background-image: url(http://i.pravatar.cc/500?img=4);"
								/>
							{/if}
						</div>
					</section>
				</div>
				<!-- <input type="submit" name="" value="Cancel"> -->
				<input type="submit" name="" value="Create" />
			</form>
		</div>
	{/if}

	{#if createAlbum}
		<div class="album">
			<h1>Create Album</h1>
			<form action="" method="post" on:submit|preventDefault={handleAlbumCreation}>
				<div class="name">
					<section>
						<h1>Album Name</h1>
						<input type="text" name="" id="" placeholder="Album" bind:value={albumName} />
					</section>
					<section>
						<h1>Album Artist</h1>
						<select bind:value={selected}>
							{#each artistList as artist}
								<option value={artist}>
									{artist.name}
								</option>
							{/each}
						</select>
						<!-- <input type="text" name="" id="" placeholder="Artist Name" bind:value={answer} /> -->
					</section>
				</div>
				<div class="image">
					<section>
						<h1>Image</h1>
						<input type="file" name="" id="" bind:files={albumImage} />
					</section>
				</div>
				<!-- <input type="submit" name="" value="Cancel"> -->
				<input type="submit" name="" value="Create" />
			</form>
		</div>
	{/if}
	{#if createMusic}
		<div class="music">
			<div class="album">
				<h1>Upload Music</h1>
				<form action="" method="post" on:submit|preventDefault={handleMusicUpload}>
					<div class="name">
						<section>
							<h1>Music Title</h1>
							<input type="text" name="" id="" placeholder="Title" bind:value={musicTiltle} />
						</section>

						<section>
							<h1>Track Number</h1>
							<input
								type="number"
								name=""
								id=""
								placeholder="Track Number"
								bind:value={musicTrackNumber}
							/>
						</section>
					</div>
					<div class="genre">
						<section>
							<h1>Album</h1>
							<input type="text" name="" id="" placeholder="Album Name" bind:value={musicAlbum} />
						</section>
						<section>
							<h1>Artist</h1>
							<input type="text" name="" id="" placeholder="Artist" bind:value={musicArtist} />
						</section>
					</div>
					<div class="genre">
						<section>
							<h1>Genre</h1>
							<input type="text" name="" id="" placeholder="Genre" bind:value={musicGenre} />
						</section>
						<section>
							<h1>Year</h1>
							<input type="text" name="" id="" placeholder="Year" bind:value={musicYearOfRelease} />
						</section>
					</div>
					<div class="track">
						<section>
							<h1>Upload Track</h1>
							<input type="file" name="" id="" bind:files={musicFile} class="music_file" />
						</section>
					</div>
					<!-- <input type="range" bind:value={progress} min="0" max="100" /> -->
					<progress value={progress || 0} />
					<!-- <input type="submit" name="" value="Cancel"> -->
					<input type="submit" name="" value="Upload" />
				</form>
			</div>
		</div>
	{/if}
</div>

<style>
	.creation_page {
		background: rgba(160, 86, 86, 0.651);
		color: #fff;
		height: auto;
		width: 60%;
		/* max-width: 100%; */
		overflow: auto;
		margin: 0 auto;
		border-radius: 50px;
		padding: 30px 50px;
	}
	.name section,
	.music section {
		padding: 10px;
		width: 100%;
	}

	h1 {
		margin: 0;
		padding: 0 0 20px;
		text-align: center;
		font-size: 22px;
	}

	.artist input,
	.album input,
	select,
	progress {
		width: 100%;
		margin-bottom: 20px;
	}

	input[type='text'],
	input[type='file'],
	input[type='number'] {
		border: none;
		border-bottom: 1px solid #fff;
		background: transparent;
		outline: none;
		height: 40px;
		color: #fff;
		font-size: 16px;
	}

	input[type='submit'] {
		border: none;
		outline: none;
		height: 40px;
		background: #b86363;
		color: #fff;
		font-size: 18px;
		border-radius: 20px;
	}

	input[type='submit']:hover {
		cursor: pointer;
		background: #9b937d;
		color: #000;
	}

	.avatar-upload {
		position: relative;
		max-width: 205px;
		margin: 50px auto;
	}

	.avatar-upload .avatar-edit {
		position: absolute;
		right: 35px;
		z-index: 1;
		/* top: 10px; */
	}

	.avatar-upload .avatar-edit input {
		display: none;
	}

	.avatar-upload .avatar-edit input + label {
		display: inline-block;
		width: 34px;
		height: 34px;
		margin-bottom: 0;
		border-radius: 100%;
		background: #ffffff;
		border: 1px solid transparent;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
		cursor: pointer;
		font-weight: normal;
		transition: all 0.2s ease-in-out;
	}

	.avatar-upload .avatar-edit label:hover {
		background: #868080;
		border-color: #6e6969e8;
	}

	.avatar-upload .avatar-edit input + label:after {
		content: '\f040';
		/* content-visibility: visible; */
		font-family: 'FontAwesome';
		color: #757575;
		position: absolute;
		top: 10px;
		left: 0;
		right: 0;
		text-align: center;
		margin: auto;
	}

	.avatar-preview,
	img {
		width: 192px;
		height: 192px;
		position: relative;
		border-radius: 100%;
		border: 6px solid #f8f8f8;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
	}

	.avatar-preview > div {
		width: 100%;
		height: 100%;
		border-radius: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.album .name,
	.album .genre {
		display: flex;
	}

	option {
		border: none;
		border-bottom: 1px solid #fff;
		background: transparent;
		outline: none;
		height: 40px;
		color: #645757d0;
		font-size: 16px;
	}

	.clickable_button {
		display: flex;
		padding: 10px 80px;
	}

	.clickable_button div {
		display: block;
		padding: 50px 50px;
	}
</style>
