---
layout: landing
title: Star Formation Histories
description: Untangling similarities and differences across cosmological simulations
image: assets/images/galaxy.png   # TODO (temporary banner, same as the galaxy page): replace with a figure from the paper
banner_center: true          # show the middle of the banner image (with a gentle scroll effect)
banner_overlay: 0.35         # opacity of the gold tint over the banner (theme default 0.85)
banner_style: 4              # banner tint colour: 4 = gold (accent4), the colour of this project's card on the galaxy page
nav-menu: false
show_tile: false
---

<div id="main">

<!--
  STAR FORMATION HISTORIES ACROSS COSMOLOGICAL SIMULATIONS: project page, same style as making-reconnection-cooler.md, in the gold (accent4)
  of its card on the galaxy page.
  READING-LEVEL TOGGLE (Student / Astronomer; assets/js/levels.js, styles in _sass/components/_levels.scss):
  - Text: each <div class="levels"> block holds one version per level:
      <div data-level="student" hidden> ... </div>
      <div data-level="astronomer" data-default> ... </div>   (shown if a level has no version)
  - Figures and whole blocks: add data-show-for="student" (or "astronomer") to show them only
    for that level; add the hidden attribute too when "astronomer" is not in the list.
  Every "coming soon" box is a placeholder: replace it with your text, e.g.
    <div data-level="student" hidden><p>Your text, with <strong>key words</strong> in bold.</p></div>
  For the short version at the top, use <p>...</p> inside each level (the box is already tinted).
  Section headings are only suggestions: rename, delete or add sections freely.
  Figures: <figure class="paper-figure plain"><img src="..." alt="..." /><figcaption>Adapted from Fig. N of the paper.</figcaption></figure>
-->
<section id="one">
	<div class="inner cute accent4">
		<div class="level-toggle" hidden>
			<span class="level-toggle-label">Written for</span>
			<ul class="actions">
				<li><button type="button" class="button small" data-set-level="student">Student</button></li>
				<li><button type="button" class="button small" data-set-level="astronomer">Astronomer</button></li>
			</ul>
		</div>
		<div class="intro tinted">
			<span class="output-kind">In short</span>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
</div>
		</div>
	</div>
</section>

<section id="why">
	<div class="inner cute accent4">
		<h2><span class="badge fa-lightbulb-o"></span>Why compare simulations?</h2>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
</div>
	</div>
</section>

<section id="method">
	<div class="inner cute accent4">
		<h2><span class="badge fa-cogs"></span>How do we compare them?</h2>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
</div>
	</div>
</section>

<section id="results">
	<div class="inner cute accent4">
		<h2><span class="badge fa-line-chart"></span>What did we find?</h2>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
</div>
	</div>
</section>

<!-- Paper (same for every reading level) -->
<section id="papers">
	<div class="inner cute accent4">
		<h2><span class="badge fa-file-text-o"></span>Paper</h2>
		<div class="output-cards">
			<div class="output-card">
				<span class="badge fa-file-text-o"></span>
				<span class="output-kind">Submitted to ApJ &middot; 2026</span>
				<h3>Untangling Similarities and Differences in Star Formation Histories Across Cosmological Simulations</h3>
				<p class="output-meta"><strong>A. M. Savelli</strong>, M. A. Kustec, J. S. Speagle, K. G. Iyer, E. Ahmed, Z. Peng, N. Murray &amp; C. Kuang</p>
				<ul class="actions"><li><a href="https://arxiv.org/abs/2610.17359" class="button small icon fa-arrow-right">Read the paper</a></li></ul>
			</div>
		</div>
		<ul class="actions">
			<li><a href="{{ site.baseurl }}/galaxies.html" class="button icon fa-arrow-left">Back to Galaxy Research</a></li>
		</ul>
	</div>
</section>

</div>

<script src="{{ site.baseurl }}/assets/js/levels.js"></script>
