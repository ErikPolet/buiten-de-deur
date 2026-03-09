<script>
	import { base } from '$app/paths';
</script>

<section id="home" class="hero">
	<div class="hero-bg"></div>
	<div class="container hero-inner">
		<div class="hero-content">
			<div class="hero-badge">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
				PKVW-gecertificeerd adviseur
			</div>
			<h1>
				Een veilige woning,
				<span class="highlight">met advies dat werkt.</span>
			</h1>
			<p class="hero-sub">
				Onafhankelijk PKVW-adviseur in regio Leiderdorp — met meer dan
				<strong>20 jaar ervaring</strong> in hang- en sluitwerk. Duidelijk, eerlijk en
				praktisch advies bij jou thuis.
			</p>
			<div class="hero-actions">
				<a href="#contact" class="btn btn-primary">
					Plan een afspraak
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
				</a>
				<a href="#diensten" class="btn btn-outline">Bekijk diensten</a>
			</div>
			<div class="hero-trust">
				<div class="trust-item">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
					Gratis telefonische intake
				</div>
				<div class="trust-item">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
					Geen voorrijkosten &lt;5km
				</div>
				<div class="trust-item">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
					Komt op de e-bike
				</div>
			</div>
		</div>
		<div class="hero-visual">
		<div class="hero-card">
			<div class="card-photo-wrap">
				<img src="{base}/hero2.png" alt="Matthijs de Bes — PKVW-adviseur" class="card-photo" />
				<div class="card-photo-overlay"></div>
			</div>
			<div class="card-body">
				<div class="card-identity">
					<span class="card-name">Matthijs de Bes</span>
					<span class="card-role">Onafhankelijk PKVW-adviseur</span>
				</div>
				<div class="card-divider"></div>
				<div class="card-stats">
					<div class="stat">
						<span class="stat-number">20+</span>
						<span class="stat-label">jaar ervaring</span>
					</div>
					<div class="stat-sep"></div>
					<div class="stat">
						<span class="stat-number">100%</span>
						<span class="stat-label">onafhankelijk</span>
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		padding: 140px 0 100px;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 80% 60% at 70% 20%, rgba(30, 90, 138, 0.06) 0%, transparent 70%),
			radial-gradient(ellipse 60% 50% at 20% 80%, rgba(61, 139, 86, 0.04) 0%, transparent 70%),
			linear-gradient(180deg, var(--blue-50) 0%, var(--white) 60%);
		z-index: 0;
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 60px;
		align-items: center;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--blue-600);
		background: var(--blue-100);
		padding: 8px 16px;
		border-radius: 100px;
		margin-bottom: 24px;
	}

	h1 {
		font-size: clamp(2.2rem, 4.5vw, 3.4rem);
		font-weight: 800;
		color: var(--blue-900);
		margin-bottom: 20px;
		line-height: 1.1;
	}

	.highlight {
		color: var(--blue-600);
		display: block;
	}

	.hero-sub {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 520px;
		margin-bottom: 32px;
		line-height: 1.75;
	}

	.hero-sub strong {
		color: var(--text-primary);
	}

	.hero-actions {
		display: flex;
		gap: 12px;
		margin-bottom: 36px;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 0.95rem;
		font-weight: 600;
		padding: 14px 28px;
		border-radius: var(--radius-md);
		transition: var(--transition);
	}

	.btn-primary {
		background: var(--blue-600);
		color: var(--white);
		box-shadow: 0 4px 14px rgba(30, 90, 138, 0.3);
	}

	.btn-primary:hover {
		background: var(--blue-700);
		box-shadow: 0 6px 20px rgba(30, 90, 138, 0.4);
		transform: translateY(-2px);
	}

	.btn-outline {
		border: 2px solid var(--grey-200);
		color: var(--grey-700);
		background: var(--white);
	}

	.btn-outline:hover {
		border-color: var(--blue-400);
		color: var(--blue-600);
		background: var(--blue-50);
	}

	.hero-trust {
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.88rem;
		font-weight: 500;
		color: var(--grey-600);
	}

	.hero-visual {
		display: flex;
		justify-content: center;
	}

	.hero-card {
		background: var(--white);
		border-radius: var(--radius-xl);
		box-shadow: 0 20px 60px rgba(15, 42, 68, 0.12), 0 1px 3px rgba(15, 42, 68, 0.06);
		overflow: hidden;
		max-width: 280px;
		width: 100%;
	}

	.card-photo-wrap {
		position: relative;
		width: 100%;
		height: 260px;
		overflow: hidden;
	}

	.card-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.card-photo-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			transparent 40%,
			rgba(15, 42, 68, 0.05) 100%
		);
	}

	.card-body {
		padding: 24px 28px 28px;
	}

	.card-identity {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 20px;
	}

	.card-name {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--blue-900);
	}

	.card-role {
		font-size: 0.84rem;
		color: var(--grey-500);
		font-weight: 500;
	}

	.card-divider {
		height: 1px;
		background: var(--grey-100);
		margin-bottom: 20px;
	}

	.card-stats {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		gap: 10px;
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 2px;
		flex: 1;
	}

	.stat-sep {
		width: 1px;
		height: 32px;
		background: var(--grey-100);
		flex-shrink: 0;
	}

	.stat-number {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--blue-800);
	}

	.stat-label {
		font-size: 0.72rem;
		color: var(--grey-500);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	@media (max-width: 900px) {
		.hero {
			padding: 120px 0 72px;
		}

		.hero-inner {
			grid-template-columns: 1fr;
			gap: 48px;
			text-align: center;
		}

		.hero-sub {
			max-width: 100%;
			margin-left: auto;
			margin-right: auto;
		}

		.hero-actions {
			justify-content: center;
		}

		.hero-trust {
			justify-content: center;
		}

		.hero-badge {
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (max-width: 540px) {
		.hero {
			padding: 110px 0 56px;
		}

		.hero-trust {
			flex-direction: column;
			align-items: center;
			gap: 12px;
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.btn {
			justify-content: center;
		}

		.card-stats {
			gap: 20px;
		}
	}
</style>
