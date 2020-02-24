document.addEventListener('DOMContentLoaded', function() {

	// Theme Menu Size

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

	// Theme Menu Button Switch

	var themeBtn = document.querySelectorAll('#theme-btn-menu input');
	var themeWraps = document.querySelectorAll('#theme-btn-menu div');
	var greenBtn = document.getElementById('btn-green');
	var greenWrap = document.getElementById('wrap-btn-green');
	var grayBtn = document.getElementById('btn-gray');
	var grayWrap = document.getElementById('wrap-btn-gray');
	var mutedBtn = document.getElementById('btn-muted');
	var mutedWrap = document.getElementById('wrap-btn-muted');
	var darkBtn = document.getElementById('btn-dark');
	var darkWrap = document.getElementById('wrap-btn-dark');
	var lauraBtn = document.getElementById('btn-laura');
	var lauraWrap = document.getElementById('wrap-btn-laura');

	if (themeMenu) {
		loadTheme();

		for (var i = 0; i < themeBtn.length; i++) {
			themeBtn[i].addEventListener('change', changeTheme, false);
		};

		function loadTheme() {

			var currentTheme = window.localStorage.getItem('currentTheme');

			if (window.localStorage.getItem('currentTheme') === null) {
				var defaultTheme = 'theme-grayscale';
				document.body.className = defaultTheme;
			} else {
				document.body.className = currentTheme;
			}

			if (currentTheme === 'theme-grayscale') {
				grayBtn.checked = true;
				grayWrap.style.order = '1';
			} else

			if (currentTheme === 'theme-greenDream') {
				greenBtn.checked = true;
				greenWrap.style.order = '1';
			} else

			if (currentTheme === 'theme-muted') {
				mutedBtn.checked = true;
				mutedWrap.style.order = '1';
			} else

			if (currentTheme === 'theme-darkMode') {
				darkBtn.checked = true;
				darkWrap.style.order = '1';
			} else

			if (currentTheme === 'theme-laurasPick') {
				lauraBtn.checked = true;
				lauraWrap.style.order = '1';
			}

		//	// GRAYSCALE THEME
		//	var grayTheme = (localStorage.getItem('currentTheme') !== null && localStorage.getItem('currentTheme') === 'theme-grayscale');
		//	grayBtn.checked = grayTheme;
		//	grayTheme ? document.body.className = currentTheme : document.body.classList = '';

		//	// GREEN DREAM THEME
		//	var greenTheme = (localStorage.getItem('currentTheme') !== null && localStorage.getItem('currentTheme') === 'theme-greenDream');
		//	greenBtn.checked = greenTheme;
		//	greenTheme ? document.body.className = currentTheme : document.body.classList = '';

		//	// MUTED THEME
		//	var mutedTheme = (localStorage.getItem('currentTheme') !== null && localStorage.getItem('currentTheme') === 'theme-muted');
		//	mutedBtn.checked = mutedTheme;
		//	mutedTheme ? document.body.className = currentTheme : document.body.classList = '';

		//	// DARK MODE THEME
		//	var darkTheme = (localStorage.getItem('currentTheme') !== null && localStorage.getItem('currentTheme') === 'theme-darkMode');
		//	darkBtn.checked = darkTheme;
		//	darkTheme ? document.body.className = currentTheme : document.body.classList = '';

		//	// LAURA'S PICK THEME
		//	var lauraTheme = (localStorage.getItem('currentTheme') !== null && localStorage.getItem('currentTheme') === 'theme-laurasPick');
		//	lauraBtn.checked = lauraTheme;
		//	lauraTheme ? document.body.className = currentTheme : document.body.classList = '';
		};

		function changeTheme() {

			// GRAYSCALE THEME
			if (grayBtn.checked) {
				window.localStorage.setItem('currentTheme', 'theme-grayscale');
				for (var i = 0; i < themeWraps.length; i++) {
					themeWraps[i].style.order = "2";
				};
				grayWrap.style.order = "1";
			} else

			// GREEN DREAM THEME
			if (greenBtn.checked) {
				window.localStorage.setItem('currentTheme', 'theme-greenDream');
				document.body.className = currentTheme;
				for (var i = 0; i < themeWraps.length; i++) {
					themeWraps[i].style.order = "2";
				};
				greenWrap.style.order = "1";
			} else

			// MUTED THEME
			if (mutedBtn.checked) {
				window.localStorage.setItem('currentTheme', 'theme-muted');
				document.body.className = currentTheme;
				for (var i = 0; i < themeWraps.length; i++) {
					themeWraps[i].style.order = "2";
				};
				mutedWrap.style.order = "1";
			} else

			// DARK MODE THEME
			if (darkBtn.checked) {
				window.localStorage.setItem('currentTheme', 'theme-darkMode');
				document.body.className = currentTheme;
				for (var i = 0; i < themeWraps.length; i++) {
					themeWraps[i].style.order = "2";
				};
				darkWrap.style.order = "1";
			} else

			// LAURA'S PICK THEME
			if (lauraBtn.checked) {
				window.localStorage.setItem('currentTheme', 'theme-laurasPick');
				document.body.className = currentTheme;
				for (var i = 0; i < themeWraps.length; i++) {
					themeWraps[i].style.order = "2";
				};
				lauraWrap.style.order = "1";
			}

			var currentTheme = window.localStorage.getItem('currentTheme');
			document.body.className = currentTheme;
		};
	}

//	var otherThemeBtn = document.querySelectorAll('#theme-btn-menu label:not(.current-theme)');
//
//	function themeBtnToggle(event) {
//		for (var i = 0; i < themeBtn.length; i++) {
//			themeBtn[i].classList.remove('current-theme');
//		};
//		event.target.classList.add('current-theme');
//	};
//
//	for (var i = 0; i < otherThemeBtn.length; i++) {
//		otherThemeBtn[i].addEventListener('click', themeBtnToggle, false);
//	};

//	// Load Theme
//
//	localStorage.getItem('currentTheme');
//
//	if (localStorage.getItem('currentTheme') != null) {
//		getTheme = localStorage.currentTheme;
//		document.body.className = getTheme;
//	}
//
//	// Change Theme
//
//	function themeToggle(event) {
//		if (event.target == grayBtn) {
//			setTheme = 'theme-grayscale';
//			document.body.className = setTheme;
//			localStorage.setItem('currentTheme', setTheme);
//		//	document.body.className = 'theme-grayscale';
//		} else
//		if (event.target == greenBtn) {
//			setTheme = 'theme-greenDream';
//			document.body.className = setTheme;
//			localStorage.setItem('currentTheme', setTheme);
//		//	document.body.className = 'theme-greenDream';
//		} else
//		if (event.target == mutedBtn) {
//			setTheme = 'theme-muted';
//			document.body.className = setTheme;
//			localStorage.setItem('currentTheme', setTheme);
//		//	document.body.className = 'theme-muted';
//		} else
//		if (event.target == darkBtn) {
//			setTheme = 'theme-darkMode';
//			document.body.className = setTheme;
//			localStorage.setItem('currentTheme', setTheme);
//		//	document.body.className = 'theme-darkMode';
//		} else
//		if (event.target == lauraBtn) {
//			setTheme = 'theme-laurasPick';
//			document.body.className = setTheme;
//			localStorage.setItem('currentTheme', setTheme);
//		//	document.body.className = 'theme-laurasPick';
//		}
//	}
//
//	for (var i = 0; i < themeBtn.length; i++) {
//		themeBtn[i].addEventListener('click', themeToggle, false);
//	};

});