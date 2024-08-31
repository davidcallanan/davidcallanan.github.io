<script>

	import { onMount } from 'svelte';

	let is_first_anniv = false;

	onMount(() => {
		const date = new Date();

		if (date.getDate() === 16 && date.getMonth() === 7 && date.getFullYear() === 2024) {
			is_first_anniv = true;
		}
	});

</script>

<div class="wrapper">
	<div class="container">
		<div class="header">
			<div class="img-wrapper">
				<img src="/favicon.png">
			</div>
			<div class="title">
				<h1> David Callanan </h1>
				<h2> Software Engineer & Theoretical Researcher </h2>
			</div>
		</div>

		<div class="divider"/>

		<p>
			<a href="https://github.com/davidcallanan"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt=""></a>
			<a href="https://medium.com/@davidcallanan"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&amp;logo=medium&amp;logoColor=white" alt=""></a>
			<a href="https://www.linkedin.com/in/davidpcallanan/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt=""></a>
			<a href="https://youtube.com/CodePulse"><img src="https://img.shields.io/badge/YouTube-DD0000?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" alt=""></a>
		</p>

		{#if is_first_anniv}
			<br/><br/><br/><br/><br/>
		{/if}

		<div class="rip-wrapper" class:modified={is_first_anniv}>
			<div class="rip">
				<img src="/rick.png"/>
				<div class="rip-inner">
					{#if is_first_anniv}
						<h3> Rick Callanan 1994 &ndash; 16<sup>th</sup> Aug 2023</h3>
					{:else}
						<h3> Rick Callanan 1994&ndash;2023</h3>
					{/if}
					<blockquote>
						But the changin' of winds and the way waters flow<br>
						Life is short as the fallin' of snow<br>
						And now I'm gonna miss you, I know
					</blockquote>
					<p>
						Rest in peace my brother.
					</p>
				</div>
			</div>
		</div>

		{#if is_first_anniv}
		<br/><br/>
		<div style="display: flex; align-items: center; justify-content: center;">

		<div style="display: flex; align-items: center; justify-content: center; max-width: 600px; border: 4px solid red; padding: 1rem; border-radius: 1rem;">
			<img src="/THEDEVILMADEMEDOIT.png" style="width: 200px; border-radius: 0.75rem; border: 2px solid darkblue;"/>
			<div style="font-family: 'Comic Sans MS', cursive, sans-serif; padding: 1rem;">
				<b>I am reminded of three years ago, today, when Rick and I decided to watch the new Conjuring movie.</b>
				<br/><br/>It was terrible in its intended form, so instead, we spent the entire movie laughing our heads off as if it was a feckin' comedy.
				<br/><br/>I'm sure we ate nothing short of a multipack of KitKat Chunky's that night &ndash; each!
				<br/><br/>The next month was filled with non-stop inside jokes and imitations based on this absolute disaster of a sequel.
				<br/><br/>The Devil Made Me Do It!
				<br/><br/>I wonder will we feel your spooky presence tonight? 👻😂
			</div>
		</div>
		</div>
		{/if}
		
		{#if is_first_anniv}
			<br/><br/><br/><br/><br/>
		{/if}
		
		<p>
			Hey. I'm David, an experienced software engineer with a strong passion for technical innovation and theoretical research, ranging from software architecture and crypto technology, to programming language design and economics.
			My areas of expertise include full-stack web development, distributed state management, and pure mathematics. If you must know, I mostly use JavaScript – <a href="https://uoe.dcallanan.com" target="_blank">but on steroids</a>.
		</p>

		<h2 class="h1" id="education"> Education </h2>
		
		<div>
			<ul>
				<li>
					Maynooth University — <a href="https://www.maynoothuniversity.ie/study-maynooth/undergraduate-studies/courses/bsc-computational-thinking">Bachelor of Science, Computational Thinking</a> (2 years remaining)<br>
					<ul>
						<li>
							Computer Science, Pure Mathematics and Philosophy (Accelerated Degree)
						</li>
					</ul>
				</li>
				<li>
					<details>
						<summary>Self-educated</summary><br>
						<ul>
							<li>
								Crypto Technology & Economics (2020-present)
							</li>
							<li>
								Software Engineering & Architecture (2018-present)
							</li>
							<li>
								Programming & Software Development (2012-2017)
							</li>
						</ul>
					</details>
				</li>
			</ul>
		</div>

		<h2 class="h1" id="experience"> Experience </h2>

		<ul>
			<li>
				<a href="https://dltcapital.ie" target="_blank">DLT Capital Ireland</a> (2021-2023)
				<ul>
					<li>
						Lead Software Engineer (2022-2023)
					</li>
					<li>
						Full-Stack Developer (2021)
					</li>
				</ul>
			</li>
			<li>
				McDonald's (2022-present)
				<ul>
					<li>
						Shift Manager (2024-present)
					</li>
					<li>
						Crew Trainer (2023)
					</li>
					<li>
						Crew Member (2022)
					</li>
				</ul>
			</li>
		</ul>

		<h2 class="h1" id="portfolio"> Portfolio </h2>

		<ul>
			<li><a href="https://medium.com/@davidcallanan">Articles on Medium</a></li>
			<li><a href="https://www.youtube.com/CodePulse">Educational content on YouTube</a></li>
			<li>Fun projects:
				<ul>
					<li>2048 Tetris - <a href="https://david.callanan.ie/2048-tetris">Play</a> • <a href="https://github.com/davidcallanan/2048-tetris">GitHub Repo</a></li>
					<li>30 Second Number Smash - <a href="https://david.callanan.ie/30-second-number-smash">Play</a> • <a href="https://github.com/davidcallanan/30-second-number-smash">GitHub Repo</a></li>
					<li>Five Nights at Maccies - <a href="https://fnam.dcallanan.com/">Play</a> • <a href="https://www.youtube.com/watch?v=bP5xSA8uU3A">Gameplay Footage</a></li>
				</ul>
			</li>
		</ul>

		<h2 class="h1" id="projects"> Projects </h2>

		<ul>
			<li><a href="https://gamepack.jiroplay.com/">JiroPlay</a> <sub>(BETA)</sub> (2017-2020)
				<ul>
					<li>Temporarily abandoned. Not reliable on Apple devices.</li>
					<li>A proof-of-concept gaming platform where your phone acts like a virtual controller and your laptop/tablet acts like a virtual console.</li>
				</ul>
				<details> <summary> More Info </summary> <ul> <li> Takes advantage of WebRTC communication to reduce latency and server infrastructure needed. </li> <li> This was just a fun project and so the sample games are not high-quality. </li> <li> Knows issues: The platform does not work as reliably over hotspots, mobile data, public WiFi and in locations with firewall limitations. It is preferable for everyone to be on the same LAN network and to ensure that direct LAN communication is not blocked. There may be connection issues on older devices. </li> </ul> </details>
			</li>
			<li><a href="https://condensis.com/">Condensis</a> (2022-present)
				<ul>
					<li>Software tools and services in the crypto space.</li>
				</ul>
			</li>
		</ul>

		<br>
		<div class="divider"></div>

		<p style="text-align: right; font-family: Tahoma; font-size: 0.875rem;"> Website by David P. Callanan </p>
	</div>
</div>

<style>

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		max-width: 960px;
		margin: 1rem;
	}

	.header {
		display: flex;
		align-items: center;
		padding-top: 1rem;
	}

	.header .img-wrapper {
		width: calc(5rem + 4px);
		height: calc(5rem + 4px);
		border-radius: 10rem;
		border: 2px solid #888;
	}

	.header img {
		width: 5rem;
		border-radius: 10rem;
		border: 2px solid rgb(255, 237, 134);
		border: 2px solid rgb(255, 243, 178);
		border: 2px solid rgb(216, 207, 153);
		border: 2px solid gold;
	}

	.header .title {
		padding-left: 1rem;
	}

	.header h2 {
		color: rgb(77, 93, 139);
		color: rgb(17, 133, 73);
		color: rgb(45, 98, 255);
		color: rgb(55, 87, 184);
		font-size: 1.25rem;
		padding-left: 0.125rem;
	}

	.divider {
		height: 1px;
		background-color: #eee;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	p {
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 17px;
		line-height: 1.5;
	}

	a {
		color: #0366d6 !important;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	ul {
		font-size: 17px;
		margin-left: 2rem;
	}

	li {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.h1 {
		font-size: 1.5rem;
		border-bottom: 1px solid #eee;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		margin-top: 1.5rem;
	}

	.rip-wrapper {
		display: flex;
		justify-content: center;
	}

	.rip {
		display: flex;
		border: 2px solid green;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 0.875rem;
		padding: 0.125rem 0.5rem;
		gap: 0.5rem;
		align-items: center;
	}

	.modified .rip {
		padding: 0.25rem 1rem;
		border: 4px solid purple;
		font-family: "Comic Sans MS", cursive, sans-serif;
		border-radius: 1rem;
	}

	.rip img {
		width: 75px;
		border: 2px solid black;
	}

	.modified .rip img {
		border-radius: 0.75rem;
	}

	.rip h3 {
		font-size: 1rem;
	}

	.rip p {
		font-size: 0.875rem;
		margin-top: 0.25rem;
		margin-bottom: 0;
	}

	.rip blockquote {
		font-style: italic;
		color: gray;
	}

	.rip blockquote::before {
		content: '\201C';
	}

	.rip blockquote::after {
		content: '\201D';
	}

</style>

