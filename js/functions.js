document.addEventListener('DOMContentLoaded', function() {

	var mqSmall = window.matchMedia("(max-width: 800px");

	var menuBtn = document.getElementById('nav-toggle');

	menuBtn.addEventListener('click', function() {
		var menuNav = document.getElementById('nav');
		menuNav.classList.toggle('nav-toggle-open');
	});

	var currentThemeBtn = document.querySelectorAll('.current-theme');
	var themeMenu = document.getElementById('theme-menu');
	var themeBtnMenu = document.getElementById('theme-btn-menu');
	var closeThemes = document.getElementById('close-themes');

	function menuToggle() {
		themeMenu.style.height = '240px';
		closeThemes.style.display = 'block';
	}

	themeBtnMenu.addEventListener('click', menuToggle);

	closeThemes.addEventListener('click', function() {
		if (mqSmall.matches) {
			themeMenu.style.height = '60px';
		}
		else {
			themeMenu.style.height = '27px';
		}
		closeThemes.style.display = 'none';
	});

	var themeBtn = document.querySelectorAll('#theme-btn-menu button');
	var otherThemeBtn = document.querySelectorAll('#theme-btn-menu button:not(.current-theme)');

	function themeBtnToggle(event) {
		for (var i = 0; i < themeBtn.length; i++) {
			themeBtn[i].classList.remove('current-theme');
		};
		event.target.classList.add('current-theme');
	};

	for (var i = 0; i < otherThemeBtn.length; i++) {
		otherThemeBtn[i].addEventListener('click', themeBtnToggle, false);
	};

	var greenBtn = document.getElementById('btn-green');
	var grayBtn = document.getElementById('btn-gray');
	var mutedBtn = document.getElementById('btn-muted');
	var darkBtn = document.getElementById('btn-dark');
	var lauraBtn = document.getElementById('btn-laura');

	localStorage.getItem('currentTheme');

	if (localStorage.getItem('currentTheme') != null) {
		getTheme = localStorage.currentTheme;
		document.body.className = getTheme;
	}

	function themeToggle(event) {
		if (event.target == grayBtn) {
			setTheme = 'theme-grayscale';
			document.body.className = setTheme;
			localStorage.setItem('currentTheme', setTheme);
		//	document.body.className = 'theme-grayscale';
		} else
		if (event.target == greenBtn) {
			setTheme = 'theme-greenDream';
			document.body.className = setTheme;
			localStorage.setItem('currentTheme', setTheme);
		//	document.body.className = 'theme-greenDream';
		} else
		if (event.target == mutedBtn) {
			setTheme = 'theme-muted';
			document.body.className = setTheme;
			localStorage.setItem('currentTheme', setTheme);
		//	document.body.className = 'theme-muted';
		} else
		if (event.target == darkBtn) {
			setTheme = 'theme-darkMode';
			document.body.className = setTheme;
			localStorage.setItem('currentTheme', setTheme);
		//	document.body.className = 'theme-darkMode';
		} else
		if (event.target == lauraBtn) {
			setTheme = 'theme-laurasPick';
			document.body.className = setTheme;
			localStorage.setItem('currentTheme', setTheme);
		//	document.body.className = 'theme-laurasPick';
		}
	}

	for (var i = 0; i < themeBtn.length; i++) {
		themeBtn[i].addEventListener('click', themeToggle, false);
	};

});