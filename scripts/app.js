(function(){
	var app = angular.module('gemStore', []); 

	app.controller('StoreController', function(){
		this.products = gems; 
	});

	app.controller('PanelController', function(){
		this.tab = 1; 

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSet = function(checkTab) {
			return this.tab === checkTab; 
		}

	});

})(); 

var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
		canPurchase: true, 
		soldOut: false,
		appeal: 'shiny',
		color: 'tomato'
	},

	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		canPurchase: false, 
		soldOut: false,
		appeal: 'cursed',
		color: 'lavendar'
	}
];