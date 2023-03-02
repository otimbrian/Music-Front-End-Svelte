<script lang="ts">
	import place_holder from '$lib/images/placeholder.png';
	import axios from 'axios';

	let baseUrl = 'http://localhost:8080';
	let username: string;
	let password: string;

	let values = { email: '', password: '' };

	// let email: string;
	// let password: string;

	const handleUserLogin = async () => {
		values.email = username;
		values.password = password;

		// console.log(values)
		try {
			const user = await axios.post(`${baseUrl}/user/login`, values);
			window.localStorage.setItem(
				"logged In User Details", JSON.stringify(user.data)
			)
		}catch(exeption){
			console.log("Exeption",exeption)
		}
		// console.log(user.data);
	};
</script>

<div style="align-content: center;">
	<div class="loginbox">
		<img src={place_holder} alt="Placeholder" class="avatar" />

		<form action="" method="post" on:submit|preventDefault={handleUserLogin}>
			<h1>Email</h1>
			<input type="text" placeholder="Enter email" autocomplete="username" bind:value={username} />

			<h1>Password</h1>
			<input
				type="password"
				placeholder="Enter password"
				name="password"
				id="password"
				autocomplete="current-password"
				bind:value={password}
			/>

			<input type="submit" value="Login" />
		</form>
		<div class="problems">
			<a href="/">Forgot your password?</a><br />
			<a href="/signup">Don't have an account? SignUp.</a>
		</div>
	</div>
</div>

<style>
	.loginbox {
		/* align-content: center; */
		/* width: 50%; */
		width: 400px;
		margin: 0 auto;
		height: 450px;
		background: rgba(160, 86, 86, 0.651);
		color: #fff;
		top: 50%;
		left: 50%;
		/* position: sticky; */
		/* transform: translate(-50%,-50%); */
		box-sizing: border-box;
		border-radius: 20px;
		padding: 10px 30px;
		/* display: block; */

		/* width: 100%; */
		/* display: flex; */
		/* justify-content: center; */
	}

	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		position: sticky;
		top: -50px;
		left: calc(50% - 50px);
	}

	h1 {
		margin: 0;
		padding: 0 0 20px;
		text-align: center;
		font-size: 22px;
	}

	.loginbox input {
		width: 100%;
		margin-bottom: 20px;
	}

	.loginbox input[type='text'],
	input[type='password'] {
		border: none;
		border-bottom: 1px solid #fff;
		background: transparent;
		outline: none;
		height: 40px;
		color: #fff;
		font-size: 16px;
	}

	.loginbox input[type='submit'] {
		border: none;
		outline: none;
		height: 40px;
		background: #b86363;
		color: #fff;
		font-size: 18px;
		border-radius: 20px;
	}

	.loginbox input[type='submit']:hover {
		cursor: pointer;
		background: #9b937d;
		color: #000;
	}

	.loginbox a {
		text-decoration: none;
		font-size: 12px;
		line-height: 20px;
		color: rgb(75, 71, 71);
	}

	.loginbox a:hover {
		color: #ffc107;
	}

	.loginbox .problems {
		justify-content: center;
	}
</style>
