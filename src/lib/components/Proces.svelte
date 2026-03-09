<section class="proces">
	<div class="container">
		<div class="section-header">
			<span class="section-label">Werkwijze</span>
			<h2>Zo werkt het</h2>
		</div>
		<div class="steps">
			<div class="step">
				<div class="step-number">1</div>
				<div class="step-content">
					<h3>Gratis intake</h3>
					<p>Bel of mail voor een vrijblijvend kennismakingsgesprek over je woonsituatie.</p>
				</div>
			</div>
			<div class="step-connector"></div>
			<div class="step">
				<div class="step-number">2</div>
				<div class="step-content">
					<h3>Veiligheidscheck</h3>
					<p>Ik kom op de fiets langs en inspecteer je woning grondig op alle PKVW-punten.</p>
				</div>
			</div>
			<div class="step-connector"></div>
			<div class="step">
				<div class="step-number">3</div>
				<div class="step-content">
					<h3>Adviesrapport</h3>
					<p>Je ontvangt een helder rapport met bevindingen, risico's en aanbevelingen.</p>
				</div>
			</div>
			<div class="step-connector"></div>
			<div class="step">
				<div class="step-number">4</div>
				<div class="step-content">
					<h3>Nazorg</h3>
					<p>Na verbetering controleer ik of alles correct is gemonteerd. Zekerheid gegarandeerd.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.proces {
		padding: 80px 0;
		background: var(--blue-900);
		color: var(--white);
	}

	.section-header {
		text-align: center;
		margin-bottom: 56px;
	}

	.section-label {
		display: inline-block;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--blue-400);
		margin-bottom: 12px;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.4rem);
		font-weight: 800;
	}

	.steps {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 0;
	}

	.step {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 220px;
		flex: 1;
	}

	.step-number {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: var(--blue-600);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 1.2rem;
		font-weight: 800;
		margin-bottom: 20px;
		flex-shrink: 0;
	}

	.step-content h3 {
		font-size: 1.02rem;
		font-weight: 700;
		margin-bottom: 8px;
	}

	.step-content p {
		font-size: 0.86rem;
		color: var(--grey-400);
		line-height: 1.6;
	}

	.step-connector {
		width: 60px;
		height: 2px;
		background: var(--blue-700);
		margin-top: 26px;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.steps {
			flex-direction: column;
			align-items: center;
			gap: 0;
		}

		.step {
			flex-direction: row;
			text-align: left;
			max-width: 360px;
			gap: 20px;
		}

		.step-number {
			margin-bottom: 0;
		}

		.step-connector {
			width: 2px;
			height: 32px;
			margin-top: 0;
			margin-left: 26px;
		}
	}
</style>
