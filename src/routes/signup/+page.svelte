<div>
	<div class="signup_box">
		<h1>Sign Up Below</h1>
		<form action="" method="post">
			<div class="name">
				<section>
					<h1>First Name</h1>
					<input type="text" name="" id="" placeholder="First Name" />
				</section>

				<section>
					<h1>Last Name</h1>
					<input type="text" name="" id="" placeholder="Last Name" />
				</section>
			</div>
			<div class="email_and_password">
				<section>
					<h1>Email</h1>
					<input type="text" placeholder="Email" name="" id="" />
				</section>
				<section>
					<h1>Password</h1>
					<input type="password" name="" id="" placeholder="Password" />
				</section>
			</div>

			<!-- <div class="confirm"> -->
			<section class="confirm">
				<h1>Confirm Password</h1>
				<input type="password" name="" id="" placeholder="Confirm Password" />
			</section>
			<!-- </div> -->

			<input type="submit" name="" value="SignUp" />
			<input type="submit" value="Cancel" />
		</form>
		<!-- <div style="background-color: green;"> <h1>Hello</h1></div> -->
	</div>
</div>

<style>
	.signup_box {
		background: rgba(160, 86, 86, 0.651);
		color: #fff;
		height: auto;
		/* justify-content: center; */
		width: 60%;
		/* box-sizing: border-box; */
		margin: 0 auto;
		/* top: 50%; */
		/* left: 50%; */
		/* display: block; */
		border-radius: 50px;
		padding: 30px 50px;
		/* align-content: center; */
		/* align-items: center; */
	}

	.name,
	.email_and_password {
		display: flex;
		/* display: flex; */
		/* width: 50%; */
		/* align-content: center; */
		/* align-items: center; */
		/* align-self: center; */
	}

	.name section,
	.email_and_password section {
		padding: 10px;
		width: 50%;
	}

	.confirm {
		padding: 10px;
		width: 100%;
		/* padding-left: 20%; */
		/* align-content: center; */
	}

	h1 {
		margin: 0;
		padding: 0 0 20px;
		text-align: center;
		font-size: 22px;
	}

	.signup_box input {
		width: 100%;
		margin-bottom: 20px;
	}

	.signup_box .confirm input {
		width: 100%;
		/* padding-left: 20%; */
	}

	.signup_box input[type='text'],
	input[type='password'] {
		border: none;
		border-bottom: 1px solid #fff;
		background: transparent;
		outline: none;
		height: 40px;
		color: #fff;
		font-size: 16px;
	}

	.signup_box input[type='submit'] {
		border: none;
		outline: none;
		height: 40px;
		background: #b86363;
		color: #fff;
		font-size: 18px;
		border-radius: 20px;
	}

	.signup_box input[type='submit']:hover {
		cursor: pointer;
		background: #9b937d;
		color: #000;
	}
</style>
