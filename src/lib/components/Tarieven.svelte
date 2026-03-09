<section id="tarieven" class="tarieven">
	<div class="container">
		<div class="section-header">
			<span class="section-label">Tarieven</span>
			<h2>Transparante prijzen</h2>
			<p>Geen verborgen kosten. Duidelijk wat je krijgt voor je investering in veiligheid.</p>
		</div>

		<div class="pricing-grid">
			<div class="price-card">
				<div class="price-header">
					<span class="package-num">Pakket 1</span>
					<h3>PKVW Woningcheck</h3>
					<p class="price-desc">Volledige veiligheidsinspectie aan huis met direct mondeling advies</p>
				</div>
				<div class="price-amount">
					<span class="currency">&euro;</span>
					<span class="amount">195</span>
				</div>
				<ul class="price-features">
					<li>Inspectie deuren, ramen en sloten</li>
					<li>Controle verlichting en bereikbaarheid</li>
					<li>Mondeling advies ter plekke</li>
					<li>Concrete verbeterpunten</li>
				</ul>
				<a href="#contact" class="price-btn">Afspraak maken</a>
			</div>

			<div class="price-card popular">
				<div class="popular-badge">Meest gekozen</div>
				<div class="price-header">
					<span class="package-num">Pakket 2</span>
					<h3>Woningcheck + Certificaat</h3>
					<p class="price-desc">Complete inspectie inclusief officieel PKVW-adviesrapport</p>
				</div>
				<div class="price-amount">
					<span class="currency">&euro;</span>
					<span class="amount">295</span>
				</div>
				<ul class="price-features">
					<li>Alles uit Pakket 1</li>
					<li>Uitgebreid PKVW-adviesrapport</li>
					<li>Alle bevindingen gedocumenteerd</li>
					<li>Aanbevelingen en risico-analyse</li>
					<li>Suggesties passend hang- en sluitwerk</li>
				</ul>
				<a href="#contact" class="price-btn primary">Afspraak maken</a>
			</div>

			<div class="price-card">
				<div class="price-header">
					<span class="package-num">Pakket 3</span>
					<h3>Herinspectie / nazorg</h3>
					<p class="price-desc">Controle na uitgevoerde verbeteringen aan je woning</p>
				</div>
				<div class="price-amount">
					<span class="currency">&euro;</span>
					<span class="amount">95</span>
				</div>
				<ul class="price-features">
					<li>Controle na montage</li>
					<li>Toetsing aan PKVW-richtlijnen</li>
					<li>Bevestiging correcte installatie</li>
					<li>Advies indien nodig</li>
				</ul>
				<a href="#contact" class="price-btn">Afspraak maken</a>
			</div>
		</div>

		<div class="extras">
			<div class="extra-item">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
				Gratis telefonische intake
			</div>
			<div class="extra-item">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
				Geen voorrijkosten binnen 5 km van Leiderdorp
			</div>
		</div>
	</div>
</section>

<style>
	.tarieven {
		padding: 100px 0;
		background: var(--grey-50);
	}

	.section-header {
		text-align: center;
		max-width: 540px;
		margin: 0 auto 60px;
	}

	.section-label {
		display: inline-block;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--blue-600);
		margin-bottom: 12px;
	}

	.section-header h2 {
		font-size: clamp(1.8rem, 3vw, 2.4rem);
		font-weight: 800;
		color: var(--blue-900);
		margin-bottom: 16px;
	}

	.section-header p {
		font-size: 1.05rem;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
		align-items: start;
	}

	.price-card {
		position: relative;
		background: var(--white);
		border-radius: var(--radius-lg);
		padding: 36px 30px;
		border: 1px solid var(--grey-200);
		transition: var(--transition);
	}

	.price-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.price-card.popular {
		border: 2px solid var(--blue-500);
		box-shadow: var(--shadow-md);
		padding-top: 48px;
	}

	.popular-badge {
		position: absolute;
		top: -1px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--white);
		background: var(--blue-600);
		padding: 6px 18px;
		border-radius: 0 0 var(--radius-sm) var(--radius-sm);
	}

	.package-num {
		font-size: 0.78rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--grey-500);
	}

	.price-header h3 {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--blue-900);
		margin: 8px 0 8px;
	}

	.price-desc {
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.price-amount {
		display: flex;
		align-items: flex-start;
		gap: 4px;
		padding: 24px 0;
		border-bottom: 1px solid var(--grey-100);
		margin-bottom: 24px;
	}

	.currency {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--grey-500);
		margin-top: 8px;
	}

	.amount {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 3rem;
		font-weight: 800;
		color: var(--blue-900);
		line-height: 1;
	}

	.price-features {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 28px;
	}

	.price-features li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 0.88rem;
		color: var(--grey-700);
		line-height: 1.4;
	}

	.price-features li::before {
		content: '';
		flex-shrink: 0;
		width: 18px;
		height: 18px;
		margin-top: 1px;
		background: var(--green-100);
		border-radius: 50%;
		background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%233d8b56' stroke-width='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E");
		background-size: 10px;
		background-repeat: no-repeat;
		background-position: center;
	}

	.price-btn {
		display: block;
		text-align: center;
		font-size: 0.92rem;
		font-weight: 600;
		padding: 14px;
		border-radius: var(--radius-md);
		border: 2px solid var(--grey-200);
		color: var(--grey-700);
		transition: var(--transition);
	}

	.price-btn:hover {
		border-color: var(--blue-500);
		color: var(--blue-600);
		background: var(--blue-50);
	}

	.price-btn.primary {
		background: var(--blue-600);
		color: var(--white);
		border-color: var(--blue-600);
	}

	.price-btn.primary:hover {
		background: var(--blue-700);
		border-color: var(--blue-700);
	}

	.extras {
		display: flex;
		justify-content: center;
		gap: 40px;
		margin-top: 48px;
		flex-wrap: wrap;
	}

	.extra-item {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--grey-700);
	}

	@media (max-width: 900px) {
		.pricing-grid {
			grid-template-columns: 1fr;
			max-width: 420px;
			margin: 0 auto;
		}

		.tarieven {
			padding: 72px 0;
		}

		.extras {
			flex-direction: column;
			align-items: center;
			gap: 16px;
		}
	}
</style>
