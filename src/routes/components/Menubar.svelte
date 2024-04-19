<script>
	import { onMount } from 'svelte'
	import { checkTheme, setTheme, theme } from '../store/theme.js'
	import '../../style.css'

	onMount(() => {
		checkTheme()
		console.log($theme)
	})
	let themeClass
	$: themeClass = $theme
	let navItems = [
		{ name: 'Birthdays', href: '/' },
		{ name: 'Namedays', href: '/birth' }
	]
</script>

<nav class="menubar" theme={themeClass}>
	{#each navItems as item}
		<a href={item.href} class="menu-item">
			{item.name}
		</a>
	{/each}
	<button class="theme-switcher" on:click={setTheme($theme === 'light' ? 'dark' : 'light')}> {@html $theme === 'light' ? '🌑' : '☀️'}</button>
</nav>

<style>
	.theme-switcher {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}
</style>
