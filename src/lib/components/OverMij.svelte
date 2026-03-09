<section id="over-mij" class="over-mij">
	<div class="container">
		<div class="about-grid">
			<div class="about-content">
				<span class="section-label">Over mij</span>
				<h2>Matthijs de Bes</h2>
				<p class="lead">
					Ik werk al meer dan <strong>20 jaar</strong> in de wereld van hang- en sluitwerk. In die tijd heb ik
					duizenden deuren, ramen, sloten en beveiligingsproducten gezien, verkocht en beoordeeld
					voor de zakelijke markt.
				</p>
				<p>
					Daardoor weet ik precies welke materialen betrouwbaar zijn, welk sluitwerk echt veilig is
					en waar de risico's zitten.
				</p>
				<p>
					Met buitendeur.nl gebruik ik mijn ervaring nu voor onafhankelijke PKVW-adviezen aan bewoners.
					Geen verkooppraatjes, geen merkvoorkeur — alleen eerlijk, praktisch advies dat past bij
					jouw woning en situatie.
				</p>

				<div class="eco-note">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-500)" stroke-width="2">
						<path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"/>
					</svg>
					<div>
						<strong>Lokaal en duurzaam</strong>
						<span>Ik kom op mijn elektrische fiets bij je langs — binnen 10 km van Leiderdorp. Snel, flexibel en persoonlijk.</span>
					</div>
				</div>
			</div>

			<div class="about-side">
				<div class="approach-card">
					<h3>Mijn aanpak</h3>
					<div class="approach-list">
						<div class="approach-item">
							<div class="approach-icon">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
							</div>
							<div>
								<strong>Helder en direct</strong>
								<span>Onafhankelijk en direct toepasbaar advies</span>
							</div>
						</div>
						<div class="approach-item">
							<div class="approach-icon">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
							</div>
							<div>
								<strong>Op maat</strong>
								<span>Aandacht voor jouw woning en jouw wensen</span>
							</div>
						</div>
						<div class="approach-item">
							<div class="approach-icon">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
							</div>
							<div>
								<strong>Veiligheid voorop</strong>
								<span>Check op veiligheid, montagekwaliteit en materiaalkeuze</span>
							</div>
						</div>
						<div class="approach-item">
							<div class="approach-icon">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
							</div>
							<div>
								<strong>Rapport op maat</strong>
								<span>Helder document met alle bevindingen</span>
							</div>
						</div>
					</div>
				</div>
				<p class="closing">Ik help je graag aan een veilig gevoel in je eigen huis.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.over-mij {
		padding: 100px 0;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
		align-items: start;
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

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.4rem);
		font-weight: 800;
		color: var(--blue-900);
		margin-bottom: 24px;
	}

	.lead {
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--text-secondary);
		margin-bottom: 16px;
	}

	.lead strong {
		color: var(--text-primary);
	}

	.about-content p {
		font-size: 0.95rem;
		line-height: 1.8;
		color: var(--text-secondary);
		margin-bottom: 16px;
	}

	.eco-note {
		display: flex;
		align-items: flex-start;
		gap: 16px;
		margin-top: 28px;
		padding: 20px 24px;
		background: var(--green-100);
		border-radius: var(--radius-md);
		border-left: 4px solid var(--green-500);
	}

	.eco-note svg {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.eco-note strong {
		display: block;
		font-size: 0.9rem;
		color: var(--green-700);
		margin-bottom: 4px;
	}

	.eco-note span {
		font-size: 0.88rem;
		color: var(--grey-700);
		line-height: 1.6;
	}

	.approach-card {
		background: var(--blue-900);
		border-radius: var(--radius-lg);
		padding: 36px 32px;
		color: var(--white);
	}

	.approach-card h3 {
		font-size: 1.15rem;
		font-weight: 700;
		margin-bottom: 24px;
	}

	.approach-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.approach-item {
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.approach-icon {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		border-radius: var(--radius-sm);
		background: rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--blue-400);
	}

	.approach-item strong {
		display: block;
		font-size: 0.9rem;
		margin-bottom: 2px;
	}

	.approach-item span {
		font-size: 0.82rem;
		color: var(--grey-400);
		line-height: 1.5;
	}

	.closing {
		margin-top: 24px;
		font-size: 1rem;
		font-weight: 600;
		color: var(--blue-800);
		font-style: italic;
		text-align: left;
		padding-left: 32px;
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.over-mij {
			padding: 72px 0;
		}
	}
</style>
