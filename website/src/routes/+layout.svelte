<script>

	import { page } from "$app/stores";

	import { afterNavigate } from "$app/navigation";

	$: isHome = $page.url.pathname === "/";

	$: path = $page.url.pathname;

	let isMenuOpen = false;

	let toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	let hideMenu = () => {
		isMenuOpen = false;
	};

	afterNavigate(hideMenu);

</script>

<div style="width: 100%; box-sizing: border-box; padding: 0.5rem 1rem; background: purple; color: white; font-family: Tahoma; text-align: center;">
	&mdash;&nbsp;&nbsp; New Website Launched | <a href="https://theorytest.condensis.com/" style="color: lightblue; text-decoration: underline;" target="_blank"> Driving Theory Test Ireland </a>&nbsp;&nbsp;&mdash;	
</div>
<div style="display: flex; flex-direction: column; height: 100%;">
	<div class="header" class:is-home={isHome}>
		{#if !isHome}
			<a class="home" href="/" style="display: flex; align-items: center; margin-right: auto;">
				<div class="img-wrapper">
					<img src="/favicon.png">
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
			<div style="font-family: Tahoma; background: #ccc; padding: 0.375rem 0.75rem; font-weight: 600; color: darkred; font-size: 12px; border-radius: 0.5rem; cursor: pointer; user-select: none;" on:click={toggleMenu}>
				<img src="/menu.svg" alt="Menu" style="width: 16px; vertical-align: middle; margin-left: -2px; padding-right: 4px;">
				<span style="vertical-align: middle;"> MENU </span>
			</div>
		</div>
	</div>
	
	<div class:shift={isHome} class:is-menu-open={isMenuOpen} style="display: flex; position: relative; flex: 1;">
		<div style="flex: 1; width: 100%;" class:hide-on-small-screen={isMenuOpen}>
			<slot></slot>
		</div>
		{#if isMenuOpen}
			<div class="the-menu">
				<div style="border-bottom: 2px solid rgb(0, 106, 255); padding: 0.25rem; font-family: Tahoma; font-size: 12px; color: rgb(0, 106, 255); text-align: center;">
					Menu
				</div>
				<div class="nav">
					<a href="https://github.com/davidcallanan"><img src="https://img.shields.io/badge/GH-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt=""></a>
					<a href="https://medium.com/@davidcallanan"><img src="https://img.shields.io/badge/Md-12100E?style=for-the-badge&amp;logo=medium&amp;logoColor=white" alt=""></a>
					<a href="https://www.linkedin.com/in/davidpcallanan/"><img src="https://img.shields.io/badge/In-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt=""></a>
					<a href="https://youtube.com/CodePulse"><img src="https://img.shields.io/badge/YT-DD0000?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" alt=""></a>
				</div>
				<a href="/" class:selected={path === "/"}> Home </a>
				<a href="/top-quotes" class:selected={path === "/top-quotes"}> Top Quotes </a>
				<a href="/quotes" class:selected={path === "/quotes"}> Personal Quotes </a>
				<a href="/dictionary" class:selected={path === "/dictionary"}> Custom Terminology </a>
				<a href="/tv-list" class:selected={path === "/tv-list"}> All-Time Movies </a>
				<a href="/domains" class:selected={path === "/domains"}> My Domains </a>
			</div>
		{/if}
	</div>
</div>

<div class="tint" class:is-menu-open={isMenuOpen} on:click={hideMenu}></div>

<style>

	.shift {
		margin-top: -53px;
	}

	.shift .the-menu {
		margin-top: 53px;
	}

	.header {
		position: relative;
		display: flex;
		align-items: center;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #eee;
		z-index: 1000;
		height: calc(52px - 1rem);
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

		.the-menu .nav {
			display: flex !important;
		}
	}

	.the-menu {
		width: 18rem;
		max-width: calc(100vw - 1px);
		border-left: 1px solid #eee;
		background: white;
		z-index: 2000;
	}

	.tint {
		display: none;
		background: rgba(0, 0, 0, 0.1);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1500;
	}

	/* @media (max-width: 650px) { */
		/* .hide-on-small-screen {
			display: none;
		} */

		.the-menu {
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
		}

		.is-menu-open .the-menu {
			box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
		}

		.is-menu-open.tint {
			display: block;
		}
	/* } */

	.the-menu .nav {
		display: none;
		gap: 0.25rem;
		margin-top: 0.5rem;
		justify-content: center;
	}

	.the-menu > a {
		display: block;
		padding: 0.5rem 1rem;
		border: 2px solid lightblue;
		margin: 0.5rem;
		/* background: linear-gradient(to bottom, #fff, #eee); */
		font-weight: 600;
		/* color: darkaqua; */
	}
	
	.the-menu > a:hover:not(.selected) {
		background: #eee;
		/* text-decoration: underline; */
	}

	.shift .the-menu {
		border-top: 1px solid #eee;
	}

	.the-menu .selected {
		background: lightblue;
	}

	@media (max-width: 500px) {
		.shift {
			margin-top: calc(-53px + 16px);
		}
	}

</style>
