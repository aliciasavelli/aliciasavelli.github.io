---
layout: landing
title: Galaxy Research
description: Coming soon     # change to e.g. "Highlighted projects" when the page is ready
image: assets/images/galaxy.png          # TODO: also on the About page (Research section) and low resolution - use a different picture
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
  To add the reading-level toggle later, copy the .level-toggle block and the .levels markup from plasma.md.
-->

<!-- Main -->
<div id="main">

<!-- One: introduction -->
<section id="one">
	<div class="inner cute accent4">
		<h2><span class="badge fa-star"></span>Galaxy evolution in cosmological simulations</h2>
		<!-- TODO: replace this placeholder with <div class="intro tinted"><p>Your introduction, with <strong>key words</strong> in bold.</p></div> -->
		<div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Introduction coming soon</div>
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
				<p>TODO: a short description of this project.</p>
				<ul class="actions">
					<li><a href="https://iopscience.iop.org/article/10.3847/1538-4357/adc38c" class="button icon fa-arrow-right">Read the paper</a></li>
				</ul>
			</div>
		</article>
		<article class="project accent4">
			<!-- Figure placeholder: replace this div with <span class="media"><img src="{{ site.baseurl }}/assets/images/..." alt="..." /></span> -->
			<div class="media placeholder" aria-hidden="true"><span class="fa fa-hourglass-half"></span><span>Figure coming soon</span></div>
			<div class="body">
				<h3><span class="badge">2</span>Star formation histories across cosmological simulations <span class="tag">Submitted</span></h3>
				<p>TODO: a short description of this project.</p>
				<ul class="actions">
					<li><a href="https://arxiv.org/abs/2610.17359" class="button icon fa-arrow-right">Read the paper</a></li>
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
