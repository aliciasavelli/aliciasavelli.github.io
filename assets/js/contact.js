/*
  "Show email" button in the footer (_includes/footer.html).
  The address is stored reversed and in two halves (data-u, data-d) so it never appears in the
  page as an email address; it is put back together only when someone clicks the button.
*/
(function () {
	var buttons = document.querySelectorAll('.email-reveal');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function () {
			var flip = function (s) { return s.split('').reverse().join(''); };
			var address = flip(this.getAttribute('data-u')) + '@' + flip(this.getAttribute('data-d'));
			var link = document.createElement('a');
			link.href = 'mailto:' + address;
			link.textContent = address;
			link.className = 'email-address';
			this.parentNode.replaceChild(link, this);
			link.focus();
		});
	}
})();
