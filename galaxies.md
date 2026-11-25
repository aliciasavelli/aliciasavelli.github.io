---
layout: landing
title: Galaxy Research
description: Highlighted projects
image: assets/images/galaxies/galaxies-banner.jpg   # banner: top MWAs from Fig. 3 of the MWA paper, EAGLE and TNG in a checkerboard
tile_image: assets/images/galaxies/galaxies-tile.jpg   # home-page tile: the same galaxies in a 3x2 grid
banner_center: true
banner_overlay: 0.35
banner_style: 4              # banner tint colour: 4 = gold (accent4), the colour of this page's home tile
nav-menu: true
show_tile: true
tile_icon: fa-star           # badge on the home-page tile
tile_accent: accent4         # tile colour on the home page (accent1-6)
tile_order: 3                # position of the tile on the home page
tile_desktop_order: 2        # on computers: next to About, above the wide Plasma tile (on phones it stays 3rd)
---

<!-- Main -->
<div id="main">

<!-- One: introduction -->
<section id="one">
	<div class="inner cute accent4">
		<h2><span class="badge fa-star"></span>Galaxy evolution in cosmological simulations</h2>
		<div class="level-toggle" hidden>
			<span class="level-toggle-label">Written for</span>
			<ul class="actions">
				<li><button type="button" class="button small" data-set-level="student">Student</button></li>
				<li><button type="button" class="button small" data-set-level="astronomer">Astronomer</button></li>
			</ul>
		</div>
		<div class="levels intro">
			<div data-level="student" hidden>
				<p>Galaxies evolve over billions of years, so every telescope image captures only a single moment in a galaxy&rsquo;s life.  Cosmological simulations are &ldquo;universes in a box&rdquo; that follow the growth of structure from shortly after the Big Bang to today.  They let us <strong>rewind time</strong> and watch individual galaxies grow, and by comparing the simulated galaxies to those we observe, we can test our theories of how galaxies form.</p>
				<p>However, a single simulation must follow the cosmic web across hundreds of millions of light-years, while the stars, supernovae, and black holes that shape each galaxy are far too small to resolve.  Simulations instead rely on <strong>subgrid models</strong>: recipes that describe physics happening below the scale which the simulation can resolve, like how gas turns into stars and how exploding stars and growing black holes heat gas and blow it out of galaxies.  These recipes are tuned so that the simulated galaxies match what we observe today, such as how many galaxies there are of each mass, but the physics behind them still involves some educated guesswork.  As a result, simulations that agree on the galaxies of today can tell <strong>very different stories</strong> about how those galaxies got there.</p>
				<p>I am interested in how these subgrid models shape the way galaxies evolve, and in what the differences between simulations can teach us about the physics of galaxy formation.</p>
			</div>
			<div data-level="astronomer" data-default>
				<p>Cosmological simulations follow the formation of structure from near-uniform initial conditions to the galaxy population we observe today.  They offer something observations cannot: the ability to trace a <strong>single galaxy&rsquo;s evolution</strong> continuously through cosmic time.  Observations capture each galaxy at only one moment, so simulations are how we connect galaxies across cosmic time and test theories of galaxy formation against the observed population.</p>
				<p>These simulations span scales from the cosmic web down to individual star-forming regions, so they cannot resolve all of the relevant physics at once.  Processes below the resolution limit, such as star formation, black hole growth, and stellar and active galactic nucleus (AGN) feedback, are instead captured by <strong>subgrid models</strong>.  The free parameters in these models are calibrated against present-day observables, such as the galaxy stellar mass function and the stellar mass&ndash;halo mass relation.  However, these constraints are degenerate: different subgrid prescriptions can reproduce the same present-day galaxies through <strong>different evolutionary pathways</strong>.</p>
				<p>My research focusses on how these subgrid models dictate galaxy evolution, using the differences between simulation results to probe the underlying physics.</p>
			</div>
		</div>
		<p>Here I highlight some selected first-author projects from my galaxy evolution research.</p>
	</div>
</section>

<!-- Two: project cards (all in this page's colour; figure sides alternate automatically) -->
<section id="two">
	<div class="inner projects cute">
		<article class="project accent4">
			<span class="media">
				<video autoplay loop muted playsinline preload="auto" poster="{{ site.baseurl }}/assets/images/galaxies/milky-way-analogues-poster.jpg" aria-label="Animation of galaxies growing over the last 10 billion years: galaxies that look like the Milky Way are circled, two later drop out as quenched and too blue, and only one is a true Milky Way analogue today, where it is replaced by an image of the Milky Way; time then rewinds">
					<source src="{{ site.baseurl }}/assets/images/galaxies/milky-way-analogues.mp4" type="video/mp4" />
					<source src="{{ site.baseurl }}/assets/images/galaxies/milky-way-analogues.webm" type="video/webm" />
				</video>
			</span>
			<div class="body">
				<h3><span class="badge">1</span>SF-R You Sure?</h3>
				<div class="levels">
					<div data-level="student" hidden>
						<p>The Milky Way is only one galaxy, seen at a single moment in time.  To understand it better, we study Milky Way analogues (MWAs) &mdash; galaxies with similar properties to ours &mdash; in cosmological simulations, allowing us to rewind time and watch how these galaxies grew into MWAs today, which no telescope can do.  We define MWAs by their mass in stars and star formation rate (the rate at which a galaxy turns gas into stars), and compare them in two different simulations to see how the underlying subgrid physics may result in very different evolutionary paths ultimately producing similar-looking MWAs.  We find that in both simulations the way an MWA grows is dictated primarily by the mass it ends up at today, with its star formation rate influencing late-time evolution only slightly; however, the simulations disagree on whether MWAs keep forming stars throughout their lives, which would leave them too blue compared to the real Milky Way, or slow down and turn red as ours has.  We also test if galaxies that looked similar to the Milky Way in the past still look similar today, finding that most do not, so observations of distant galaxies that resemble the young Milky Way may reveal less about our Galaxy&rsquo;s history than hoped.</p>
					</div>
					<div data-level="astronomer" data-default>
						<p>Milky Way analogues (MWAs) help place our Galaxy in an extragalactic context, and in cosmological simulations, we can follow the full evolution of an MWA in contrast to observing a single snapshot.  With no standard definition of an MWA, we ask whether matching the Milky Way&rsquo;s stellar mass alone is enough to select MWAs, or whether the Milky Way&rsquo;s star formation rate (SFR) should be matched as well.  We find that present-day stellar mass sets how an MWA assembles its stars, while also requiring the Milky Way&rsquo;s SFR only changes the star formation history at late times, once most of the stellar mass is already in place.  The two simulations disagree on how MWAs evolve at late times: in EAGLE, MWAs quench slowly and match the Milky Way&rsquo;s red colour, whereas in IllustrisTNG, MWAs avoid the quenching that most galaxies of the same mass undergo and are too blue compared to the Milky Way, highlighting how different subgrid physics prescriptions can create two similar-looking galaxies via different evolutionary tracks.  We then mock-observe MWAs at higher redshift and follow these galaxies forward in time to see whether they remain MWAs by z = 0.  Only a small fraction of these high-redshift galaxies become MWAs by z = 0, and that fraction decreases sharply when SFR is included in the selection.  Together, these results show how MWAs should be selected so that observations of high-redshift MWAs can reliably inform the evolution of our own Galaxy, and how the subgrid models in a simulation shape the evolution we expect for it, ultimately begging the question: SF-R You Sure you want to select MWAs based on SFR?</p>
					</div>
				</div>
				<ul class="actions">
					<li><span class="button disabled">Coming soon</span></li>
				</ul>
			</div>
		</article>
		<article class="project accent4">
			<span class="media">
				<video autoplay loop muted playsinline preload="auto" poster="{{ site.baseurl }}/assets/images/galaxies/star-formation-histories-poster.jpg" aria-label="Animation of five supercomputers, one per simulation, drawing star formation histories through cosmic time: two shapes are made by every simulation, while the others are made by only one or two">
					<source src="{{ site.baseurl }}/assets/images/galaxies/star-formation-histories.mp4" type="video/mp4" />
					<source src="{{ site.baseurl }}/assets/images/galaxies/star-formation-histories.webm" type="video/webm" />
				</video>
			</span>
			<div class="body">
				<h3><span class="badge">2</span>Star formation histories across cosmological simulations</h3>
				<div class="levels">
					<div data-level="student" hidden>
						<p>A galaxy&rsquo;s star formation history shows how quickly it formed its stars over cosmic time.  Different simulations are tuned to produce the same galaxies today, but their subgrid models can reach those final galaxies through different evolutionary paths.  We compare the star formation histories of ~63,000 galaxies from seven different simulations to see where the simulations agree and where they differ.  Many histories are produced by several simulations, and the shapes of these histories follow the growth of the dark matter halo (the clump of invisible dark matter surrounding each galaxy), meaning that gravity sets their shape to first order.  Other histories are produced by only one or two simulations, suggesting that they come from the particular subgrid recipes in those simulations, such as how each simulation triggers bursts of star formation when galaxies merge.  We also train a machine learning algorithm to guess which simulation a given history came from, and it is right about 95% of the time, using the long-term shape of the history rather than its short-term flickering.  Astronomers can estimate the long-term histories of real galaxies, so these differences could be used to test which subgrid models best describe our Universe.</p>
					</div>
					<div data-level="astronomer" data-default>
						<p>Although cosmological simulations are calibrated to the same present-day observables, the evolutionary paths they take to get there may differ between different simulations; this degeneracy probes the underlying subgrid physics written into a given simulation.  We compare the specific star formation histories (sSFHs) of about 63,000 galaxies from seven simulations (spanning (magneto-)hydrodynamical, semi-analytic, and semi-empirical), using dimensionality reduction to sort the shapes of the sSFHs into histories common to several simulations or unique to one or two simulations.  Common shapes are described to first order by dark matter halo assembly, with the exception of a rapidly quenched population found in most simulations that is likely driven by AGN feedback.  Unique shapes likely reflect the subgrid choices of individual simulations, such as the merger-triggered starbursts in the Santa Cruz semi-analytic model.  The origin of the most distinctive shape, an early peak followed by a slow decline in Illustris, remains unclear.  An autoencoder neural network recovers which simulation an SFH came from with about 95% accuracy, and smoothing the SFHs shows that the information used lies in their Gyr-scale shape rather than their short-term variability.  Non-parametric SED fitting recovers Gyr-scale SFHs of observed galaxies, so these differences between simulations are in principle observable, providing a route to test subgrid models against observations.</p>
					</div>
				</div>
				<ul class="actions">
					<li><span class="button disabled">Coming soon</span></li>
				</ul>
			</div>
		</article>
	</div>
</section>

<!-- Three: publications -->
<section id="three">
	<div class="inner cute accent4">
		<h2><span class="badge fa-book"></span>All publications</h2>
		<p>Above I have provided in-depth descriptions of selected projects I have worked on.  For a full list of my publications, click the link below.</p>
		<ul class="actions">
			<li><a href="https://ui.adsabs.harvard.edu/public-libraries/veCStOwMSHa-qBoVTqnBKQ" class="button icon fa-arrow-right">My publications</a></li>
		</ul>
	</div>
</section>

</div>

<script src="{{ site.baseurl }}/assets/js/levels.js"></script>
