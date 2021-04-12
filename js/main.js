const swiper = new Swiper('.channel-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: { slidesPerView: 6 },
		1600: { slidesPerView: 5 },
		1300: { slidesPerView: 4 },
		1100: { slidesPerView: 3 },
		800: { slidesPerView: 2 },
	},
	// Navigation arrows
	navigation: {
		nextEl: '.channel-button-next',
		prevEl: '.channel-button-prev',
	},
});

/* Второй слайдер */
const swiper2 = new Swiper('.recommended-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1600: { slidesPerView: 3 },
		// 1300: { slidesPerView: 4 },
		// 1400: { slidesPerView: 2 },
		1000: { slidesPerView: 2 },
	},
	// Navigation arrows
	navigation: {
		nextEl: '.recommended-button-next',
		prevEl: '.recommended-button-prev',
	},
});

/* Третий слайдер */
const swiper3 = new Swiper('.food_drink-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: { slidesPerView: 6 },
		1600: { slidesPerView: 5 },
		1300: { slidesPerView: 4 },
		1100: { slidesPerView: 3 },
		800: { slidesPerView: 2 },
	},
	// Navigation arrows
	navigation: {
		nextEl: '.food_drink-button-next',
		prevEl: '.food_drink-button-prev',
	},
});

// Настраиваем открытие окна поиска по нажатию на кнопку поиска на малых экранах
const searchBtn = document.querySelector('.button-search');
const mobileSearch = document.querySelector('.input-search');
searchBtn.addEventListener('click', () => {
	mobileSearch.classList.toggle('is-open');
});
