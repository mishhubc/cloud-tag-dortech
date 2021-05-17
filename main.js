function init() {
	const polishWords = [
		'USZCZELNIENIA',
		'SZKŁO',
		'SZKLANE',
		'BAZALT',
		'ARAMID',
		'HAKOTHERM',
		'KRZEM',
		'WŁÓKNO',
		'KWADRAT',
		'SILONTEX',
		'SZCZELIWO',
		'SKRĘCANIE',
		'PRZĘDZA',
		'SZYDEŁKOWA',
		'OPLATANA',
		'RDZEŃ',
		'TAŚMA',
		'TEMPERATUROWY',
		'TKANY',
		'DZIANA',
		'HERMETYCZNY',
		'SZPULA',
		'SZCZELNY',
		'GRZANE',
		'CIEPŁO',
		'TECHNOLOGIA',
		'IZOLACJA',
		'CERTYFIKATY',
		'PIEC',
		'DOM',
		'ROZWÓJ',
		'ROLKA',
		'PREMIUM',
		'BEZPIECZEŃSTWO',
		'OGNIOTRWAŁY',
		'OGRZEWANIE',
		'KOMINEK',
	];

	const textPolish = polishWords.join(' ');
	var polishConfig = {
		type: 'wordcloud',
		options: {
			text: textPolish,
			minLength: 1,
			ignore: ['establish', 'this'],

			rotate: true,
			stepAngle: 20,
			stepRadius: 80,
			maxFontSize: 80,
			minFontSize: 10,
		},
	};

	var englishConfig = {
		type: 'wordcloud',
		options: {
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium quidem eius est veritatis ullam cupiditate nostrum ut atque in.',
			minLength: 1,
			ignore: ['establish', 'this'],

			rotate: true,
			stepAngle: 15,
			stepRadius: 15,
			maxFontSize: 80,
			minFontSize: 10,
		},
	};

	var germanConfig = {
		type: 'wordcloud',
		options: {
			text: 'Deutsches Ipsum Dolor deserunt dissentias Doppelscheren-Hubtischwagen et. Tollit argumentum ius an. Lebkuchen lobortis elaboraret per ne, nam ',
			minLength: 1,
			ignore: ['establish', 'this'],

			rotate: true,
			stepAngle: 15,
			stepRadius: 15,
			maxFontSize: 80,
			minFontSize: 10,
		},
	};

	zingchart.render({
		id: 'myChart',
		data: polishConfig,
		height: '400',
		width: '100%',
	});
	zingchart.render({
		id: 'myChartEn',
		data: englishConfig,
		height: '400',
		width: '100%',
	});
	zingchart.render({
		id: 'myChartDe',
		data: germanConfig,
		height: '400',
		width: '100%',
	});
}
init();

window.addEventListener('load', init);
document.addEventListener('contextmenu', (event) => event.preventDefault());
