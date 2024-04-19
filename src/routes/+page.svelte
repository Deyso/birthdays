<script>
	import { onMount } from 'svelte'
	import '../style.css'
	import Menubar from './components/Menubar.svelte'
	import { theme } from './store/theme.js'

	onMount(() => {})

	let themeClass
	$: themeClass = $theme
	let today = new Date()
	let sortBy = 'remainingDays'

	let birthdays = [
		{ name: 'Bauer Kevin', year: 1997, month: 1, day: 22 },
		{ name: 'Nagy Diána', year: 1977, month: 2, day: 16 },
		{ name: 'Bíró Zsolt', year: 1979, month: 2, day: 20 },
		{ name: 'Dénes Tünde', year: 1976, month: 2, day: 27 },
		{ name: 'Budai Adrienn', year: 1990, month: 3, day: 10 },
		{ name: 'Bauer Dezső', year: 1995, month: 3, day: 14 },
		{ name: 'Kaifis Lajos', year: 1971, month: 3, day: 19 },
		{ name: 'Nedvesi Viktor', year: 1987, month: 3, day: 24 },
		{ name: 'Kázik Józsefné', year: 1961, month: 4, day: 8 },
		{ name: 'Bauer Dávid', year: 2000, month: 7, day: 20 },
		{ name: 'Bauer Regina', year: 2004, month: 5, day: 4 },
		{ name: 'Kázik Éva', year: 1987, month: 5, day: 10 },
		{ name: 'Bauer Erika', year: 1973, month: 7, day: 9 }
	]

	const calculateDaysRemaining = (month, day) => {
		let nextBirthday = new Date(today.getFullYear(), month - 1, day)
		if (today > nextBirthday) {
			nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
		}
		return Math.round((nextBirthday - today) / (1000 * 60 * 60 * 24))
	}

	const calculateFutureAge = year => today.getFullYear() - year

	const formatDate = (month, day) => {
		let date = new Date(today.getFullYear(), month - 1, day)
		return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
	}

	let sortedBirthdays = []
	let upcomingBirthday

	$: {
		sortedBirthdays = birthdays.map(birthday => ({
			...birthday,
			remainingDays: calculateDaysRemaining(birthday.month, birthday.day),
			futureAge: calculateFutureAge(birthday.year),
			nextBirthday: formatDate(birthday.month, birthday.day)
		}))

		if (sortBy === 'remainingDays') {
			sortedBirthdays.sort((a, b) => a.remainingDays - b.remainingDays)
		} else if (sortBy === 'age') {
			sortedBirthdays.sort((a, b) => a.futureAge - b.futureAge)
		} else if (sortBy === 'name') {
			sortedBirthdays.sort((a, b) => a.name.localeCompare(b.name))
		}

		upcomingBirthday = sortedBirthdays.reduce((nearest, current) => {
			return current.remainingDays < nearest.remainingDays ? current : nearest
		}, sortedBirthdays[0])
	}
	import { slide } from 'svelte/transition'
	let showNames = false

	const toggleNames = () => {
		showNames = !showNames
	}
</script>

<Menubar />

<div class="side-bar container" theme={themeClass}>
	<div class="activating-circle" on:click={toggleNames} style="left: {showNames ? '-100%' : '-25px'}"></div>
	<div>
		<section class="main-content">
			<h1>Upcoming birthday</h1>
			<p>{upcomingBirthday.name} will be {upcomingBirthday.futureAge} years old</p>
			<p>{upcomingBirthday.remainingDays} days left</p>
		</section>
	</div>
	<div class="names" style="left: {showNames ? '0%' : '-100%'}" on:click={toggleNames}>
		<aside class="sidebar">
			<h2>Names with dates</h2>
			<!-- 
			<select bind:value={sortBy}>
				<option value="remainingDays">Sort by Remaining Days</option>
				<option value="age">Sort by Age</option>
				<option value="name">Sort by Name</option>
			</select> -->

			<ul class="birthday-list">
				{#each sortedBirthdays as { name, remainingDays, futureAge, nextBirthday }}
					<li>{name}({futureAge}) {remainingDays} days, next birthday on {nextBirthday}</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>

<style>
	.side-bar {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100vh;
		position: relative;
		overflow: hidden;
	}
	.activating-circle {
		position: absolute;
		top: 30%;
		width: 50px;
		height: 50px;
		background-color: black;
		border-radius: 50%;
		cursor: pointer;
		transition: left 0.3s ease; /* Smooth sliding out */
	}
	.names {
		position: absolute;
		left: -100%; /* Start off-screen to the left */
		top: 0;
		display: flex;
		width: 100%;
		height: 100%;
		transition: left 0.5s ease; /* Smooth transition for horizontal sliding */
	}
</style>
