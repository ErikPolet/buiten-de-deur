<script lang="ts">
	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const navItems = [
		{ label: 'Home', href: '#home' },
		{ label: 'Diensten', href: '#diensten' },
		{ label: 'Over mij', href: '#over-mij' },
		{ label: 'Tarieven', href: '#tarieven' },
		{ label: 'Werkgebied', href: '#werkgebied' },
		{ label: 'Contact', href: '#contact' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav class="nav" class:scrolled>
	<div class="nav-inner container">
		<a href="#home" class="logo" onclick={closeMobile}>
			<img src="/logo.png" alt="Buiten de Deur" />
		</a>

		<ul class="nav-links" class:open={mobileOpen}>
			{#each navItems as item}
				<li>
					<a href={item.href} onclick={closeMobile}>{item.label}</a>
				</li>
			{/each}
			<li class="nav-cta-mobile">
				<a href="#contact" class="btn-cta" onclick={closeMobile}>Afspraak plannen</a>
			</li>
		</ul>

		<a href="#contact" class="btn-cta nav-cta-desktop">Afspraak plannen</a>

		<button
			class="hamburger"
			class:active={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Menu openen"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</nav>

{#if mobileOpen}
	<button class="overlay" onclick={closeMobile} aria-label="Menu sluiten"></button>
{/if}

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		transition: var(--transition);
		border-bottom: 1px solid transparent;
	}

	.nav.scrolled {
		background: rgba(255, 255, 255, 0.96);
		border-bottom-color: var(--grey-200);
		box-shadow: var(--shadow-sm);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 76px;
	}

	.logo img {
		height: 100px;
		width: auto;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.nav-links a {
		font-size: 0.935rem;
		font-weight: 500;
		color: var(--grey-700);
		padding: 8px 14px;
		border-radius: var(--radius-sm);
		transition: var(--transition);
	}

	.nav-links a:hover {
		color: var(--blue-600);
		background: var(--blue-50);
	}

	.btn-cta {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--white);
		background: var(--blue-600);
		padding: 10px 22px;
		border-radius: var(--radius-md);
		transition: var(--transition);
		white-space: nowrap;
	}

	.btn-cta:hover {
		background: var(--blue-700);
		box-shadow: var(--shadow-md);
		transform: translateY(-1px);
	}

	.nav-cta-mobile {
		display: none;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		padding: 8px;
		z-index: 1001;
	}

	.hamburger span {
		display: block;
		width: 24px;
		height: 2.5px;
		background: var(--grey-800);
		border-radius: 2px;
		transition: var(--transition);
		transform-origin: center;
	}

	.hamburger.active span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.active span:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(15, 42, 68, 0.4);
		z-index: 998;
		border: none;
		cursor: default;
	}

	@media (max-width: 900px) {
		.nav-cta-desktop {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			width: 280px;
			flex-direction: column;
			align-items: stretch;
			gap: 4px;
			background: var(--white);
			padding: 90px 24px 32px;
			transform: translateX(100%);
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 999;
			box-shadow: var(--shadow-xl);
		}

		.nav-links.open {
			transform: translateX(0);
		}

		.nav-links a {
			font-size: 1.05rem;
			padding: 12px 16px;
		}

		.nav-cta-mobile {
			display: block;
			margin-top: 16px;
		}

		.nav-cta-mobile .btn-cta {
			display: flex;
			justify-content: center;
			width: 100%;
			padding: 14px;
		}
	}
</style>
