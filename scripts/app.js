(function(){
	var app = angular.module('gemStore', ['store-products']);  //add products.js dependancy

	app.controller('StoreController', function(){
		this.products = gems; 
	});

	//calling an api instead with StoreController:

	/*
	app.controller('StoreController', [ '$http', function($http){
		var store = this; 
		store.products = [ ]; // initialize to empty array because the page will load
													// faster than data returns from our get request 

		$http.get('/products.json').success(function(data) {
			store.products = data; 
		}); 
	}]); 	
	*/ 

	app.controller('PanelController', function(){
		

	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			this.review.createdOn = Date.now(); 
			product.reviews.push(this.review); 
			this.review = {}; // reset fields & preview upon submit 
		};

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
		color: 'tomato',
		reviews: [
			{
				stars: 5,
				body: 'This is the best gem yet!',
				author: 'joe@thomas.com'
			},
		]
	},

	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		canPurchase: false, 
		soldOut: false,
		appeal: 'cursed',
		color: 'lavendar',
		reviews: [
			{
				stars: 3,
				body: 'This gem possessed my husband. :( not cool',
				author: 'saynoto@gems.netscape'
			},
		]
	}
];