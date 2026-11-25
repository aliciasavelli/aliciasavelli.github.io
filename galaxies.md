---
layout: landing
title: Galaxy Research
description: Coming soon     # change to e.g. "Highlighted projects" when the page is ready
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
coming_soon: true            # tile says "Coming soon" and isn't clickable; delete this line when the page is ready
---

<!--
  GALAXY RESEARCH PAGE: same layout as plasma.md.
  Everything marked TODO (and every "coming soon" box) is a placeholder to fill in.
  READING-LEVEL TOGGLE (Student / Astronomer; assets/js/levels.js, styles in _sass/components/_levels.scss):
  each <div class="levels"> block holds one version per level:
      <div data-level="student" hidden> ... </div>
      <div data-level="astronomer" data-default> ... </div>   (shown if a level has no version)
  Replace each "coming soon" box with your text, e.g.
      <div data-level="student" hidden><p>Your text, with <strong>key words</strong> in bold.</p></div>
  (The choice is shared with the plasma pages; a visitor who picked "Plasma astrophysicist"
  there sees the Astronomer version here.)
-->

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
			<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student introduction coming soon</div></div>
			<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer introduction coming soon</div></div>
		</div>
		<p>Here I highlight some selected first-author projects from my galaxy evolution research.</p>
	</div>
</section>

<!-- Two: project cards (all in this page's colour; figure sides alternate automatically) -->
<section id="two">
	<div class="inner projects cute">
		<article class="project accent4">
			<a href="{{ site.baseurl }}/sf-r-you-sure.html" class="media">
				<video autoplay loop muted playsinline preload="auto" poster="{{ site.baseurl }}/assets/images/galaxies/milky-way-analogues-poster.jpg" aria-label="Animation of galaxies growing over the last 10 billion years: galaxies that look like the Milky Way are circled, two later drop out as quenched and too blue, and only one is a true Milky Way analogue today, where it is replaced by an image of the Milky Way; time then rewinds">
					<source src="{{ site.baseurl }}/assets/images/galaxies/milky-way-analogues.mp4" type="video/mp4" />
					<source src="{{ site.baseurl }}/assets/images/galaxies/milky-way-analogues.webm" type="video/webm" />
				</video>
			</a>
			<div class="body">
				<h3><span class="badge">1</span>SF-R You Sure?</h3>
				<div class="levels">
					<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
					<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
				</div>
				<ul class="actions">
					<li><a href="{{ site.baseurl }}/sf-r-you-sure.html" class="button icon fa-arrow-right">Learn more</a></li>
				</ul>
			</div>
		</article>
		<article class="project accent4">
			<a href="{{ site.baseurl }}/star-formation-histories.html" class="media">
				<video autoplay loop muted playsinline preload="auto" poster="{{ site.baseurl }}/assets/images/galaxies/star-formation-histories-poster.jpg" aria-label="Animation of five supercomputers, one per simulation, drawing star formation histories through cosmic time: two shapes are made by every simulation, while the others are made by only one or two">
					<source src="{{ site.baseurl }}/assets/images/galaxies/star-formation-histories.mp4" type="video/mp4" />
					<source src="{{ site.baseurl }}/assets/images/galaxies/star-formation-histories.webm" type="video/webm" />
				</video>
			</a>
			<div class="body">
				<h3><span class="badge">2</span>Star formation histories across cosmological simulations</h3>
				<div class="levels">
					<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
					<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
				</div>
				<ul class="actions">
					<li><a href="{{ site.baseurl }}/star-formation-histories.html" class="button icon fa-arrow-right">Learn more</a></li>
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
