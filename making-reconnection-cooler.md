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
	<div data-level="plasma" hidden><p>We develop, from first principles, a <strong>subgrid model for collisionless relativistic radiative reconnection</strong> in relativistic resistive MHD (RRMHD). Systematically derived energy and momentum sinks capture the inverse Compton (IC; <a href="https://arxiv.org/abs/2611.28035">Paper I</a>) and synchrotron (Paper II) radiative losses, coupled with a localized, charge-starved resistivity that reproduces the non-ideal electric field, and hence the fast reconnection rate, of kinetic simulations. Benchmarked against radiative PIC simulations in identical set-ups, our RRMHD model recovers the <strong>reconnection rate, the temperature in the reconnection layer, and the bulk motion energy distribution</strong> of the outflow in every cooling regime, with a one-to-one mapping of cooling strengths from PIC to RRMHD. Test particles pushed through the RRMHD fields also recover the <strong>non-thermal tail</strong> of the PIC spectrum.</p></div>
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
<figure class="paper-figure plain">
	<video autoplay loop muted playsinline preload="auto" poster="{{ site.baseurl }}/assets/images/plasma/mrc-reconnection-poster.jpg" aria-label="Animation of magnetic reconnection: antiparallel magnetic field lines (lilac pointing right above, green pointing left below) are dragged inwards by the plasma, break and reconnect at a hot X-point, and the reconnected field is carried out in plasmoids that leave the box">
		<source src="{{ site.baseurl }}/assets/images/plasma/mrc-reconnection.mp4" type="video/mp4" />
		<source src="{{ site.baseurl }}/assets/images/plasma/mrc-reconnection.webm" type="video/webm" />
	</video>
</figure>
</div>
</div>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><p>Reconnection in high-energy sources commonly occurs in the <strong>relativistic regime</strong>, where the upstream magnetic energy density far exceeds the plasma rest-mass energy density \((\sigma_0 \equiv B_0^2/4\pi\rho_0 c^2 \gg 1)\), driving efficient non-thermal particle acceleration. It is frequently accompanied by <strong>rapid radiative cooling</strong> that competes against the acceleration. A prominent candidate for relativistic radiative reconnection is the <strong>black hole corona</strong>, the hot plasma of moderate optical depth near the event horizon of luminous accreting black holes, where reconnection has been proposed to energize the plasma and power the hard X-ray emission. These hard X-rays, seen for example in the hard state of Cyg X-1 (below), are believed to come from Comptonization of soft seed photons by mildly relativistic hot electrons \((k_{\rm B}T_{\rm e} \sim 100\,{\rm keV})\) as well as by the bulk plasma flow. Large-scale reconnecting current sheets form within the putative coronal region in global GRMHD simulations, as shown below (G. Musoke et al., in prep.).</p></div>
</div>
<div class="fig-row">
<figure class="paper-figure plain">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-corona-sheet.jpg" alt="Global simulation of a luminous accreting black hole, zooming in to a current sheet with plasmoids and X-points near the black hole" />
	<figcaption>A current sheet forming near the black hole in a global simulation of a luminous X-ray binary: the putative corona. Credit: G. Musoke et al. (2026, in prep.)</figcaption>
</figure>
<figure class="paper-figure plain wide" data-show-for="astronomer plasma">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-cygx1.png" alt="X-ray spectra of Cyg X-1 in its soft, intermediate and hard states; the hard state peaks near 100 keV" />
	<figcaption>Credit: Zdziarski (2000), IAU Symp. 195, 153.</figcaption>
</figure>
</div>
	</div>
</section>

<section id="model">
	<div class="inner cute accent3">
		<h2><span class="badge fa-cogs"></span>How do we model it?</h2>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><p>Global GRMHD simulations lack essential microphysics of collisionless reconnection, namely a fast reconnection rate and physically informed models for the plasma&ndash;radiation interaction. Kinetic PIC simulations capture that microphysics but are limited to a local reconnection layer. We therefore add a radiative cooling model to RRMHD and benchmark it against ground-truth PIC simulations of a local reconnection layer in identical conditions. As a first step (<a href="https://arxiv.org/abs/2611.28035">Paper I</a>), we model <strong>inverse Compton (IC) cooling</strong> of a pair plasma in the optically thin regime, in a uniform, isotropic background radiation field \(u_{\rm rad}\).</p></div>
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
	<div data-level="plasma" hidden><div class="equation"><img src="{{ site.baseurl }}/assets/images/plasma/mrc-eq-pic.svg" style="width: 13.73em" alt="F_IC = minus m_e c squared beta_rec sigma_0 over Delta, times (gamma over gamma_rad) squared, times beta" /></div><p>Particles travel through a photon bath of energy density \(u_{\rm rad}\), and IC losses enter as a <strong>radiative drag force</strong> subtracted from the Lorentz force. Balancing the drag against the reconnection electric field \(E_{\rm rec} = \beta_{\rm rec} B_0\) defines the <strong>characteristic Lorentz factor \(\gamma_{\rm rad}\)</strong> at which all the energy from reconnection goes into radiation. Reparametrizing the drag force in terms of \(\gamma_{\rm rad}\) lets it control the strength of the cooling (i.e., a smaller \(\gamma_{\rm rad}\) means stronger cooling). Together with the layer half-thickness \(\Delta\) (the hot Larmor radius), \(\gamma_{\rm rad}\) fully sets the radiative regime.</p></div>
</div>
</div>
<div class="output-card">
	<span class="badge fa-tint"></span>
	<span class="output-kind">Fluid (RRMHD)</span>
	<h3>An energy and momentum sink</h3>
<div class="levels">
	<div data-level="student" hidden><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Student version coming soon</div></div>
	<div data-level="astronomer" data-default><div class="intro placeholder"><span class="fa fa-hourglass-half"></span>Astronomer version coming soon</div></div>
	<div data-level="plasma" hidden><div class="equation"><img src="{{ site.baseurl }}/assets/images/plasma/mrc-eq-mhd.svg" style="width: 23.66em" alt="Energy-momentum equation with the radiative sink S^mu, and the energy and momentum sinks S^0 and S^i of Paper I, Eqs. 11 and 12" /></div><p>In a fluid model, radiative losses become a <strong>sink \(S^\mu\) in the energy and momentum equations</strong>. Following <a href="https://doi.org/10.1088/0004-637X/809/1/23">Golan &amp; Levinson (2015)</a>, we average over the boosted electron (Maxwell&ndash;J&uuml;ttner) and photon distributions, so that the individual particle motions translate into a dimensionless temperature \(\Theta = k_{\rm B}T/m_{\rm e}c^2\) and a bulk four-velocity \(\Gamma\beta_\Gamma\). The \(\Theta^2\) terms capture IC scattering in the hot X-points, and the \(\Gamma^2\beta_\Gamma^2\) term captures bulk Comptonization on the fast plasmoids.</p></div>
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
	<div data-level="plasma" hidden><p>In relativistic reconnection, the diffusion regions around the X-points approach <strong>charge starvation</strong>: the current density nears the maximum the available charges can carry, \(\lvert\mathbf{J}\rvert \approx 2n_{\rm e}ec\) (<a href="https://doi.org/10.3847/2041-8213/ada158">Moran et al. 2025</a>). In RRMHD, we capture this with a localized, effective resistivity \(\eta_{\rm eff} = \lvert\mathbf{E}^{\ast}\rvert/\lvert\mathbf{J}\rvert\), which introduces an effective skin depth \(\lambda_{\rm e}\) and recovers the kinetic non-ideal electric field \(\mathbf{E}^{\ast}\), and hence the fast reconnection rate (<a href="https://arxiv.org/abs/2601.02460">Ripperda et al. 2026</a>). This skin depth sets the layer half-thickness, \(\Delta \sim \sqrt{\sigma_0}\,\lambda_{\rm e}\), so the fluid and kinetic layers share both \(\Delta\) and the reconnection electric field \(E_{\rm rec} = \beta_{\rm rec} B_0\); the same force balance then defines the cooling strength in both models, giving a one-to-one mapping \(\gamma_{\rm rad}^2 \to 12\Theta_{\rm rad}^2\) for a thermal distribution.</p></div>
</div>
</div>
</div>
<div data-show-for="plasma" hidden>
<p>We define four cooling regimes by comparing the cooling time \(t_{\rm IC}\), set by \(\gamma_{\rm rad}\), with two crossing times: that of a diffusion region, \(t_{\rm D}\), and that of the whole layer by the outflow, \(t_{\rm adv}\) (<a href="https://doi.org/10.3847/1538-4357/aba622">Sironi &amp; Beloborodov 2020</a>).</p>
<table class="mini-table regimes">
	<thead><tr><th>Cooling regime</th><th>Cooling time</th><th>Condition</th><th>Our runs</th><th>Where it happens</th></tr></thead>
	<tbody>
		<tr><td>Strong</td><td>\(t_{\rm IC} \lesssim t_{\rm D}\)</td><td>\(\gamma_{\rm rad}^2 \lesssim \sigma_0^2\)</td><td>\(\gamma_{\rm rad} = 10\)&ndash;15</td><td>Pulsar and M87&#42; current sheets</td></tr>
		<tr><td>Moderate</td><td>\(t_{\rm D} \ll t_{\rm IC} \ll t_{\rm adv}\)</td><td>\(\sigma_0^2 \ll \gamma_{\rm rad}^2 \ll \beta_{\rm rec}L\sigma_0/\Delta\)</td><td>17&ndash;32</td><td>Black hole coronae, GRB jets</td></tr>
		<tr><td>Weak</td><td>\(t_{\rm IC} \gg t_{\rm adv}\)</td><td>\(\gamma_{\rm rad}^2 \gg \beta_{\rm rec}L\sigma_0/\Delta\)</td><td>60</td><td>Quasar jets</td></tr>
		<tr><td>None</td><td>\(t_{\rm IC} \to \infty\)</td><td>\(\gamma_{\rm rad} \to \infty\)</td><td>\(\infty\)</td><td>&mdash;</td></tr>
	</tbody>
</table>
<p class="table-note">\(t_{\rm IC}\): cooling time; \(t_{\rm D}\): time to cross a diffusion region; \(t_{\rm adv}\): time for the outflow to cross the layer (\(L\) = half-length, \(\Delta\) = half-thickness).</p>
</div>
	</div>
</section>

<section id="results">
	<div class="inner cute accent3">
		<h2><span class="badge fa-check"></span>Does it work?</h2>
<p class="spec-line" data-show-for="astronomer plasma"><span class="output-kind">Set-up</span>2D Harris current sheet &middot; pair plasma &middot; \(\sigma_0 = 15\) &middot; guide field \(0.5B_0\) &middot; RRMHD: BHAC &middot; PIC: TRISTAN-MP v2 &middot; ~\(30{,}000^2\) cells</p>
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
	<div data-level="plasma" hidden><p>For all cooling regimes, our RRMHD model reproduces the <strong>overall morphology of the reconnection layer</strong> and the typical magnitudes of the bulk speed, temperature, and density in the sheet. Our model also recovers the kinetic reconnection rate and the Alfv&eacute;nic outflow; cooling has a negligible effect on both.</p></div>
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
	<div data-level="plasma" hidden><p>The most quantitative comparison is in the <strong>energy spectra</strong> of the reconnection layer: we compare both the total kinetic energy spectrum (found in RRMHD via a per-cell drifting Maxwellian) and the bulk motion energy spectrum. The spectra show good agreement in temperature and outflow; however, RRMHD by itself does not capture the kinetic non-thermal tail (see below).</p></div>
</div>
</div>
<div data-show-for="plasma" hidden>
<span class="subhead">Synchrotron cooling and test particles</span>
<p>In Paper II, led by Ma&euml;lle Magnan, we extend our model to <strong>synchrotron cooling</strong>. Balancing the reconnection electric field against synchrotron losses defines \(\gamma_{\rm sync}\), analogous to \(\gamma_{\rm rad}\). The addition of <strong>test particles</strong> pushed by the RRMHD fields is able to capture the kinetic non-thermal tail.</p>
<figure class="paper-figure plain">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-sync-plasma.png" alt="Kinetic energy spectra with synchrotron cooling off and on: PIC, RRMHD, and test particles pushed through the RRMHD fields, which recover the PIC nonthermal tail" />
	<figcaption>Adapted from Paper II (M. Magnan et al., in prep.).</figcaption>
</figure>
</div>
<div data-show-for="plasma" hidden>
<span class="subhead">Why the resistivity matters</span>
<p>With the charge-starved resistivity, we capture the fast kinetic reconnection rate (\(\langle\beta_{\rm rec}\rangle \approx 0.08\), compared with 0.02 with uniform resistivity), and the peak in the bulk outflow spectrum. Although the bulk motions still reach the Alfv&eacute;nic \(\Gamma_{\rm A}\) with uniform resistivity, the peak there is less defined and orders of magnitude less energetic. The reconnection rate sets the aspect ratio of the diffusion regions, and thus the field-line tension that drives the outflow. Matching the kinetic rate is therefore essential to capture the bulk motions, and hence bulk Comptonization, which neither a uniform resistivity nor ideal GRMHD with numerical resistivity can do.</p>
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
	<div data-level="plasma" hidden><p>Now that the model has been validated against kinetic theory, it can be applied to <strong>global resistive GRMHD simulations of black hole accretion</strong>, where reconnection sites form self-consistently. I will also extend the model to include more physics: (1) <strong>two-temperature RRMHD</strong>, pairing our cooling with Ohmic heating of electrons and ions; (2) <strong>M1 radiation transport</strong>, replacing the uniform, isotropic \(u_{\rm rad}\) with a photon field that evolves in time and space and exchanges energy and momentum with the plasma, as needed in more optically thick regimes; and (3) <strong>pair production</strong> and annihilation.</p></div>
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
				<ul class="actions"><li><a href="https://arxiv.org/abs/2611.28035" class="button small icon fa-arrow-right">Read the paper</a></li></ul>
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

<!-- Inline maths: MathJax 4 (LaTeX → SVG in Latin Modern, like the equation images) for \( ... \) in this page. -->
<script>
window.MathJax = { tex: { inlineMath: [['\\(', '\\)']] }, output: { font: 'mathjax-modern', fontCache: 'global' }, options: { enableMenu: false } };
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg-nofont.js"></script>
