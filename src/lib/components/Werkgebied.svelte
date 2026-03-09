<section id="werkgebied" class="werkgebied">
	<div class="container">
		<div class="werkgebied-grid">
			<div class="werkgebied-content">
				<span class="section-label">Werkgebied</span>
				<h2>Actief in de regio Leiderdorp</h2>
				<p>
					Ik werk in <strong>Leiderdorp</strong> en binnen een straal van <strong>10 km</strong>.
					Ik kom persoonlijk bij je langs op mijn elektrische fiets.
				</p>
				<div class="locations">
					<div class="location-tag">Leiden</div>
					<div class="location-tag">Oegstgeest</div>
					<div class="location-tag">Voorschoten</div>
					<div class="location-tag">Zoeterwoude</div>
					<div class="location-tag">Warmond</div>
					<div class="location-tag">Hazerswoude-Rijndijk</div>
					<div class="location-tag">Benthuizen</div>
					<div class="location-tag">Rijpwetering</div>
					<div class="location-tag">Oud Ade</div>
				</div>
				<p class="note">Overige plaatsen in overleg mogelijk.</p>
			</div>
			<div class="werkgebied-visual">
				<div class="map-placeholder">
					<div class="map-circle">
						<div class="map-center">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" stroke-width="2">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
								<circle cx="12" cy="10" r="3"/>
							</svg>
							<span>Leiderdorp</span>
						</div>
						<div class="map-ring ring-1"></div>
						<div class="map-ring ring-2"></div>
						<div class="map-ring ring-3"></div>
						<span class="map-radius">10 km</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.werkgebied {
		padding: 100px 0;
	}

	.werkgebied-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 64px;
		align-items: center;
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
		margin-bottom: 16px;
	}

	.werkgebied-content > p {
		font-size: 1.02rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 28px;
	}

	.werkgebied-content > p strong {
		color: var(--text-primary);
	}

	.locations {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-bottom: 20px;
	}

	.location-tag {
		font-size: 0.88rem;
		font-weight: 500;
		color: var(--blue-800);
		background: var(--blue-50);
		padding: 8px 18px;
		border-radius: 100px;
		border: 1px solid var(--blue-100);
	}

	.note {
		font-size: 0.88rem;
		color: var(--grey-500);
		font-style: italic;
	}

	.werkgebied-visual {
		display: flex;
		justify-content: center;
	}

	.map-placeholder {
		width: 320px;
		height: 320px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.map-circle {
		position: relative;
		width: 280px;
		height: 280px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.map-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		z-index: 2;
	}

	.map-center span {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--blue-900);
	}

	.map-ring {
		position: absolute;
		border-radius: 50%;
		border: 1px solid var(--blue-400);
	}

	.ring-1 {
		width: 120px;
		height: 120px;
		opacity: 0.3;
		background: var(--blue-50);
	}

	.ring-2 {
		width: 200px;
		height: 200px;
		opacity: 0.2;
		background: var(--blue-50);
	}

	.ring-3 {
		width: 280px;
		height: 280px;
		opacity: 0.12;
		background: var(--blue-50);
		border-style: dashed;
	}

	.map-radius {
		position: absolute;
		bottom: 8px;
		right: 16px;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--blue-500);
		background: var(--white);
		padding: 4px 10px;
		border-radius: var(--radius-sm);
		box-shadow: var(--shadow-sm);
	}

	@media (max-width: 900px) {
		.werkgebied-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.werkgebied {
			padding: 72px 0;
		}

		.werkgebied-visual {
			order: -1;
		}

		.map-placeholder {
			width: 260px;
			height: 260px;
		}

		.map-circle {
			width: 240px;
			height: 240px;
		}

		.ring-3 {
			width: 240px;
			height: 240px;
		}

		.ring-2 {
			width: 170px;
			height: 170px;
		}

		.ring-1 {
			width: 100px;
			height: 100px;
		}
	}
</style>
