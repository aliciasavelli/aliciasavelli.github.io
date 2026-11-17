---
layout: landing
title: Plasma Research
description: Highlighted projects
image: assets/images/Plasmoids.jpg
banner_center: true          # show the middle of the banner image (with a gentle scroll effect)
banner_overlay: 0.35         # opacity of the purple tint over the banner (theme default 0.85)
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
				<p>Black holes and neutron stars are home to some of the most extreme environments in the Universe.  The highly relativistic plasma (gas made up of charged particles) falling onto these compact objects produces <strong>bright emission</strong>, making it our key to probing these environments.</p>
				<p>The conditions there are so extreme that they cannot be reproduced on Earth, and so we turn to computer simulations to study them.  However, the typical system size is roughly 100 billion times bigger than the individual particle interactions producing the emission, so <strong>no single simulation can cover all of this ground</strong>.  Instead, we use two complementary approaches: particle simulations (particle-in-cell, or PIC) capture the micro-scales, but they are computationally expensive and can only model cut-outs of the surrounding plasma, neglecting the compact object and its strong gravity; fluid simulations (general relativistic (resistive) magnetohydrodynamics, or GR(R)MHD) capture the dynamics of the whole system, but miss the micro-processes producing the emission.</p>
				<p><strong>Subgrid models</strong> are recipes that bridge this gap, smoothing over the small-scale physics to capture only its large-scale outcomes.  I write subgrid models to make global GR(R)MHD simulations of black holes and neutron stars more physically accurate, so that we can better understand the bright emission we observe from these extreme environments.</p>
			</div>
			<div data-level="astronomer" data-default>
				<p>The plasma around black holes and neutron stars produces bright emission across the electromagnetic spectrum, which is thought to be powered by <strong>magnetic reconnection</strong> &mdash; a process in which antiparallel magnetic field lines violently break apart and reconnect, converting stored magnetic energy into kinetic and thermal energy of the surrounding plasma.</p>
				<p>To simulate these systems, we use general relativistic (resistive) magnetohydrodynamic (GR(R)MHD) simulations, which treat the plasma as a fluid in curved spacetime, evolving conservation laws for mass, momentum, and energy coupled to the electromagnetic fields.  While this approach models the global dynamics of these systems, it cannot capture the small-scale microphysics of reconnection, such as particle energization and radiative cooling, that ultimately produces the emission we observe.  Capturing these scales requires particle-in-cell (PIC) simulations, which treat the plasma as clusters of particles drawn from the underlying distribution function; however, PIC simulations are computationally limited to local domains that neglect the compact object and its gravity.</p>
				<p>My research bridges this <strong>separation-of-scales gap</strong>: I develop <strong>subgrid models</strong> (simplified prescriptions for the macrophysical outcomes of microphysical processes, such as heating and cooling) and write them into global simulations, so that we can model the environments producing this bright emission.</p>
			</div>
			<div data-level="plasma" hidden>
				<p><strong>Relativistic magnetic reconnection</strong> is ubiquitous in extreme astrophysical systems such as black holes and neutron stars, where it is thought to power bright emission across the electromagnetic spectrum.</p>
				<p>Global GRMHD simulations capture the large-scale dynamics of these systems, including the in situ formation of current sheets; however, as a fluid description, they miss the <strong>collisionless physics</strong> that enables fast reconnection and determines how the dissipated energy heats the plasma and energizes particles.</p>
				<p>To bridge this gap, I write <strong>subgrid models</strong> of kinetic processes into resistive relativistic MHD (RRMHD), validate them against PIC simulations of local reconnection layers, and develop them for use in global simulations.  In this way, global models can capture realistic reconnection and, ultimately, the bright emission it is thought to power.</p>
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
					<div data-level="student" hidden>
						<p>When charged particles are accelerated, they emit radiation, effectively cooling the plasma.  In simulations, this emission is typically modelled as losses of energy and momentum.  We write a subgrid model for fluid simulations of a radiative plasma, in which the energy and momentum lost to radiation are calculated directly from the physical processes that create the emission.  We check our results in small cut-out boxes against &ldquo;ground truth&rdquo; particle simulations, which model the radiation mechanisms from first principles.  Our model captures properties such as the plasma temperature and the speed of the bulk outflows, which are important in global systems like black hole accretion flows and neutron star magnetospheres.</p>
					</div>
					<div data-level="astronomer" hidden>
						<p>The emission from reconnection sites around black holes and neutron stars depends on both the temperature of the plasma and the speed of its outflows.  While kinetic simulations capture radiative reconnection, they cannot reach global scales.  We write an RRMHD subgrid model that captures inverse Compton and synchrotron cooling as energy and momentum losses informed by first-principles kinetic theory, and benchmark it against kinetic simulations in the same local reconnection layer.  Our model reproduces the properties important for reconnection sites in global systems: the rapid rate at which reconnection proceeds, the plasma temperature, and the fast bulk outflows.</p>
					</div>
					<div data-level="plasma" data-default>
						<p>Radiative cooling in collisionless reconnection has been studied extensively with kinetic simulations, but has never been modelled with a fluid approach that can reach global scales.  We add an energy and momentum sink term to the RRMHD equations, coupled to an effective charge-starved resistivity prescription, to model radiative losses due to inverse Compton and synchrotron cooling in a local-box reconnection layer.  Our model reproduces macroscopic properties from kinetic simulations, including the fast reconnection rate, the temperature in the current sheet, and the bulk motions of the outflow.  Our results set the stage for more accurate modelling of reconnection sites in global simulations of black holes and neutron stars.</p>
					</div>
				</div>
				<ul class="actions">
					<li><a href="{{ site.baseurl }}/making-reconnection-cooler.html" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<span class="image">
			<img src="{{ site.baseurl }}/assets/images/pic09.jpg" alt="" data-position="top center" />
		</span>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>Resistive thin disk (work in progress)</h3>
				</header>
				<div class="levels">
					<div data-level="student" hidden>
						<p>Magnetic fields around black holes can be forced to dissipate, converting their stored magnetic energy into thermal and kinetic energy of the surrounding plasma.  Particle simulations show that magnetic fields dissipate about ten times faster than standard fluid simulations predict, and fluid simulations can now be adjusted to match, but this has not yet been done for a full simulation of an accretion disk, the disk of gas spiralling into a black hole.  In some cases, strong magnetic fields near the black hole hold back the inner edge of the disk, shutting off accretion and black hole growth.  We want to see whether faster dissipation of the magnetic field can free the disk from this state.  We also track how many protons from the disk reach the hot, diffuse region around the black hole known as the &ldquo;corona&rdquo;, where they may produce the high-energy neutrinos detected by the IceCube observatory.</p>
					</div>
					<div data-level="astronomer" hidden>
						<p>Reconnection in kinetic simulations proceeds about ten times faster than in standard fluid simulations.  Using an effective resistivity, fluid simulations can now reproduce this rapid rate, as demonstrated in local boxes and black hole magnetospheres, but not yet in a global accretion disk.  We simulate a cooled thin disk around a black hole that has become magnetically truncated, with strong magnetic fields near the black hole holding back the inner edge of the disk.  We aim to understand how fast reconnection affects magnetic flux eruptions in the disk, and whether, by letting magnetic flux escape at a faster rate, it may allow the disk to leave this truncated state.  We also track how disk material mixes into the hot inner &ldquo;corona&rdquo;, as protons supplied to this region are a candidate source of the IceCube neutrinos detected from Seyfert galaxies such as NGC 1068.</p>
					</div>
					<div data-level="plasma" data-default>
						<p>The fast (~0.1) reconnection rate of collisionless plasmas has not yet been modelled in a global accretion disk simulation.  We simulate a cooled accretion disk around a black hole with effective charge-starved resistivity in the truncated state, to understand how this fast rate affects the flux eruptions in the thin disk and see whether it may be able to trigger a transition back into an accreting state.  We also add a fluid tracer to track mixing of the disk material with the inner &ldquo;corona&rdquo;, as protons supplied to this region are a candidate source of IceCube neutrinos from Seyfert galaxies such as NGC 1068.</p>
					</div>
				</div>
				<ul class="actions">
					<li><span class="button disabled">Coming soon</span></li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<span class="image">
			<img src="{{ site.baseurl }}/assets/images/pic10.jpg" alt="" data-position="25% 25%" />
		</span>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>2-temperature reconnection (work in progress)</h3>
				</header>
				<div class="levels">
					<div data-level="student" hidden>
						<p>Around black holes, such as the one at the centre of our Galaxy, the plasma is so hot and thin that its particles rarely collide, so the electrons and protons can have very different temperatures.  The light we observe comes from the electrons, which means their temperature sets what our telescopes see, including the Event Horizon Telescope&rsquo;s images of black holes.  However, fluid simulations usually treat the electrons and protons as a single fluid, with the electron temperature painted on afterwards, so it cannot affect how the system evolves.  In small cut-out boxes, we instead track the electrons separately, heating the plasma through the physical dissipation of magnetic fields and using particle simulations to decide how much of this heat goes to the electrons versus the protons.  This gives a more physical recipe for electron temperatures in simulations of the full system.</p>
					</div>
					<div data-level="astronomer" hidden>
						<p>In the hot, low-density plasma around low-luminosity accreting black holes such as Sgr&nbsp;A&#42; and M87&#42;, the collisional mean free path is larger than the size of the system, so electrons and ions are not in thermal equilibrium.  Observed spectra and images trace emission from the electrons, and are thus largely set by the electron temperature.  However, global simulations typically heat the electrons using energy dissipated numerically at the grid scale, rather than through physical processes.  We track the electron temperature separately in local RRMHD simulations, where the plasma is heated through resistive (Ohmic) dissipation rather than numerically.  The fraction of this heat that goes to the electrons is taken from PIC simulations, giving a physically-informed heating prescription for use in global simulations.</p>
					</div>
					<div data-level="plasma" data-default>
						<p>The electron temperature sets the emission and images of low-luminosity accreting black holes such as Sgr&nbsp;A&#42; and M87&#42;.  However, electron heating in global simulations is typically calculated from numerical dissipation at the grid scale.  We evolve an electron entropy equation with an Ohmic resistive source term in local RRMHD simulations, taking the fraction of heat that goes to electrons from PIC simulations, for a physically-informed heating prescription between electrons and ions.</p>
					</div>
				</div>
				<ul class="actions">
					<li><span class="button disabled">Coming soon</span></li>
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
