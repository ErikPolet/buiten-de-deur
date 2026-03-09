<section id="contact" class="contact">
	<div class="container">
		<div class="contact-grid">
			<div class="contact-info">
				<span class="section-label">Contact</span>
				<h2>Plan een afspraak</h2>
				<p>
					Heb je vragen of wil je direct een afspraak plannen?
					Ik help je graag verder. Vul het formulier in of neem rechtstreeks contact op.
				</p>

				<div class="contact-details">
					<a href="mailto:info@buitendeur.nl" class="contact-item">
						<div class="contact-icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
						</div>
						<div>
							<strong>E-mail</strong>
							<span>info@buitendeur.nl</span>
						</div>
					</a>

					<a href="tel:0654347550" class="contact-item">
						<div class="contact-icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
						</div>
						<div>
							<strong>Telefoon</strong>
							<span>06-54347550</span>
						</div>
					</a>

					<div class="contact-item">
						<div class="contact-icon">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
						</div>
						<div>
							<strong>Werkgebied</strong>
							<span>10 km rondom Leiderdorp</span>
						</div>
					</div>
				</div>

				<div class="intake-note">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--yellow-500)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
					<span>De eerste telefonische intake is <strong>gratis en vrijblijvend</strong>.</span>
				</div>
			</div>

			<div class="contact-form-wrap">
				<form class="contact-form" onsubmit={(e) => e.preventDefault()}>
					<div class="form-group">
						<label for="naam">Naam</label>
						<input type="text" id="naam" name="naam" placeholder="Uw volledige naam" required />
					</div>
					<div class="form-row">
						<div class="form-group">
							<label for="email">E-mail</label>
							<input type="email" id="email" name="email" placeholder="uw@email.nl" required />
						</div>
						<div class="form-group">
							<label for="telefoon">Telefoon</label>
							<input type="tel" id="telefoon" name="telefoon" placeholder="06-12345678" />
						</div>
					</div>
					<div class="form-group">
						<label for="pakket">Interesse in</label>
						<select id="pakket" name="pakket">
							<option value="">Selecteer een pakket (optioneel)</option>
							<option value="woningcheck">Pakket 1 — PKVW Woningcheck (€195)</option>
							<option value="certificaat">Pakket 2 — Woningcheck + Certificaat (€295)</option>
							<option value="nazorg">Pakket 3 — Herinspectie / nazorg (€95)</option>
						</select>
					</div>
					<div class="form-group">
						<label for="bericht">Bericht</label>
						<textarea id="bericht" name="bericht" rows="4" placeholder="Stel een vraag of vertel kort over uw situatie..."></textarea>
					</div>
					<button type="submit" class="submit-btn">
						Verstuur bericht
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		padding: 100px 0;
		background: var(--grey-50);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 64px;
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
		margin-bottom: 16px;
	}

	.contact-info > p {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 32px;
	}

	.contact-details {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-bottom: 28px;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px 20px;
		background: var(--white);
		border-radius: var(--radius-md);
		border: 1px solid var(--grey-200);
		transition: var(--transition);
	}

	a.contact-item:hover {
		border-color: var(--blue-400);
		box-shadow: var(--shadow-sm);
	}

	.contact-icon {
		width: 44px;
		height: 44px;
		border-radius: var(--radius-sm);
		background: var(--blue-50);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		color: var(--blue-600);
	}

	.contact-item strong {
		display: block;
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--grey-500);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 2px;
	}

	.contact-item span {
		font-size: 0.95rem;
		color: var(--text-primary);
		font-weight: 500;
	}

	.intake-note {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 14px 20px;
		background: var(--yellow-100);
		border-radius: var(--radius-md);
		border: 1px solid rgba(232, 168, 37, 0.2);
	}

	.intake-note span {
		font-size: 0.9rem;
		color: var(--grey-700);
	}

	.intake-note strong {
		color: var(--grey-900);
	}

	.contact-form-wrap {
		background: var(--white);
		border-radius: var(--radius-lg);
		padding: 40px 36px;
		box-shadow: var(--shadow-md);
		border: 1px solid var(--grey-100);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	label {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--grey-700);
	}

	input, select, textarea {
		font-family: inherit;
		font-size: 0.92rem;
		padding: 12px 16px;
		border: 1.5px solid var(--grey-200);
		border-radius: var(--radius-sm);
		background: var(--grey-50);
		color: var(--text-primary);
		transition: var(--transition);
		outline: none;
	}

	input:focus, select:focus, textarea:focus {
		border-color: var(--blue-500);
		background: var(--white);
		box-shadow: 0 0 0 3px rgba(37, 113, 171, 0.1);
	}

	input::placeholder, textarea::placeholder {
		color: var(--grey-400);
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}

	select {
		cursor: pointer;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2374748a' stroke-width='2.5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 14px center;
		padding-right: 40px;
	}

	.submit-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--white);
		background: var(--blue-600);
		padding: 15px 28px;
		border-radius: var(--radius-md);
		transition: var(--transition);
		box-shadow: 0 4px 14px rgba(30, 90, 138, 0.3);
		margin-top: 4px;
	}

	.submit-btn:hover {
		background: var(--blue-700);
		box-shadow: 0 6px 20px rgba(30, 90, 138, 0.4);
		transform: translateY(-2px);
	}

	@media (max-width: 900px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.contact {
			padding: 72px 0;
		}
	}

	@media (max-width: 540px) {
		.form-row {
			grid-template-columns: 1fr;
		}

		.contact-form-wrap {
			padding: 28px 24px;
		}
	}
</style>
