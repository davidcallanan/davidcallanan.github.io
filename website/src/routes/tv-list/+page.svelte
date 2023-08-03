<script>

	let movies = [
		{
			name: "A Star Is Born",
			imdb_url: "https://www.imdb.com/title/tt1517451/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/a_star_is_born_2018",
		},
		{
			name: "American Beauty",
			imdb_url: "https://www.imdb.com/title/tt0169547/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/american_beauty",
		},
		{
			name: "Another Round",
			imdb_url: "https://www.imdb.com/title/tt10288566/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/another_round",
		},
		{
			name: "Awakenings",
			imdb_url: "https://www.imdb.com/title/tt0099077/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/1032970-awakenings",
		},
		{
			name: "Casablanca",
			imdb_url: "https://www.imdb.com/title/tt0034583/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/1003707-casablanca",
		},
		{
			name: "Coda",
			imdb_url: "https://www.imdb.com/title/tt10366460/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/coda_2021",
		},
		{
			name: "Dead Poets Society",
			imdb_url: "https://www.imdb.com/title/tt0097165/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/dead_poets_society",
		},
		{
			name: "Disturbia",
			imdb_url: "https://www.imdb.com/title/tt0486822/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/disturbia",
		},
		{
			name: "Forgetting Sarah Marshall",
			imdb_url: "https://www.imdb.com/title/tt0800039/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/forgetting_sarah_marshall",
		},
		{
			name: "Forrest Gump",
			imdb_url: "https://www.imdb.com/title/tt0109830/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/forrest_gump",
		},
		{
			name: "Get Out",
			imdb_url: "https://www.imdb.com/title/tt5052448/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/get_out",
		},
		{
			name: "Good Will Hunting",
			imdb_url: "https://www.imdb.com/title/tt0119217/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/good_will_hunting",
		},
		{
			name: "In Bruges",
			imdb_url: "https://www.imdb.com/title/tt0780536/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/in_bruges",
		},
		{
			name: "Les Choristes",
			imdb_url: "https://www.imdb.com/title/tt0372824/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/chorus_les_choristes",
		},
		{
			name: "Life is Beautiful",
			imdb_url: "https://www.imdb.com/title/tt0118799/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/1084398-life_is_beautiful",
		},
		{
			name: "Never Let Me Go",
			imdb_url: "https://www.imdb.com/title/tt1334260/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/never_let_me_go_2010",
		},
		{
			name: "One Flew Over the Cuckoo's Nest",
			imdb_url: "https://www.imdb.com/title/tt0073486/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/one_flew_over_the_cuckoos_nest",
		},
		{
			name: "Reign Over Me",
			imdb_url: "https://www.imdb.com/title/tt0490204/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/reign_over_me",
		},
		{
			name: "Soylent Green",
			imdb_url: "https://www.imdb.com/title/tt0070723/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/soylent_green",
		},
		{
			name: "Stand By Me",
			imdb_url: "https://www.imdb.com/title/tt0092005/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/stand_by_me_2013",
		},
		{
			name: "The Gift",
			imdb_url: "https://www.imdb.com/title/tt4178092/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/the_gift_2015",
		},
		{
			name: "The Hunt",
			imdb_url: "https://www.imdb.com/title/tt2106476/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/the_hunt_2013",
		},
		{
			name: "The Night Before",
			imdb_url: "https://www.imdb.com/title/tt3530002/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/the_night_before_2015",
		},
		{
			name: "The Pursuit of Happyness",
			imdb_url: "https://www.imdb.com/title/tt0454921/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/pursuit_of_happyness",
		},
		{
			name: "The Spiderwick Chronicles",
			imdb_url: "https://www.imdb.com/title/tt0416236/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/spiderwick_chronicles",
		},
		{
			name: "The Station Agent",
			imdb_url: "https://www.imdb.com/title/tt0340377/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/station_agent",
		},
		{
			name: "The Way Way Back",
			imdb_url: "https://www.imdb.com/title/tt1727388/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/the_way_way_back",
		},
		{
			name: "Titanic",
			imdb_url: "https://www.imdb.com/title/tt0120338/",
			rotten_tomatoes_url: "https://www.rottentomatoes.com/m/titanic",
		},
	];

</script>

<div class="wrapper">
	<div class="container">
		<h2 style="display: inline-block;"> All-Time Movies & TV Shows </h2>
		&nbsp;
		<hr>

		<pre style="padding: 0.5rem 1rem;">
(in alphabetical order)

[MOVIES]

First-tier movies (most emotionally impactful):
</pre>

		{#each movies as movie}
			<div class="movie">
				<h1> {movie.name} </h1>
				<a href={movie.imdb_url} target="_blank"><img src="/imdb.png" class="img-imdb" alt="IMDb Link"></a>
				<a href={movie.rotten_tomatoes_url} target="_blank"><img src="/rotten.png" class="img-rotten" alt="Rotten Tomatoes Link"></a>
			</div>
		{/each}


		<pre style="padding: 0.5rem 1rem;">

Second-tier movies (other movies):

Die Hard
Office Space
Parasite
Planes, Trains & Automobiles
Prisoners
Road to Perdition
Speed
The Invitation

[TV SHOWS]

After Life (S01-S02)
Breaking Bad
How to Sell Drugs Online (Fast)
Laurel & Hardy
Not Going Out
The Big Lez Show
The End of the F***ng World
The Office US
		</pre>
	</div>
</div>

<br>


<style>

	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		width: 600px;
		max-width: calc(100% - 2rem);
		margin: 1rem;
	}

	pre {
		white-space: pre-wrap;
	}

	.movie {
		display: flex;
		border-bottom: 1px solid #ddd;
		align-items: center;
		height: 2rem;
		gap: 0.5rem;
		padding: 0 1rem;
	}

	.movie h1 {
		font-size: 1rem;
		flex: 1;
	}

	.movie .img-imdb {
		height: 1rem;
	}

	.movie .img-rotten {
		height: 1.25rem;
	}

</style>
