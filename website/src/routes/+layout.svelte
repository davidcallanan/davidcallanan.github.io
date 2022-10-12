<script>

	import { page } from "$app/stores";

	$: isHome = $page.url.pathname === "/";

</script>

<div class="header" class:is-home={isHome}>
	{#if !isHome}
		<a class="home" href="/" style="display: flex; align-items: center; margin-right: auto;">
			<div class="img-wrapper">
				<img src="/1657129620814.jfif">
			</div>
			<div class="title">
				<h1> David Callanan </h1>
			</div>
		</a>
		<div class="nav">
			<a href="https://github.com/davidcallanan"><img src="https://img.shields.io/badge/GH-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt=""></a>
			<a href="https://medium.com/@davidcallanan"><img src="https://img.shields.io/badge/Md-12100E?style=for-the-badge&amp;logo=medium&amp;logoColor=white" alt=""></a>
			<a href="https://www.linkedin.com/in/davidpcallanan/"><img src="https://img.shields.io/badge/In-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt=""></a>
			<a href="https://youtube.com/CodePulse"><img src="https://img.shields.io/badge/YT-DD0000?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" alt=""></a>
		</div>
	{:else}
		<div style="margin-right: auto;"></div>
	{/if}
	<div class="menu">
		<a href="/quotes"><div style="background: #ccc; color: black; padding: 0.375rem 0.75rem; font-weight: 600; color: darkred; font-size: 14px;"> <span id="personal-text">Personal</span> Quotes </div></a>
	</div>
</div>

<div class:shift={isHome}>
	<slot></slot>
</div>

<style>

	.shift {
		margin-top: -45px;
	}

	.header {
		position: relative;
		display: flex;
		align-items: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #eee;
		z-index: 1000;
	}

	.header.is-home {
		border-bottom: none;
	}

	.header .img-wrapper {
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 10rem;
		/* border: 1px solid rgb(0, 94, 255); */
		box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.9);
		margin-left: 1rem;
	}

	.header .img-wrapper img {
		width: 2.25rem;
		border-radius: 10rem;
		/* border: 2px solid rgb(0, 94, 255);
		border: 1px solid white; */
	}

	.header .title {
		padding-left: 1rem;
	}

	.header .home:hover .title {
		text-decoration: underline;
	}

	.header .title h1 {
		font-size: 1.25rem;
	}

	.nav {
		transform: translateY(2px);
	}

	.nav img {
		margin-left: auto;
		border-radius: 0.5rem;
	}

	/* .nav :first-child img {
		border-top-left-radius: 10rem;
		border-bottom-left-radius: 10rem;
	}

	.nav :last-child img {
		border-top-right-radius: 10rem;
		border-bottom-right-radius: 10rem;
	} */

	.menu {
		margin-right: 1rem;
		margin-left: 2rem;
	}

	@media (max-width: 700px) {
		.nav {
			display: none;
		}
	}

	
	@media (max-width: 600px) {
		#personal-text {
			display: none;
		}
	}

</style>
