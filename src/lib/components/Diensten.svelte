<section id="diensten" class="diensten">
	<div class="container">
		<div class="section-header">
			<span class="section-label">Diensten</span>
			<h2>Waar ik je mee help</h2>
			<p>Professionele PKVW-diensten voor een veiliger thuis — van inspectie tot certificering.</p>
		</div>

		<div class="services-grid">
			<div class="service-card">
				<div class="service-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" stroke-width="1.5">
						<path d="M9 11l3 3L22 4"/>
						<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
					</svg>
				</div>
				<h3>PKVW-Veiligheidscheck</h3>
				<p>
					Volledige inspectie van deuren, ramen, sloten, scharnieren, verlichting en bereikbaarheid.
					Je krijgt direct mondeling advies en concrete punten om jouw woning veiliger te maken.
				</p>
				<ul>
					<li>Controle op PKVW-richtlijnen</li>
					<li>Materiaalbeoordeling (20+ jaar vakervaring)</li>
					<li>Check op montagekwaliteit</li>
					<li>Praktische tips voor directe verbetering</li>
				</ul>
			</div>

			<div class="service-card featured">
				<div class="featured-tag">Populair</div>
				<div class="service-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" stroke-width="1.5">
						<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
						<polyline points="14 2 14 8 20 8"/>
						<line x1="16" y1="13" x2="8" y2="13"/>
						<line x1="16" y1="17" x2="8" y2="17"/>
						<polyline points="10 9 9 9 8 9"/>
					</svg>
				</div>
				<h3>PKVW-Adviesrapport</h3>
				<p>
					Een helder, compact rapport met alle bevindingen en concrete aanbevelingen
					voor jouw woningsituatie.
				</p>
				<ul>
					<li>Alle bevindingen overzichtelijk</li>
					<li>Concrete aanbevelingen</li>
					<li>Eventuele risico's benoemd</li>
					<li>Suggesties voor passend hang- en sluitwerk</li>
				</ul>
			</div>

			<div class="service-card">
				<div class="service-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--blue-600)" stroke-width="1.5">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						<path d="M9 12l2 2 4-4"/>
					</svg>
				</div>
				<h3>Nazorg &amp; hercontrole</h3>
				<p>
					Heb je verbeteringen uitgevoerd? Ik controleer of alles correct en
					veilig is gemonteerd volgens PKVW-richtlijnen.
				</p>
				<ul>
					<li>Controle na montage</li>
					<li>Toetsing aan PKVW-normen</li>
					<li>Geruststellend en onafhankelijk</li>
					<li>Zekerheid over juiste installatie</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.diensten {
		padding: 100px 0;
		background: var(--grey-50);
	}

	.section-header {
		text-align: center;
		max-width: 600px;
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

	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
	}

	.service-card {
		position: relative;
		background: var(--white);
		border-radius: var(--radius-lg);
		padding: 36px 30px;
		border: 1px solid var(--grey-200);
		transition: var(--transition);
	}

	.service-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--blue-400);
	}

	.service-card.featured {
		border-color: var(--blue-500);
		box-shadow: var(--shadow-md);
		background: linear-gradient(180deg, var(--blue-50) 0%, var(--white) 40%);
	}

	.featured-tag {
		position: absolute;
		top: -1px;
		right: 24px;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--white);
		background: var(--blue-600);
		padding: 6px 14px;
		border-radius: 0 0 var(--radius-sm) var(--radius-sm);
	}

	.service-icon {
		width: 60px;
		height: 60px;
		border-radius: var(--radius-md);
		background: var(--blue-50);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	.service-card h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--blue-900);
		margin-bottom: 12px;
	}

	.service-card > p {
		font-size: 0.92rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 20px;
	}

	.service-card ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.service-card li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 0.88rem;
		color: var(--grey-700);
		line-height: 1.5;
	}

	.service-card li::before {
		content: '';
		flex-shrink: 0;
		width: 18px;
		height: 18px;
		margin-top: 2px;
		background: var(--green-100);
		border-radius: 50%;
		background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%233d8b56' stroke-width='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E");
		background-size: 10px;
		background-repeat: no-repeat;
		background-position: center;
	}

	@media (max-width: 900px) {
		.services-grid {
			grid-template-columns: 1fr;
			max-width: 500px;
			margin: 0 auto;
		}

		.diensten {
			padding: 72px 0;
		}
	}
</style>
