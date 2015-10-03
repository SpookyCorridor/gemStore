(function(){
	var app = angular.module('gemStore', []); 

	app.controller('StoreController', function(){
		this.products = gems; 
	});

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

	app.directive('productTitle', function() {
		return {
			/*Use element directives for UI widgets and Attribute Directives 
				for mixin behaviors like tooltips */
			restrict: "E", //E for element 
			templateUrl: "product-title.html"
		};
	});

	app.directive("productSpecs", function() {
    return { 
    	restrict: "A",
      templateUrl: "product-specs.html" 
    };
  }); 

  app.directive("productReviews", function() {
  	return {
  		restrict: "E", 
  		templateUrl: "product-reviews.html"
  	};
  });

  app.directive("productPanels", function() {
  	return {
  		restrict: "E",
  		templateUrl: "product-panels.html",
  		controller: function() {

  			this.tab = 1; 

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};

				this.isSet = function(checkTab) {
					return this.tab === checkTab; 
				}; 

  		},
  		controllerAs: "panel"
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