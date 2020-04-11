$(document).ready(function () {
	// Subtitles

	var subTitles = [
		'Entrepreneur',
		'Web Developer',
		'Product Manager',
		'Team Leader',
		'MBA w/ Honors',
	];

	$('#subtitle').html("<p class='animated fadeInUp'>" + subTitles[0] + '</p>');

	var i = 1;

	var loopSubTitles = function () {
		setTimeout(function () {
			$('#subtitle').html("<p class='animated fadeInUp'>" + subTitles[i] + '</p>');
			i++;
			if (i < subTitles.length) {
				loopSubTitles();
			} else {
				i = 0;
				loopSubTitles();
			}
		}, 3000);
	};

	loopSubTitles();

	// Portfolio Loop on Home Page

	var portfolioImages = [
		{
			name: 'Blockbuster Italy - Web Portal',
			description:
				"The evolution of Blockbuster Italy's on-line presence for over two years (2004 - 2006), from the first web portal to a complete e-commerce solution, which I directed as Client/Project Manager at LBi Italy",
			file: 'blockbuster.jpg',
			type: 'product',
		},
		{
			name: 'La3 - Web Portal',
			description:
				'Brand-new web portal for the launch of 3 Italy’s Mobile TV, including a multi-feed online TV Guide. As Client/Project Manager at LBi Italy, I led a cross-functional team to develop it on budget and in record time',
			file: 'la3.jpg',
			type: 'product',
		},
		{
			name: 'Tv Connect ™',
			description:
				'End-to-end development of a hybrid set-top box with DTT tuners, DVR, Catch-up TV widgets, multi-screen experience and DLNA. I led this project as Senior Product Manager at Vodafone Italy',
			file: 'tv-connect.jpg',
			type: 'product',
		},
		{
			name: 'HomeCloud ™',
			description:
				'Open-innovation effort to develop a digital storage device with real-time media transcoding, recipient of the Connected Home Design & Technology Innovation Award in 2012. I directed this project as Global Product Manager at Vodafone Group',
			file: 'home-hub.jpg',
			type: 'product',
		},
		{
			name: 'Xfinity Home - Device Ecosystem',
			description:
				'End-to-end development of a new device ecosystem for Home Security and Automation, directing and coaching a team of Senior Managers in my role of Director of Product Management at Comcast / Xfinity Home',
			file: 'xfinity.jpg',
			type: 'product',
		},
		{
			name: 'Javascript Games',
			description:
				'Web-based games to solidify my learning of Javascript, created during my first two months at the Penn Web Development Bootcamp in 2018',
			file: 'js-games.jpg',
			github: 'https://github.com/stepicker/TriviaGame',
			type: 'web',
		},
		{
			name: 'Movie Picker',
			description:
				'Personal project using public APIs to create a movie search-engine with a personal wish-list. Original version using Firebase authentication and real-time database. Newer version using AWS Cognito / Lambda / DynamoDB',
			file: 'movie-picker.jpg',
			github: 'https://github.com/stepicker/Movie-Picker',
			type: 'web',
		},
		{
			name: 'Breadcrumbs',
			description:
				"Web app for circles of people to keep track of each other's location, built on the MERN stack as final project for my Bootcamp at Penn University. The app relies on a GPS tracker prototyped at my start-up, IoT Slash",
			file: 'breadcrumbs.jpg',
			type: 'web',
		},
		{
			name: 'Wyze Cam Accessories',
			description:
				'Silicone Skin and Pencil Holder designed to host a Wyze security camera, making it more discreet in any room of the house. Best-selling accessories for the popular Wyze Cam on Amazon.com, designed and distributed by my start-up, IoT Slash',
			file: 'wyze-accessories.jpg',
			type: 'product',
		},
		{
			name: 'Deerfield Electric',
			description:
				'Employee Portal for an electrical contracting company, with features such as daily schedule and timesheet reporting. Developed in React and React Native, as a CRUD App supported by AWS and MongoDB Atlas',
			file: 'deerfield.jpg',
			type: 'web',
		},
	];

	var indexNumber;
	var shownImage;

	var getRandomImage = function () {
		indexNumber = Math.floor(Math.random() * portfolioImages.length);
		shownImage = portfolioImages[indexNumber];
	};

	var populatePortfolio = function () {
		$('#portfolio-box').html(
			"<img class='portfolio-img animated fadeIn' id='portfolio-img' title='" +
				shownImage.name +
				"' src='./assets/images/portfolio/" +
				shownImage.file +
				"'><img id='left-arrow' src='./assets/images/left-arrow.png'><img id='right-arrow' src='./assets/images/right-arrow.png'>"
		);
	};

	var loopDuration = subTitles.length * 3000;

	var shufflePortfolio = setInterval(function () {
		getRandomImage();
		$('#portfolio-img').attr(
			'src',
			'./assets/images/portfolio/' + shownImage.file
		);
	}, loopDuration);

	$(document).on('click', '#left-arrow', function () {
		if (portfolioImages.indexOf(shownImage) === 0) {
			indexNumber = portfolioImages.length - 1;
		} else {
			indexNumber = indexNumber - 1;
		}
		shownImage = portfolioImages[indexNumber];
		populatePortfolio();
		clearInterval(shufflePortfolio);
	});

	$(document).on('click', '#right-arrow', function () {
		if (portfolioImages.indexOf(shownImage) === portfolioImages.length - 1) {
			indexNumber = 0;
		} else {
			indexNumber = indexNumber + 1;
		}
		shownImage = portfolioImages[indexNumber];
		populatePortfolio();
		clearInterval(shufflePortfolio);
	});

	getRandomImage();
	populatePortfolio();

	// Portfolio Page

	for (var j = 0; j < portfolioImages.length; j++) {
		if (portfolioImages[j].type === 'web' && portfolioImages[j].github) {
			$('#portfolio-container').prepend(
				"<div class='portfolio-item portfolio-web'><img class='portfolio-img' src='../assets/images/portfolio/" +
					portfolioImages[j].file +
					"'><div class='portfolio-overlay'><h4>" +
					portfolioImages[j].name +
					'</h4><h5>' +
					portfolioImages[j].description +
					"</h5><a href='" +
					portfolioImages[j].github +
					"' target='_blank'><div id='see-on-github'><span>See the code</span><img src='../assets/images/github.png' id='github-icon'></div></a></div></div>"
			);
		} else if (portfolioImages[j].type === 'web') {
			$('#portfolio-container').prepend(
				"<div class='portfolio-item portfolio-web'><img class='portfolio-img' src='../assets/images/portfolio/" +
					portfolioImages[j].file +
					"'><div class='portfolio-overlay'><h4>" +
					portfolioImages[j].name +
					'</h4><h5>' +
					portfolioImages[j].description +
					'</h5></div></div>'
			);
		} else if (portfolioImages[j].type === 'product') {
			$('#portfolio-container').prepend(
				"<div class='portfolio-item portfolio-product'><img class='portfolio-img' src='../assets/images/portfolio/" +
					portfolioImages[j].file +
					"'><div class='portfolio-overlay'><h4>" +
					portfolioImages[j].name +
					'</h4><h5>' +
					portfolioImages[j].description +
					'</h5></div></div>'
			);
		}
	}

	$('.tab-links').on('click', function () {
		if ($(this).data('name') === 'all-button') {
			$('.portfolio-web').show();
			$('.portfolio-product').show();
			$('.tab-links').removeClass('tab-selected');
			$(this).addClass('tab-selected');
		} else if ($(this).data('name') === 'web-button') {
			$('.portfolio-web').show();
			$('.portfolio-product').hide();
			$('.tab-links').removeClass('tab-selected');
			$(this).addClass('tab-selected');
		} else if ($(this).data('name') === 'product-button') {
			$('.portfolio-web').hide();
			$('.portfolio-product').show();
			$('.tab-links').removeClass('tab-selected');
			$(this).addClass('tab-selected');
		}
	});
});
