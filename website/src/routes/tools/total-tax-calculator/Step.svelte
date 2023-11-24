<script>
    import Box from "./Box.svelte";

	export let step_number;
	export let remove_step;
	export let on_total_change;

	let exclusive_total = 0;
	let inclusive_total = 0;

	let repeat_count = 1;

	const clamp = (num, min, max) => {
		return Math.min(Math.max(num, min), max);
	};

	const number_or_one = (num) => {
		const parsed = Number(num);
		return isNaN(parsed) ? 1 : parsed;
	};

	$: real_repeat_count = number_or_one(repeat_count);

	$: numerator = clamp(inclusive_total + exclusive_total, 0, 100);
	$: denominator = 100 + exclusive_total;
	$: total_burden = numerator / denominator;
	$: total_burden_repeated = (() => {
		const opposite = 1 - total_burden;
		return 1 - Math.pow(opposite, real_repeat_count);
	})();

	$: total_burden_repeated, on_total_change(total_burden_repeated);

</script>

<div style="display: flex; gap: 0.5rem;">
	<h3> Step #{step_number} </h3>
	Repeat: <input type="number" min="1" max="99" style="width: 30px;" bind:value={repeat_count}/>
	<button on:click={remove_step}> Remove </button>
</div>

<div style="display: flex;">
	<Box type="inclusive" on_total_change={(total) => inclusive_total = total}/>
	<Box type="exclusive" on_total_change={(total) => exclusive_total = total}/>
</div>

<span style="color: gray; font-size: 0.875rem;">Numerator:</span> {numerator.toFixed(2)}% <span style="color: gray; font-size: 0.875rem;">- Denominator:</span> {denominator.toFixed(2)}%<br/>

<span style="border: 1px solid #ddd; display: inline-block; margin: 0.25rem; background: #eee;">
	{#if real_repeat_count != 1}
		<b style="font-size: 0.875rem;">REPEATED |</b>
	{/if}
	<b>Step total:</b> {(total_burden_repeated * 100).toFixed(2)}%
</span>
