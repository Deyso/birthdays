<script>
	import { onMount } from 'svelte'
	import Menubar from '../components/Menubar.svelte'
	import '../../style.css'
	import { theme } from '../store/theme'
	import namedaysData from './namedays.json'

	onMount(() => {})

	let themeClass
	$: themeClass = $theme

	let date = new Date()
	let month = (date.getMonth() + 1).toString().padStart(2, '0') // getMonth is zero-based, add 1 to make it 1-based
	let day = date.getDate().toString().padStart(2, '0')
	let queryDate = `${month}-${day}`
	let namedays = namedaysData[queryDate]
</script>

<Menubar />
<div class="container" theme={themeClass}>
	<main>
		<h1>Today's Namedays</h1>
		<p>Date: {queryDate}</p>
		<ul>
			{#each namedays as name}
				<li>{name}</li>
			{/each}
		</ul>
	</main>
</div>

<style>
	main {
		font-family: Arial, sans-serif;
		line-height: 1.6;
		padding: 20px;
	}
</style>
