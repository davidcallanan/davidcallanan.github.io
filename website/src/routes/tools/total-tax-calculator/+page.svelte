<script>
    import Step from "./Step.svelte";

	let steps = [{ key: 1 }];
	let step_totals = [ { total: 0, }];

	const number_or_one = (num) => {
		const parsed = Number(num);
		return isNaN(parsed) ? 1 : parsed;
	};

	let overall_repeat = 1;
	$: real_overall_repeat = number_or_one(overall_repeat);
	
	const add_step = () => {
		steps.push({ key: Math.random() });
		steps = steps;
		step_totals.push({ total: 0, });
		step_totals = step_totals;
	};

	const change_total = (total, i) => {
		step_totals[i].total = total;
	};

	const calc_inclusive = (totals, rep) => {
		let curr = 0;

		for (let { total } of totals) {
			let left = 1 - curr;
			let this_one = left * total;
			curr += this_one;
		}

		let repeated = 1 - Math.pow(1 - curr, rep);

		return repeated;
	};

	$: inclusive_total = calc_inclusive(step_totals, real_overall_repeat);
	$: exclusive_total = 1 / (1 - inclusive_total) - 1;
	$: factor = 1 / (1 - inclusive_total);
</script>

<br/><br/>

<div style="justify-content: center; display: flex;">
	<div style="margin: 0.25rem; max-width: 1200px;">
		<h3> Total Tax Calculator </h3>
		<hr/>
		
		{#each [...steps.entries()] as [i, step] (step.key)}
			<Step step_number={i + 1} remove_step={() => {
				step_totals.splice(i, 1);
				step_totals = step_totals;
				steps.splice(i, 1);
				steps = steps;
			}} on_total_change={(total) => change_total(total, i)}/>
			<hr/>
		{/each}
		
		<button on:click={() => add_step()} style="padding: 0.25rem 0.5rem; margin: 0.25rem;"> Add Step </button><br/>
		
		Overall repeat: <input bind:value={overall_repeat} type="number" min="1" max="99" style="width: 30px;"/>
		
		<hr/>
		
		<div style="border: 1px solid #ddd; max-width: max-content; margin: 0.25rem;">
			<h3 style="font-size: 1rem;"> GRAND TOTAL </h3>
			{#if real_overall_repeat != 1}
				<b style="font-size: 0.875rem;">REPEATED</b>
			{/if}
			<div style="background: #eee; display: flex; gap: 1rem;">
				<div>
					<b>Inclusive:</b>
					{(inclusive_total * 100).toFixed(2)}%
				</div>
				<div>
					<b>Exclusive:</b> 
					{(exclusive_total * 100).toFixed(2)}%
				</div>
				<div>
					<b>Factor:</b> 
					{(factor).toFixed(2)}
				</div>
			</div>
		</div>
	</div>
</div>

<br/><br/>

<!-- List of steps. Each step consists of a list of inclusive tax and exclusive tax.
Each step has a repetition factor.
Step summary at the end with another overall reptition factor.
Shows total inclusive tax in percentage form, and shows divide factor.
Shows total exclusive tax in percentage form, and shows multiply factor. -->
