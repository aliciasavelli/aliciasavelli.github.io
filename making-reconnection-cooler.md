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

<div id="main">

<!--
  MAKING RECONNECTION COOLER: project page, same style as plasma.md, in the pink (accent3)
  of its card on the plasma page.
  READING-LEVEL TOGGLE (assets/js/levels.js, styles in _sass/components/_levels.scss):
  - Text: each <div class="levels"> block holds one version per level:
      <div data-level="student" hidden> ... </div>
      <div data-level="astronomer" data-default> ... </div>   (shown if a level has no version)
      <div data-level="plasma" hidden> ... </div>
  - Figures and whole blocks: add data-show-for="student astronomer" (any list of levels) to show
    them only for those levels. Add the hidden attribute too when "astronomer" (the default level)
    is not in the list, so it stays hidden before the toggle loads.
  Every "coming soon" box is a placeholder: replace it with your text, e.g.
    <div data-level="student" hidden><p>Your text, with <strong>key words</strong> in bold.</p></div>
  For the short version at the top, use <div class="intro tinted"><p>...</p></div> inside each level.
  Figures: assets/images/plasma/mrc-*.png/jpg; sources to rebuild them are in
  "Claude outputs/figure_sources" (outside the repo). Figure styles: _sass/components/_project-page.scss
-->
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
		<div class="intro tinted">
			<span class="output-kind">In short</span>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
		</div>
	</div>
</section>


<section id="xrays">
	<div class="inner cute accent3">
		<h2><span class="badge fa-bolt"></span>What powers the X-rays?</h2>
<div data-show-for="student" hidden>
<span class="subhead">The answer: magnetic reconnection</span>
<div class="fig-block">
<div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Text coming soon</div>
<figure class="paper-figure placeholder-figure">
	<div class="box"><span class="fa fa-hourglass-half"></span>Reconnection graphic coming soon</div>
</figure>
</div>
</div>
<div class="fig-block">
<figure class="paper-figure right">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-corona-sheet.jpg" alt="Global simulation of a luminous accreting black hole, zooming in to a current sheet with plasmoids and X-points near the black hole" />
	<figcaption>A current sheet forming near the black hole in a global simulation of a luminous X-ray binary: the putative corona. Credit: G. Musoke et al. (2026, in prep.)</figcaption>
</figure>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
</div>
<figure class="paper-figure plain narrow" data-show-for="astronomer plasma">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-cygx1.png" alt="X-ray spectra of Cyg X-1 in its soft, intermediate and hard states; the hard state peaks near 100 keV" />
	<figcaption>Credit: Zdziarski (2000), IAU Symp. 195, 153.</figcaption>
</figure>
	</div>
</section>

<section id="model">
	<div class="inner cute accent3">
		<h2><span class="badge fa-cogs"></span>How do we model it?</h2>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
<figure class="paper-figure plain" data-show-for="student astronomer">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-compton.png" alt="A reconnecting current sheet. In the hot X-point, electrons moving in random directions upscatter photons (inverse Compton); in the fast plasmoids, electrons moving together upscatter photons (bulk Comptonization). The losses depend on temperature squared and speed squared." />
</figure>
<div class="output-cards">
<div class="output-card">
	<span class="badge fa-braille"></span>
	<span class="output-kind">Particles (PIC)</span>
	<h3>A drag force on every particle</h3>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="equation"><i>F</i><sub>IC</sub> = &minus;<sup>4</sup>&frasl;<sub>3</sub> <i>&sigma;</i><sub>T</sub><i>u</i><sub>rad</sub><i>&gamma;</i><sup>2</sup><b><i>&beta;</i></b>, &nbsp; <i>e&beta;</i><sub>rec</sub><i>B</i><sub>0</sub> = <sup>4</sup>&frasl;<sub>3</sub> <i>&sigma;</i><sub>T</sub><i>u</i><sub>rad</sub><i>&gamma;</i><sub>rad</sub><sup>2</sup></div><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
</div>
<div class="output-card">
	<span class="badge fa-tint"></span>
	<span class="output-kind">Fluid (MHD)</span>
	<h3>An energy and momentum sink</h3>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="equation">&nabla;<sub><i>&nu;</i></sub><i>T</i><sup><i>&mu;&nu;</i></sup> = <i>S</i><sup><i>&mu;</i></sup>/<i>c</i>, &nbsp; <i>S</i><sup><i>&mu;</i></sup> = <i>S</i><sup><i>&mu;</i></sup>(<i>&Theta;</i><sup>2</sup>, <i>&beta;</i><sub>&Gamma;</sub><sup>2</sup>), &nbsp; <i>&gamma;</i><sub>rad</sub><sup>2</sup> &rarr; 12<i>&Theta;</i><sub>rad</sub><sup>2</sup></div><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
</div>
</div>
<div class="output-cards">
<div class="output-card">
	<span class="badge fa-link"></span>
	<span class="output-kind">The bridge</span>
	<h3>Fast reconnection in the fluid: charge-starved resistivity</h3>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="equation"><i>&eta;</i><sub>eff</sub> = |<b>E</b>*| / |<b>J</b>|, &nbsp; |<b>J</b>| &asymp; 2<i>n</i><sub>e</sub><i>ec</i> &nbsp;&rArr;&nbsp; <i>&beta;</i><sub>rec</sub> &asymp; 0.1, &nbsp; &Delta; &asymp; &radic;<i>&sigma;</i><sub>0</sub> <i>&lambda;</i><sub>e</sub></div><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
</div>
</div>
<div data-show-for="plasma" hidden>
<table class="mini-table regimes">
	<thead><tr><th>Cooling regime</th><th>Cooling time</th><th>Condition</th><th>Our runs</th><th>Where it happens</th></tr></thead>
	<tbody>
		<tr><td>Strong</td><td><i>t</i><sub>IC</sub> &lesssim; <i>t</i><sub>D</sub></td><td><i>&gamma;</i><sub>rad</sub><sup>2</sup> &lesssim; <i>&sigma;</i><sub>0</sub><sup>2</sup></td><td><i>&gamma;</i><sub>rad</sub> = 10&ndash;15</td><td>Pulsar and M87&#42; current sheets</td></tr>
		<tr><td>Moderate</td><td><i>t</i><sub>D</sub> &#8810; <i>t</i><sub>IC</sub> &#8810; <i>t</i><sub>adv</sub></td><td><i>&sigma;</i><sub>0</sub><sup>2</sup> &#8810; <i>&gamma;</i><sub>rad</sub><sup>2</sup> &#8810; <i>&beta;</i><sub>rec</sub><i>L&sigma;</i><sub>0</sub>/&Delta;</td><td>17&ndash;32</td><td>Black hole coronae, GRB jets</td></tr>
		<tr><td>Weak</td><td><i>t</i><sub>IC</sub> &#8811; <i>t</i><sub>adv</sub></td><td><i>&gamma;</i><sub>rad</sub><sup>2</sup> &#8811; <i>&beta;</i><sub>rec</sub><i>L&sigma;</i><sub>0</sub>/&Delta;</td><td>60</td><td>FSRQ jets</td></tr>
		<tr><td>None</td><td><i>t</i><sub>IC</sub> &rarr; &infin;</td><td><i>&gamma;</i><sub>rad</sub> &rarr; &infin;</td><td>&infin;</td><td>&mdash;</td></tr>
	</tbody>
</table>
<p class="table-note"><i>t</i><sub>IC</sub>: cooling time; <i>t</i><sub>D</sub>: time to cross a diffusion region; <i>t</i><sub>adv</sub>: time for the outflow to cross the layer (<i>L</i> = half-length, &Delta; = half-thickness).</p>
</div>
	</div>
</section>

<section id="results">
	<div class="inner cute accent3">
		<h2><span class="badge fa-check"></span>Does it work?</h2>
<p class="spec-line" data-show-for="astronomer plasma"><span class="output-kind">Set-up</span>2D Harris current sheet &middot; pair plasma &middot; <i>&sigma;</i><sub>0</sub> = 15 &middot; guide field 0.5<i>B</i><sub>0</sub> &middot; RRMHD: BHAC &middot; PIC: TRISTAN-MP v2 &middot; ~30,000&sup2; cells</p>
<figure class="paper-figure plain" data-show-for="student" hidden>
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-fig1-student.jpg" alt="Temperature of the reconnection layer in the particle simulation and in our fluid model, without cooling and with strong cooling" />
	<figcaption>Adapted from Fig. 1 of Paper I.</figcaption>
</figure>
<figure class="paper-figure plain" data-show-for="astronomer">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-fig1-astronomer.jpg" alt="Bulk speed, temperature and density of the reconnection layer in PIC and MHD, without cooling and with strong cooling" />
	<figcaption>Adapted from Fig. 1 of Paper I.</figcaption>
</figure>
<figure class="paper-figure plain" data-show-for="plasma" hidden>
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-fig1-plasma.jpg" alt="Fig. 1 of Paper I: bulk speed, temperature and density of the reconnection layer in PIC and MHD for no, weak and strong cooling" />
	<figcaption>Adapted from Fig. 1 of Paper I.</figcaption>
</figure>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
<div data-show-for="astronomer plasma">
<figure class="paper-figure plain" data-show-for="astronomer">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-fig3-astronomer.png" alt="Energy spectra: PIC vs RRMHD with moderate cooling, and RRMHD for all cooling strengths" />
	<figcaption>Adapted from Fig. 3 of Paper I.</figcaption>
</figure>
<figure class="paper-figure plain" data-show-for="plasma" hidden>
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-fig3-plasma.png" alt="Fig. 3 of Paper I: particle and bulk energy spectra in PIC and RRMHD for every cooling regime, and RRMHD for all cooling strengths" />
	<figcaption>Adapted from Fig. 3 of Paper I.</figcaption>
</figure>
<div class="levels">
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
</div>
<div data-show-for="plasma" hidden>
<span class="subhead">Why the resistivity matters</span>
<div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Text coming soon</div>
<figure class="paper-figure plain">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-fig5-plasma.png" alt="Fig. 5 of Paper I: reconnection rate and bulk-motion spectrum with uniform and charge-starved resistivity" />
	<figcaption>Adapted from Fig. 5 of Paper I.</figcaption>
</figure>
</div>
	</div>
</section>

<section id="next">
	<div class="inner cute accent3">
		<h2><span class="badge fa-rocket"></span>What&rsquo;s next?</h2>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Plasma astrophysicist version coming soon</div></div>
</div>
	</div>
</section>

<!-- Papers (same for every reading level). To add one, copy an .output-card. -->
<section id="papers">
	<div class="inner cute accent3">
		<h2><span class="badge fa-file-text-o"></span>Papers</h2>
		<div class="output-cards">
			<div class="output-card">
				<span class="badge numeral">I</span>
				<span class="output-kind">Paper I &middot; Inverse Compton &middot; Submitted to ApJL</span>
				<h3>Making Reconnection Cooler: A relativistic resistive magnetohydrodynamics model for radiative collisionless reconnection</h3>
				<p class="output-meta"><strong>A. M. Savelli</strong>, D. Gro&scaron;elj, B. Ripperda, A. Levinson, A. Philippov &amp; N. Murray</p>
				<ul class="actions"><li><a href="https://arxiv.org/abs/2611.28035" class="button small icon fa-arrow-right">Read on arXiv</a></li></ul>
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

<!-- Talks -->
<section id="talks">
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
