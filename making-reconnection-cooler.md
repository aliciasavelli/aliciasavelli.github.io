---
layout: landing
title: Making Reconnection Cooler
description: Radiative reconnection in relativistic resistive MHD
image: assets/images/plasma/making-reconnection-cooler.jpg   # banner: Fig. 1 of Paper I (PIC above, RRMHD below, strong cooling)
banner_center: true          # show the middle of the banner image (with a gentle scroll effect)
banner_overlay: 0.35         # opacity of the pink tint over the banner (theme default 0.85)
banner_style: 3              # banner tint colour: 3 = pink (accent3), the colour of this project's card on the plasma page
nav-menu: false
show_tile: false
---

<!--
  MAKING RECONNECTION COOLER: project page, same style as plasma.md, in the pink (accent3)
  of its card on the plasma page.
  READING-LEVEL TOGGLE: works exactly as on plasma.md, and remembers the level the visitor
  picked there. Each <div class="levels"> block holds one version per level:
    <div data-level="student" hidden> ... </div>
    <div data-level="astronomer" data-default> ... </div>   (shown if a level has no version)
    <div data-level="plasma" hidden> ... </div>
  Every "coming soon" box is a placeholder: replace it with your text, e.g.
    <div data-level="student" hidden><p>Your text, with <strong>key words</strong> in bold.</p></div>
  Toggle logic: assets/js/levels.js    Styles: _sass/components/_levels.scss
-->

<!-- Main -->
<div id="main">

<!-- One: reading-level toggle (for the whole page), then motivation -->
<section id="one">
	<div class="inner cute accent3">
		<div class="level-toggle" hidden>
			<span class="level-toggle-label">Written for</span>
			<ul class="actions">
				<li><button type="button" class="button small" data-set-level="student">Student</button></li>
				<li><button type="button" class="button small" data-set-level="astronomer">Astronomer</button></li>
				<li><button type="button" class="button small" data-set-level="plasma">Plasma astrophysicist</button></li>
			</ul>
		</div>
		<h2><span class="badge fa-lightbulb-o"></span>Motivation</h2>
		<!-- TODO: why radiative reconnection matters near black holes and neutron stars; why MHD alone misses it -->
		<div class="levels">
			<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
			<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
			<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
		</div>
	</div>
</section>

<!-- Two: method -->
<section id="two">
	<div class="inner cute accent3">
		<h2><span class="badge fa-cogs"></span>Method</h2>
		<!-- TODO: energy/momentum sink term in RRMHD, effective charge-starved resistivity, inverse Compton cooling -->
		<div class="levels">
			<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
			<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
			<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
		</div>
	</div>
</section>

<!-- Three: results -->
<section id="three">
	<div class="inner cute accent3">
		<h2><span class="badge fa-line-chart"></span>Results</h2>
		<!-- TODO: reconnection rate, current-sheet temperature, outflow bulk motions vs. kinetic (PIC) simulations -->
		<div class="levels">
			<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
			<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
			<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
		</div>
	</div>
</section>

<!-- Four: papers (same for every reading level). To add one, copy an .output-card. -->
<section id="four">
	<div class="inner cute accent3">
		<h2><span class="badge fa-file-text-o"></span>Papers</h2>
		<div class="output-cards">
			<div class="output-card">
				<span class="badge numeral">I</span>
				<span class="output-kind">Paper I &middot; Inverse Compton &middot; Submitted to ApJL</span>
				<h3>Making Reconnection Cooler: A relativistic resistive magnetohydrodynamics model for radiative collisionless reconnection</h3>
				<p class="output-meta"><strong>A. M. Savelli</strong>, D. Gro&scaron;elj, B. Ripperda, A. Levinson, A. Philippov &amp; N. Murray</p>
				<ul class="actions"><li><a href="https://github.com/aliciasavelli/Radiative-Reconnection/blob/main/Making_Reconnection_Cooler.pdf" class="button small icon fa-arrow-right">Read the paper</a></li></ul>
			</div>
			<div class="output-card">
				<!-- TODO: replace the Coming soon button with a link when it's out -->
				<span class="badge numeral">II</span>
				<span class="output-kind">Paper II &middot; Synchrotron</span>
				<h3>Making Reconnection Cooler II: A collisionless model for synchrotron relativistic reconnection in relativistic resistive magnetohydrodynamics with test particles</h3>
				<p class="output-meta">M. Magnan, <strong>A. M. Savelli</strong>, B. Ripperda, D. Gro&scaron;elj &amp; A. Levinson</p>
				<ul class="actions"><li><span class="button small disabled">Coming soon</span></li></ul>
			</div>
			<div class="output-card">
				<!-- TODO: add <h3>Title</h3> under the next line once the paper has a title -->
				<span class="badge fa-cube"></span>
				<span class="output-kind">3D radiative reconnection &middot; gPLUTO</span>
				<p class="output-meta">V. Berta, <strong>A. M. Savelli</strong>, M. Magnan, B. Ripperda &amp; L. Sironi</p>
				<ul class="actions"><li><span class="button small disabled">Coming soon</span></li></ul>
			</div>
		</div>
	</div>
</section>

<!-- Five: talks -->
<section id="five">
	<div class="inner cute accent3">
		<h2><span class="badge fa-play"></span>Talks</h2>
		<div class="output-cards">
			<div class="output-card">
				<span class="badge fa-play"></span>
				<span class="output-kind">Talk &middot; KITP, UCSB &middot; Aug 2025</span>
				<h3>Recovering Kinetic Relativistic Radiative Reconnection with Inverse Compton Cooling in Magnetohydrodynamics</h3>
				<ul class="actions"><li><a href="https://online.kitp.ucsb.edu/online/extremeplasma-c25/savelli/" class="button small icon fa-arrow-right">Watch the talk</a></li></ul>
			</div>
			<div class="output-card">
				<span class="badge fa-play"></span>
				<span class="output-kind">CITA Blackboard Talk &middot; Toronto &middot; Jul 2025</span>
				<h3>Make Reconnection Cool Again</h3>
				<ul class="actions"><li><a href="https://www.cita.utoronto.ca/make-reconnection-cool/" class="button small icon fa-arrow-right">Watch the talk</a></li></ul>
			</div>
		</div>
		<ul class="actions">
			<li><a href="{{ site.baseurl }}/plasma.html" class="button icon fa-arrow-left">Back to Plasma Research</a></li>
		</ul>
	</div>
</section>

</div>

<script src="{{ site.baseurl }}/assets/js/levels.js"></script>
