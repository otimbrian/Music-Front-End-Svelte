<script>
	import { page } from '$app/stores';
	import home from '$lib/images/music-home.svg';
	import login from '$lib/images/music-login.svg';
	import search from '$lib/images/music-search.svg';
	import logout from '$lib/images/music-logout.svg';
	import about from '$lib/images/music-about.svg';
</script>

<header>
	<!-- <div class="corner"></div> -->
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
					<img src={home} alt="home-logo" /> Home
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
				<a href="/login">
					<img src={login} alt="login-logo" /> Login
				</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/search') ? 'page' : undefined}>
				<a href="/search">
					<img src={search} alt="search-log" /> Search
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/logout' ? 'page' : undefined}>
				<a href="/logout">
					<img src={logout} alt="logout-logo" /> Logout
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">
					<img src={about} alt="about-logo" /> About
				</a>
			</li>
		</ul>
	</nav>
	<!-- <div class="corner"></div> -->
</header>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
