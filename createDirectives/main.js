var app = angular.module('myApp',[]);

// app.controller('defaultCtrl', function($scope) {
// 	 $scope.products = [
//         { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
//         { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
//         { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
//         { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
//         { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
//         { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
//         { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
//         { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
//         { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
//     ];
// });

app.directive("demoDirective", function() {
	return function(scope, element, attrs){
		var items = element.children();
		
			for(var i = 0; i<items.length; i++){
				console.log('items eq', items.eq(i));
				if(items.eq(i).text() =="Oranges"){
					items.eq(i).css("font-weight","bold");
					items.eq(i).css("background","orange");

				} else {
					items.eq(i).css('background','black');
					items.eq(i).css('color','white');


				}
			}
	}
})



app.directive('unorderedList', function() {
                return function(scope, element, attrs) {
                    var data = scope[attrs['unorderedList']];
                    // var data = scope.attrs['unorderedList'];

                    if(angular.isArray(data)) {
                        var listElem = angular.element('<ul>');
                        // adding a attribute to use for filterings
                        var propertyExpression = attrs['listProperty'];
                        element.append(listElem);
                        angular.forEach(data, function(item) {
                            var itemElement = angular.element('<li>');
                            listElem.append(itemElement);
                            var watcherFn = function(watchScope) {
                                console.log('watcherFn called, item.price = ' + item.price);
                                // $eval allows us to evaluate the attribute as an expression
                                return watchScope.$eval(propertyExpression, item);
                            };
                            scope.$watch(watcherFn, function(newValue, oldValue) {
                                console.log('$watch called, newValue = ' + newValue);
                                itemElement.text(newValue);
                            });
                        });
                    }
                };
            })

app.controller('defaultCtrl', function ($scope) {
                $scope.products = [
                    { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
                    { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
                    { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
                    { name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
                    { name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
                    { name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
                    { name: "Beer", category: "Drinks", price: 2.99, expiry: 365 },
                    { name: "Wine", category: "Drinks", price: 8.99, expiry: 365 },
                    { name: "Whiskey", category: "Drinks", price: 45.99, expiry: 365 }
                ];
                $scope.incrementPrices = function() {
                    angular.forEach($scope.products, function(product) {
                        product.price++;
                    });
                };
            });