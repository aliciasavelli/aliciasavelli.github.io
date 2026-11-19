/*
  Reading-level toggle (Student / Astronomer / Plasma astrophysicist).
  Markup lives in plasma.md: a .level-toggle button row, plus .levels blocks
  holding one <div data-level="..."> per version. In each block the version
  marked data-default is shown when the chosen level has no version of its own.
  Any other element can be limited to some levels with data-show-for="student astronomer"
  (give it the hidden attribute too if the default level, astronomer, isn't in its list).
*/
(function () {
	var toggle = document.querySelector('.level-toggle');
	if (!toggle) return;

	var KEY = 'readingLevel';
	var DEFAULT = 'astronomer';
	var buttons = toggle.querySelectorAll('[data-set-level]');
	var valid = {};
	for (var i = 0; i < buttons.length; i++) valid[buttons[i].getAttribute('data-set-level')] = true;

	function apply(level) {
		var groups = document.querySelectorAll('.levels');
		for (var g = 0; g < groups.length; g++) {
			var items = groups[g].querySelectorAll(':scope > [data-level]');
			var match = groups[g].querySelector(':scope > [data-level="' + level + '"]') ||
				groups[g].querySelector(':scope > [data-default]') || items[0];
			for (var j = 0; j < items.length; j++) items[j].hidden = (items[j] !== match);
		}
		var only = document.querySelectorAll('[data-show-for]');
		for (var o = 0; o < only.length; o++) {
			only[o].hidden = (' ' + only[o].getAttribute('data-show-for') + ' ').indexOf(' ' + level + ' ') < 0;
		}
		for (var b = 0; b < buttons.length; b++) {
			var on = buttons[b].getAttribute('data-set-level') === level;
			buttons[b].classList.toggle('special', on);
			buttons[b].setAttribute('aria-pressed', on ? 'true' : 'false');
		}
	}

	var saved = null;
	try { saved = localStorage.getItem(KEY); } catch (e) {}
	var current = valid[saved] ? saved : DEFAULT;

	for (var k = 0; k < buttons.length; k++) {
		buttons[k].addEventListener('click', function () {
			current = this.getAttribute('data-set-level');
			try { localStorage.setItem(KEY, current); } catch (e) {}
			apply(current);
		});
	}

	toggle.hidden = false;
	apply(current);
})();
