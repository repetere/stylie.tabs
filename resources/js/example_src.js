'use strict';

var StylieTabs = require('../../index'),
	stylieTab1;

var tabEvents = function () {
	stylieTab1.on('tabsShowIndex', function (index) {
		console.log('tab show index', index);
	});
};

window.addEventListener('load', function () {
	var tabelement = document.getElementById('tabs');
	stylieTab1 = new StylieTabs(tabelement);
	tabEvents();

	window.stylieTab1 = stylieTab1;
}, false);
