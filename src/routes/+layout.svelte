<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Buiten de Deur — Onafhankelijk PKVW-adviseur Leiderdorp</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>
<Footer />
