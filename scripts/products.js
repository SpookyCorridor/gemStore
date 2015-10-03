(function() { // yay closure! var app can be defined yet again 

	var app = angular.module('store-products', [ ]); 
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