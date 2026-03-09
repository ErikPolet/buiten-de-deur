<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-brand">
				<img src="/logo.png" alt="Buiten de Deur" class="footer-logo" />
				<p>Onafhankelijk PKVW-adviseur in regio Leiderdorp. Een veilige woning, met advies dat werkt.</p>
			</div>

			<div class="footer-col">
				<h4>Navigatie</h4>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#diensten">Diensten</a></li>
					<li><a href="#over-mij">Over mij</a></li>
					<li><a href="#tarieven">Tarieven</a></li>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Contact</h4>
				<ul>
					<li>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
						<a href="mailto:info@buitendeur.nl">info@buitendeur.nl</a>
					</li>
					<li>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
						<a href="tel:0654347550">06-54347550</a>
					</li>
					<li>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
						Regio Leiderdorp
					</li>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Keurmerk</h4>
				<img src="/pkvw-logo.jpg" alt="Politie Keurmerk Veilig Wonen" class="pkvw-badge" />
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Buiten de Deur — Alle rechten voorbehouden</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--blue-900);
		color: var(--grey-300);
		padding: 64px 0 0;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr 0.8fr;
		gap: 48px;
	}

	.footer-logo {
		height: 64px;
		width: auto;
		margin-bottom: 20px;
		filter: brightness(0) invert(1);
	}

	.footer-brand p {
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--grey-400);
		max-width: 300px;
	}

	.footer-col h4 {
		font-family: 'Plus Jakarta Sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--white);
		margin-bottom: 20px;
	}

	.footer-col ul {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footer-col li {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.9rem;
	}

	.footer-col li svg {
		flex-shrink: 0;
		color: var(--blue-400);
	}

	.footer-col a {
		transition: color var(--transition);
	}

	.footer-col a:hover {
		color: var(--white);
	}

	.pkvw-badge {
		width: 90px;
		border-radius: var(--radius-sm);
		background: var(--white);
		padding: 6px;
	}

	.footer-bottom {
		margin-top: 48px;
		padding: 24px 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		text-align: center;
	}

	.footer-bottom p {
		font-size: 0.82rem;
		color: var(--grey-500);
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 40px;
		}
	}

	@media (max-width: 540px) {
		.footer {
			padding: 48px 0 0;
		}

		.footer-grid {
			grid-template-columns: 1fr;
			gap: 36px;
		}
	}
</style>
