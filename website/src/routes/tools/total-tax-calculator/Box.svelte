<script>
	export let type;
	export let on_total_change;

	const name = type === "inclusive" ? "Tax-inclusive" : "Tax-exclusive";
	const desc = type === "inclusive" ? "Use for employee income tax and inclusive VAT." : "Use for employer income tax and exclusive VAT.";

	let entries = [{ value: null }];

	const fix_entries = () => {
		let pop_count = -1;
		
		for (let i = entries.length - 1; i >= 0; i--) {
			if (entries[i].value === null) {
				pop_count++;
			} else {
				break;
			}
		}

		for (let i = 0; i < pop_count; i++) {
			entries.pop();
		}

		if (entries[entries.length - 1].value !== null) {
			entries.push({ value: null });
		}
	};

	const foo = () => {
		fix_entries();
		console.log(entries);
	};

	$: entries, foo();

	const number_or_zero = (num) => {
		const parsed = Number(num);
		return isNaN(parsed) ? 0 : parsed;
	};

	const clamp = (num, min, max) => {
		return Math.min(Math.max(num, min), max);
	};

	$: total = clamp(entries.reduce((acc, curr) => acc + number_or_zero(curr.value), 0), 0, 100);

	$: total, on_total_change(total);
</script>

<div class="box" style="flex: 1 0;">
	<p> {name} entries </p>
	<p class="small"> <i> {desc} </i> </p>
	{#each entries as entry}
		<input type="number" min="0" max="100" step="1" style="text-align: left;" bind:value={entry.value}/>%
		{#if entries[entries.length - 1] === entry}
			<span style="color: gray; font-size: 0.875rem;">Total:</span> {total.toFixed(2)}% 
		{/if}
		<br/>
	{/each}
</div>

<style>

	.box {
		border: 1px solid #ddd;
		padding: 0.25rem;
		margin: 0.25rem;
		max-width: max-content;
	}

	.small {
		font-size: 0.875rem;
	}

</style>
