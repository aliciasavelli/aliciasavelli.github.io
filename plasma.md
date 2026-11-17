---
layout: landing
title: Plasma Research
description: Highlighted projects
image: assets/images/Plasmoids.jpg
tile_image: 
nav-menu: true
show_tile: true
---

<!--
  READING-LEVEL TOGGLE
  Any <div class="levels"> block can hold up to three versions of the same text:
    <div data-level="student" hidden> ... </div>
    <div data-level="astronomer" hidden> ... </div>
    <div data-level="plasma" hidden> ... </div>
  The version marked data-default (no "hidden") is shown whenever the chosen level
  has no version of its own, and to visitors without JavaScript.
  To add a version, replace one of the placeholder lines (the ones starting with
  "if jekyll.environment") with e.g.  <div data-level="student" hidden><p>Your text</p></div>
  Placeholders only show when previewing locally; the live site skips them.
  Toggle logic: assets/js/levels.js    Styles: _sass/components/_levels.scss
-->

<!-- Main -->
<div id="main">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h2>(G)R(R)MHD simulations of plasma in extreme astrophysical environments</h2>
		</header>
		<div class="level-toggle" hidden>
			<span class="level-toggle-label">Written for</span>
			<ul class="actions">
				<li><button type="button" class="button small" data-set-level="student">Student</button></li>
				<li><button type="button" class="button small" data-set-level="astronomer">Astronomer</button></li>
				<li><button type="button" class="button small" data-set-level="plasma">Plasma astrophysicist</button></li>
			</ul>
		</div>
		<div class="levels">
			<div data-level="student" hidden>
				<p>Black holes and neutron stars are home to some of the most extreme environments in the Universe.  The highly relativistic plasma (gas made up of charged particles) falling onto these compact objects produces bright emission, making it our key to probing these environments.  The conditions there are so extreme that they cannot be reproduced on Earth, and so we turn to computer simulations to study them.  However, the typical system size is roughly 100 billion times bigger than the individual particle interactions producing the emission, so no single simulation can cover all of this ground.  Instead, we use two complementary approaches: particle simulations (particle-in-cell, or PIC) capture the micro-scales, but they are computationally expensive and can only model cut-outs of the surrounding plasma, neglecting the compact object and its strong gravity; fluid simulations (general relativistic magnetohydrodynamics, or GRMHD) capture the dynamics of the whole system, but miss the micro-processes producing the emission.  Subgrid models are recipes that bridge this gap, smoothing over the small-scale physics to capture only its large-scale outcomes.  I write subgrid models to make global GRMHD simulations of black holes and neutron stars more physically accurate, so that we can better understand the bright emission we observe from these extreme environments.</p>
			</div>
			<div data-level="astronomer" data-default>
				<p>The plasma around black holes and neutron stars produces bright emission across the electromagnetic spectrum, which is thought to be powered by magnetic reconnection &mdash; a process in which antiparallel magnetic field lines violently break apart and reconnect, converting stored magnetic energy into kinetic and thermal energy of the surrounding plasma.  To simulate these systems, we use general relativistic (resistive) magnetohydrodynamic (GR(R)MHD) simulations, which treat the plasma as a fluid in curved spacetime, evolving conservation laws for mass, momentum, and energy coupled to the electromagnetic fields.  While this approach models the global dynamics of these systems, it cannot capture the small-scale microphysics of reconnection, such as particle energization and radiative cooling, that ultimately produces the emission we observe.  Capturing these scales requires particle-in-cell (PIC) simulations, which treat the plasma as clusters of particles drawn from the underlying distribution function; however, PIC simulations are computationally limited to local domains that neglect the compact object and its gravity.  My research bridges this separation-of-scales gap: I develop subgrid models (simplified prescriptions for the macrophysical outcomes of microphysical processes, such as heating and cooling) and write them into global simulations, so that we can model the environments producing this bright emission.</p>
			</div>
			<div data-level="plasma" hidden>
				<p>Relativistic magnetic reconnection is ubiquitous in extreme astrophysical systems such as black holes and neutron stars, where it is thought to power bright emission across the electromagnetic spectrum.  Global GRMHD simulations capture the large-scale dynamics of these systems, including the in situ formation of current sheets; however, as a fluid description, they miss the collisionless physics that enables fast reconnection and determines how the dissipated energy heats the plasma and energizes particles.  To bridge this gap, I write subgrid models of kinetic processes into resistive relativistic MHD (RRMHD), validate them against PIC simulations of local reconnection layers, and develop them for use in global simulations.  In this way, global models can capture realistic reconnection and, ultimately, the bright emission it is thought to power.</p>
			</div>
		</div>
        <p>Here I highlight some selected first-author projects from my plasma astrophysics research.</p>
	</div>
</section>

<!-- Two -->
<section id="two" class="spotlights">
	<section>
		<a href="{{ site.baseurl }}/making-reconnection-cooler.html" class="image">
			<img src="{{ site.baseurl }}/assets/images/plasma/making-reconnection-cooler.jpg" alt="" data-position="center center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>Making Reconnection Cooler</h3>
				</header>
				<div class="levels">
					{% if jekyll.environment != "production" %}<div data-level="student" hidden><p class="level-todo">Student version: not written yet (only visible when previewing locally).</p></div>{% endif %}
					{% if jekyll.environment != "production" %}<div data-level="astronomer" hidden><p class="level-todo">Astronomer version: not written yet (only visible when previewing locally).</p></div>{% endif %}
					<div data-level="plasma" data-default>
						<p>We add an energy and momentum sink term to the RRMHD equations coupled to an effective charge-starved resistivity prescription to model radiative losses due to inverse Compton cooling in a local-box reconnection layer.  Our sink term is able to reproduce macroscopic properties from kinetic simulations, including the fast reconnection rate, the temperature in the current sheet, and the bulk motions of the outflow.  Our results set the stage for more accurate reconnection sites in global simulations of black holes and neutron stars.</p>
					</div>
				</div>
				<ul class="actions">
					<li><a href="{{ site.baseurl }}/making-reconnection-cooler.html" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<a href="generic.html" class="image">
			<img src="{{ site.baseurl }}/assets/images/pic09.jpg" alt="" data-position="top center" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>Resistive thin disk (work in progress)</h3>
				</header>
				<div class="levels">
					{% if jekyll.environment != "production" %}<div data-level="student" hidden><p class="level-todo">Student version: not written yet (only visible when previewing locally).</p></div>{% endif %}
					{% if jekyll.environment != "production" %}<div data-level="astronomer" hidden><p class="level-todo">Astronomer version: not written yet (only visible when previewing locally).</p></div>{% endif %}
					<div data-level="plasma" data-default>
						<p>We simulate a cooled accretion disk around a black hole with effective charge-starved resistivity in the truncated state.  We wish to understand how the fast reconnection rate from charge-starved resistivity affects the flux eruptions in the thin disk and whether it may be able to trigger a state transition.</p>
					</div>
				</div>
				<ul class="actions">
					<li><a href="generic.html" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<a href="generic.html" class="image">
			<img src="{{ site.baseurl }}/assets/images/pic10.jpg" alt="" data-position="25% 25%" />
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>2-temperature reconnection (work in progress)</h3>
				</header>
				<div class="levels">
					{% if jekyll.environment != "production" %}<div data-level="student" hidden><p class="level-todo">Student version: not written yet (only visible when previewing locally).</p></div>{% endif %}
					{% if jekyll.environment != "production" %}<div data-level="astronomer" hidden><p class="level-todo">Astronomer version: not written yet (only visible when previewing locally).</p></div>{% endif %}
					<div data-level="plasma" data-default>
						<p>We evolve an electron entropy equation with an Ohmic resistive source term in an RRMHD simulation of a local-box reconnection layer for a physically-informed heating prescription between electrons and ions.</p>
					</div>
				</div>
				<ul class="actions">
					<li><a href="generic.html" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
</section>

<!-- Three -->
<section id="three">
	<div class="inner">
		<header class="major">
			<h2>All publications</h2>
		</header>
		<p>Above I have provided in-depth descriptions of selected projects I have worked on.  For a full list of my publications, click the link below.</p>
		<ul class="actions">
			<li><a href="https://ui.adsabs.harvard.edu/public-libraries/veCStOwMSHa-qBoVTqnBKQ" class="button next">My publications</a></li>
		</ul>
	</div>
</section>

</div>

<script src="{{ site.baseurl }}/assets/js/levels.js"></script>
