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
	<div data-level="student" hidden><p>Around some black holes, a hot cloud of <strong>plasma</strong> (gas made of charged particles) called a <strong>corona</strong> glows brightly in X-rays, and one possible power source is <strong>magnetic reconnection</strong>, in which magnetic field lines snap and rejoin, converting stored magnetic energy into heat and motion. We build both an analytic model and a numerical subgrid model of reconnection that treats the emission of light as &ldquo;cooling&rdquo; and test it against first-principles physics. Our model accurately reproduces <strong>how fast the field lines reconnect, how hot the plasma gets, and how fast it flows out</strong>. In this way, our model brings us closer to simulating the X-ray glow of whole black hole systems.</p></div>
	<div data-level="astronomer" data-default><p>Hot, X-ray-emitting <strong>black hole coronae</strong> may be powered by <strong>magnetic reconnection</strong>, the rapid conversion of stored magnetic energy into kinetic and thermal energy of the surrounding plasma as field lines break and rejoin. Global simulations of black hole accretion cannot capture how reconnection and radiation interact, however, and the kinetic simulations that can capture these scales are limited to a small, local patch of plasma. We develop a <strong>fluid model for radiative reconnection</strong> that captures inverse Compton (IC; <a href="https://arxiv.org/abs/2611.28035">Paper I</a>) and synchrotron (Paper II) losses, and benchmark it against kinetic simulations in a local box. Our model recovers <strong>the rate at which the field lines reconnect, the plasma temperature, and the energy distribution in the bulk motions</strong> of the outflow in every cooling regime, and, with test particles, the <strong>non-thermal tail</strong> of the kinetic energy distribution.</p></div>
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
<p>Black holes themselves are dark, but the hot gas around some of them shines brightly in X-rays. One possible power source for this emission is <strong>magnetic reconnection</strong>. Magnetic field lines have tension, like stretched rubber bands, that stores energy, and when field lines pointing in opposite directions are pushed together, they violently break and rejoin at an X-shaped spot called an <strong>X-point</strong>. In the animation, the newly joined lines snap away like released rubber bands, heating the plasma and flinging it out in fast blobs called <strong>plasmoids</strong>. In this way, reconnection turns stored magnetic energy into heat and motion.</p>
<figure class="paper-figure plain">
	<video autoplay loop muted playsinline preload="auto" poster="{{ site.baseurl }}/assets/images/plasma/mrc-reconnection-poster.jpg" aria-label="Animation of magnetic reconnection: antiparallel magnetic field lines (lilac pointing right above, green pointing left below) are dragged inwards by the plasma, break and reconnect at a hot X-point, and the reconnected field is carried out in plasmoids that leave the box">
		<source src="{{ site.baseurl }}/assets/images/plasma/mrc-reconnection.mp4" type="video/mp4" />
		<source src="{{ site.baseurl }}/assets/images/plasma/mrc-reconnection.webm" type="video/webm" />
	</video>
</figure>
</div>
</div>
<div class="levels">
	<div data-level="student" hidden><p>This process may occur around black holes that are actively swallowing gas, such as those at the centres of galaxies or in X-ray binaries (a black hole feeding on a nearby star). In these systems, surrounding the event horizon (the point at which not even light can escape the black hole&rsquo;s gravity) lies the powerhouse of X-ray emission: a region of hot, dilute plasma called a <strong>corona</strong>. The X-rays are made when low-energy light bounces off the corona&rsquo;s fast-moving electrons and gains energy, a process called <strong>inverse Compton (IC) scattering</strong>. What keeps the corona so hot is still an open question, but reconnection is a strong candidate: computer simulations of gas falling into a black hole show thin reconnection layers forming exactly where the corona is thought to live (below; G. Musoke et al., in prep.). Understanding how reconnection heats this plasma would therefore help explain how the surroundings of a black hole produce such bright X-rays.</p></div>
	<div data-level="astronomer" data-default><p>Surrounding the event horizon of certain accreting black holes, such as those living in luminous active galactic nuclei (AGN) or X-ray binaries (XRBs), lies the powerhouse of X-ray emission: a region of relativistically hot plasma of moderate optical depth called a <strong>corona</strong>. The corona shines in hard X-rays, as in the hard state of Cyg X-1 (below), peaking near 100 keV; the emission is believed to be produced by the <strong>Comptonization</strong> of soft seed photons by hot electrons (\(k_{\rm B}T_{\rm e} \sim 100\,{\rm keV}\)). Energetic X-ray coronal emission may be driven by <strong>magnetic reconnection</strong>, where oppositely directed field lines break and rejoin in a thin layer, transferring stored magnetic energy to the surrounding plasma as heat and particle acceleration; such large-scale reconnection layers do form within the putative corona in global simulations of accreting black holes (below; G. Musoke et al., in prep.).</p><p>The particles accelerated in the reconnection layer are theorized to energize the surrounding seed photons through inverse Compton (IC) scattering. Recent studies have shown that upscattering may also occur on <strong>bulk motions</strong>, rather than on individual electrons, such as from plasmoids (magnetic islands) in reconnection layers or turbulent motions. This process is well captured in radiative particle-in-cell (PIC) simulations, which follow individual particles; however, the interaction between heating and cooling is typically not modelled in magnetohydrodynamics (MHD).</p></div>
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
<div data-show-for="student" hidden>
<span class="subhead">The answer: simulations that &ldquo;cool&rdquo; the plasma</span>
</div>
<div class="levels">
	<div data-level="student" hidden><p>The environment around these black holes is so extreme that its conditions can&rsquo;t be replicated on Earth, so we have to turn to computer simulations to try to understand the physical processes going on there. However, simulating reconnection together with the light it produces is difficult. The most accurate way to model plasma is to follow the motion of individual particles (called <strong>particle-in-cell, or PIC, simulations</strong>) which captures all the necessary physics, but these are very computationally expensive and can only cover a small &ldquo;cut-out&rdquo; of plasma rather than the entire black hole system. A way around this is to treat the plasma instead as a fluid, considering the average motion of all the particles together (called <strong>magnetohydrodynamic, or MHD, simulations</strong>); these simulations allow you to capture the global dynamics of the black hole system, but the sacrifice is smoothing over much of the important physics governing how reconnection proceeds and how the plasma gives energy to light.</p><p>To overcome this challenge, we write a <strong>fluid subgrid model for the radiation from the corona</strong> that captures the important outcomes for the global system (i.e., how the plasma loses energy) without having to resolve the underlying particle interactions which produce the radiation. We call this a &ldquo;cooling&rdquo; model. Our model captures both ways the plasma gives energy to photons: through the random motions of hot electrons at the X-points and through the coherent motion of the fast plasmoids, as illustrated below. We add our model to MHD simulations of a &ldquo;cut out&rdquo; of coronal plasma and benchmark it against PIC simulations to make sure we are cooling correctly.</p></div>
	<div data-level="astronomer" data-default><p>To include these effects in global general-relativistic MHD (GRMHD) simulations of accretion, we add a <strong>radiative cooling model</strong> to a relativistic resistive MHD (RRMHD) fluid, together with a prescription for the fast kinetic reconnection rate, which GRMHD lacks. We benchmark this model against ground-truth PIC simulations of a local reconnection layer in identical conditions. As a first step (<a href="https://arxiv.org/abs/2611.28035">Paper I</a>), we model <strong>IC cooling</strong> of a pair (electron&ndash;positron) plasma in the optically thin regime (where photons escape freely), in a uniform, isotropic background radiation field. Our model captures both IC scattering off the random motions of hot electrons in the X-points and the bulk Comptonization off the coherent fast outflow, as illustrated below.</p></div>
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
	<div data-level="student" hidden><p>In the particle simulation, every electron and positron is pushed around by electric and magnetic fields. As the particles move through a bath of photons, they lose energy by scattering photons, which we model as a <strong>radiative drag force</strong> opposing their motion (much like air resistance) that grows stronger the faster the particle moves. Choosing how strong the drag is lets us choose how strongly the plasma cools, from no cooling to strong cooling.</p></div>
	<div data-level="astronomer" data-default><p>In PIC, each electron and positron is pushed around by the Lorentz force from the electromagnetic fields; as it moves through a bath of soft photons, it loses energy to IC scattering, which we apply as a <strong>radiative drag force</strong> opposing its motion. The average reconnection electric field accelerates the particles until the drag balances it, at a <strong>characteristic Lorentz factor \(\gamma_{\rm rad}\)</strong> where all the energy from reconnection goes into radiation. Expressing the drag force in terms of \(\gamma_{\rm rad}\) lets it control the strength of the cooling (i.e., a smaller \(\gamma_{\rm rad}\) means stronger cooling).</p></div>
	<div data-level="plasma" hidden><div class="equation"><img src="{{ site.baseurl }}/assets/images/plasma/mrc-eq-pic.svg" style="width: 13.73em" alt="F_IC = minus m_e c squared beta_rec sigma_0 over Delta, times (gamma over gamma_rad) squared, times beta" /></div><p>Particles travel through a photon bath of energy density \(u_{\rm rad}\), and IC losses enter as a <strong>radiative drag force</strong> subtracted from the Lorentz force. Balancing the drag against the reconnection electric field \(E_{\rm rec} = \beta_{\rm rec} B_0\) defines the <strong>characteristic Lorentz factor \(\gamma_{\rm rad}\)</strong> at which all the energy from reconnection goes into radiation. Reparametrizing the drag force in terms of \(\gamma_{\rm rad}\) lets it control the strength of the cooling (i.e., a smaller \(\gamma_{\rm rad}\) means stronger cooling). Together with the layer half-thickness \(\Delta\) (the hot Larmor radius), \(\gamma_{\rm rad}\) fully sets the radiative regime.</p></div>
</div>
</div>
<div class="output-card">
	<span class="badge fa-tint"></span>
	<span class="output-kind">Fluid (RRMHD)</span>
	<h3>An energy and momentum sink</h3>
<div class="levels">
	<div data-level="student" hidden><p>In a fluid description of the plasma, we evolve equations for the conservation of mass, energy, and momentum coupled to Maxwell&rsquo;s equations for electricity and magnetism. &ldquo;Cooling&rdquo; is then treated as <strong>losses of energy and momentum</strong> subtracted from the conservation laws, at a rate found by averaging the radiative drag force over all the electrons in a given cell. The hotter the plasma and the faster it flows, the more it cools.</p></div>
	<div data-level="astronomer" data-default><p>In a fluid model, rather than following individual particles we average over their collective motion, solving the RRMHD equations, which couple the conservation of mass, energy, and momentum to Maxwell&rsquo;s equations. Radiative losses then enter as a <strong>sink term</strong> subtracted from the energy and momentum equations, derived by averaging the IC drag over the electron and photon distributions, so that the random motions of the electrons become a temperature and their coherent motion a bulk velocity. The losses then scale with the <strong>temperature squared</strong> (IC scattering) and the <strong>bulk speed squared</strong> (bulk Comptonization).</p></div>
	<div data-level="plasma" hidden><div class="equation"><img src="{{ site.baseurl }}/assets/images/plasma/mrc-eq-mhd.svg" style="width: 23.66em" alt="Energy-momentum equation with the radiative sink S^mu, and the energy and momentum sinks S^0 and S^i of Paper I, Eqs. 11 and 12" /></div><p>In a fluid model, radiative losses become a <strong>sink \(S^\mu\) in the energy and momentum equations</strong>. Following <a href="https://doi.org/10.1088/0004-637X/809/1/23">Golan &amp; Levinson (2015)</a>, we average over the boosted electron (Maxwell&ndash;J&uuml;ttner) and photon distributions, so that the individual particle motions translate into a dimensionless temperature \(\Theta = k_{\rm B}T/m_{\rm e}c^2\) and a bulk four-velocity \(\Gamma\beta_\Gamma\). The \(\Theta^2\) terms capture IC scattering in the hot X-points, and the \(\Gamma^2\beta_\Gamma^2\) term captures bulk Comptonization on the fast plasmoids.</p></div>
</div>
</div>
</div>
<div class="output-cards" data-show-for="astronomer plasma">
<div class="output-card">
	<span class="badge fa-link"></span>
	<span class="output-kind">The bridge</span>
	<h3>Fast reconnection in the fluid: charge-starved resistivity</h3>
<div class="levels">
	<div data-level="astronomer" data-default><p>A fluid model needs <strong>resistivity</strong> to let magnetic field lines break and rejoin, and the shape of the resistivity sets how fast reconnection proceeds. In relativistic reconnection, the plasma around the X-points becomes <strong>charge-starved</strong>: the current density nears the maximum that the available charges can carry (<a href="https://doi.org/10.3847/2041-8213/ada158">Moran et al. 2025</a>). In RRMHD, we capture this with a localized, effective resistivity that reproduces the fast kinetic reconnection rate (<a href="https://arxiv.org/abs/2601.02460">Ripperda et al. 2026</a>). This model also matches the reconnection electric field from PIC, so the balance that defines \(\gamma_{\rm rad}\) holds in the fluid formalism as well, and the RRMHD cooling can be controlled with the same \(\gamma_{\rm rad}\) as PIC.</p></div>
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
<p class="spec-line" data-show-for="astronomer plasma"><span class="output-kind">Set-up</span>2D Harris current sheet &middot; pair plasma &middot; magnetization \(\sigma_0 = 15\) &middot; guide field \(0.5B_0\) &middot; RRMHD: BHAC &middot; PIC: TRISTAN-MP v2 &middot; ~\(30{,}000^2\) cells</p>
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
	<div data-level="student" hidden><p>The figure compares the <strong>speed</strong> (top) and <strong>temperature</strong> (bottom) of the plasma in a reconnection layer, with cooling off and on, in the PIC (left) and MHD (right) simulations. The fluid model reproduces the <strong>overall shape of the layer and how fast and how hot the plasma is</strong> from PIC, both without cooling and with strong cooling (when the plasma radiates away much of its heat and the layer becomes much colder). The important speeds from PIC &ndash; the <strong>rate at which the field lines reconnect</strong> and the <strong>speed of the bulk outflow</strong> &ndash; are also captured by our model.</p></div>
	<div data-level="astronomer" data-default><p>We compare RRMHD with PIC across a range of cooling strengths, from no cooling to strong cooling, with black hole coronae expected to lie at the moderate case. Regardless of cooling strength, our RRMHD model reproduces the <strong>overall morphology of the reconnection layer</strong> and the typical bulk speed, temperature, and density in the sheet (above) when benchmarked against PIC simulations.</p></div>
	<div data-level="plasma" hidden><p>For all cooling regimes, our RRMHD model reproduces the <strong>overall morphology of the reconnection layer</strong> and the typical magnitudes of the bulk speed, temperature, and density in the sheet. Our model also recovers the kinetic reconnection rate and the Alfv&eacute;nic outflow; cooling has a negligible effect on both.</p></div>
</div>
<div data-show-for="student" hidden>
<figure class="paper-figure plain">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-student-ic.png" alt="Energy distributions of the plasma in the particle simulation (PIC) and the fluid simulation (MHD) for inverse Compton cooling, with cooling off and on: kinetic energy of the plasma and bulk motion of the plasma" />
	<figcaption>Adapted from Fig. 3 of Paper I.</figcaption>
</figure>
<p>The most quantitative test of our radiative model is the <strong>distribution of the total kinetic energy and the bulk motion energy</strong> in the reconnection layer. The distributions peak at roughly the same <strong>temperature</strong> (dictated by the kinetic energy) and <strong>outflow speed</strong> (dictated by the bulk motion energy) in both models, describing the motions that Compton-scatters photons. MHD, as a fluid description, assumes a thermal plasma, so cannot capture the high-energy <strong>non-thermal tail</strong> of the PIC kinetic energy spectrum; although, with stronger cooling the non-thermal motions are cooled away, and the PIC and MHD distributions match better.</p>
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
	<div data-level="astronomer" data-default><p>The most quantitative test of our radiative model is the <strong>distribution of the total kinetic energy and the bulk motion energy</strong> in the reconnection layer. The distributions peak at roughly the same <strong>temperature</strong> (dictated by the kinetic energy) and <strong>outflow speed</strong> (dictated by the bulk motion energy) in both models, describing the motion that Compton-scatters photons. RRMHD by itself does not capture the <strong>non-thermal tail</strong> of the kinetic spectrum, though this gap shrinks with stronger cooling, which drives the plasma closer to a thermal state.</p></div>
	<div data-level="plasma" hidden><p>The most quantitative comparison is in the <strong>energy spectra</strong> of the reconnection layer: we compare both the total kinetic energy spectrum (found in RRMHD via a per-cell drifting Maxwellian) and the bulk motion energy spectrum. The spectra show good agreement in temperature and outflow; however, RRMHD by itself does not capture the kinetic non-thermal tail (see below).</p></div>
</div>
</div>
<div data-show-for="student astronomer plasma">
<span class="subhead">Synchrotron cooling and test particles</span>
<div class="levels">
	<div data-level="student" hidden><p>In Paper II, led by Ma&euml;lle Magnan, we extend our model to <strong>synchrotron cooling</strong>, the radiation from electrons gyrating relativistically around magnetic field lines. Synchrotron cooling does not have as strong of an effect on the kinetic energy distribution as IC, since it <strong>does not cool where the plasma is hot or fast</strong>. Ma&euml;lle also added <strong>test particles</strong>, which are particles painted onto the MHD simulation and pushed around by the electromagnetic fields without having an effect on the MHD plasma. With these test particles, MHD is now able to capture the PIC non-thermal tail.</p></div>
	<div data-level="astronomer" data-default><p>In Paper II, led by Ma&euml;lle Magnan, we extend our model to <strong>synchrotron cooling</strong>, the radiation from electrons gyrating relativistically around magnetic field lines. As for IC, balancing the reconnection electric field against synchrotron losses defines a characteristic Lorentz factor \(\gamma_{\rm sync}\) that sets the cooling strength. The addition of <strong>test particles</strong>, which are pushed by the RRMHD fields without feeding back on them, is able to capture the kinetic non-thermal tail.</p></div>
	<div data-level="plasma" hidden><p>In Paper II, led by Ma&euml;lle Magnan, we extend our model to <strong>synchrotron cooling</strong>. Balancing the reconnection electric field against synchrotron losses defines \(\gamma_{\rm sync}\), analogous to \(\gamma_{\rm rad}\). The addition of <strong>test particles</strong> pushed by the RRMHD fields is able to capture the kinetic non-thermal tail.</p></div>
</div>
<div class="output-cards" data-show-for="plasma" hidden>
<div class="output-card">
	<span class="badge fa-braille"></span>
	<span class="output-kind">Particles (PIC)</span>
	<h3>A synchrotron drag force</h3>
	<div class="equation"><img src="{{ site.baseurl }}/assets/images/plasma/mrc-eq-sync-pic.svg" style="width: 18.0em" alt="F_sync = m_e c squared beta_rec sigma_0 over Delta, times 1 over gamma_sync squared, times (kappa_R minus gamma squared chi_R squared beta)" /></div>
	<p>\(\boldsymbol{\kappa}_R\) and \(\chi_R^2\) depend on the <strong>fields felt by the particle</strong>: the drag vanishes for an \(\mathbf{E}\times\mathbf{B}\) drift and in the X-points, where \(B \approx 0\).</p>
</div>
<div class="output-card">
	<span class="badge fa-tint"></span>
	<span class="output-kind">Fluid (RRMHD)</span>
	<h3>An energy and momentum sink</h3>
	<div class="equation"><img src="{{ site.baseurl }}/assets/images/plasma/mrc-eq-sync-mhd.svg" style="width: 15.03em" alt="S^0 = minus two thirds rho c squared beta_rec sigma_0 over Delta, times (Theta over Theta_sync) squared, times B-prime squared over B_0 squared; S^i = S^0 beta_Gamma^i" /></div>
	<p>The sink depends only on the temperature and the magnetic field in the fluid frame, \(B'\). Unlike IC, it has <strong>no bulk-motion term</strong>, so synchrotron cools the plasma without braking the bulk flow.</p>
</div>
</div>
<figure class="paper-figure plain" data-show-for="student" hidden style="width: 73.86%; max-width: 38.4em">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-student-sync.png" alt="Kinetic energy distribution of the plasma for synchrotron cooling, with cooling off and on: PIC, MHD, and MHD test particles" />
	<figcaption>Adapted from Paper II (M. Magnan et al., in prep.).</figcaption>
</figure>
<figure class="paper-figure plain" data-show-for="astronomer">
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-sync-astronomer.png" alt="Kinetic energy spectra with synchrotron cooling off and on: PIC, RRMHD, and test particles pushed through the RRMHD fields, which recover the PIC non-thermal tail" />
	<figcaption>Adapted from Paper II (M. Magnan et al., in prep.).</figcaption>
</figure>
<figure class="paper-figure plain" data-show-for="plasma" hidden>
	<img src="{{ site.baseurl }}/assets/images/plasma/mrc-sync-plasma.png" alt="Kinetic energy spectra with synchrotron cooling off and on: PIC, RRMHD, and test particles pushed through the RRMHD fields, which recover the PIC non-thermal tail" />
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
	<div data-level="student" hidden><p>Our results show that <strong>radiative cooling can now be accurately modelled in MHD simulations</strong>. Now that our model has been validated against PIC, we can move past the &ldquo;cut-out&rdquo; box and apply our model in <strong>global simulations of black hole systems</strong>, where reconnection layers form on their own, to see how much of the X-ray glow they can explain. We can also repeat this process with more physical processes that are currently missing from MHD frameworks, such as (1) letting electrons and protons have different temperatures, (2) following how photons travel through the plasma and feed back on it, and (3) creating and destroying pairs of electrons and positrons (matter and antimatter).</p></div>
	<div data-level="astronomer" data-default><p>With the model validated against kinetic theory, the next step is to apply it in <strong>global resistive GRMHD simulations of black hole accretion</strong>, where reconnection sites form self-consistently. I will also extend the model to include more physics: (1) <strong>two-temperature plasma</strong>, pairing our cooling with heating of electrons and ions through the resistivity (Ohmic heating); (2) <strong>M1 radiation transport</strong>, replacing the uniform, isotropic photon field with one that evolves in time and space and exchanges energy and momentum with the plasma, as needed in more optically thick regimes; and (3) <strong>pair production</strong> and annihilation.</p></div>
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
				<h3>Making Reconnection Cooler II: A collisionless model for synchrotron reconnection in relativistic resistive magnetohydrodynamics with test particles</h3>
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
