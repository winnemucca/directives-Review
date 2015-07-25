angular.module('myApp',[])
	.service("ZipCodes", function($rootScope) {
		return {
			setZipCode: function(type,zip) {
				this[type]=zip;
				$rootScope.$broadcast("zipCodeUpdated", {
					type:type, zipCode: zip
				});
			}
		}
	})
	.controller('simpleCtrl', function($scope, ZipCodes) {
		$scope.cities = ["London", "New York", "Paris"];
		$scope.city = "London";
		$scope.getCountry = function(city) {
			switch($scope.city) {
				case "London":
					return "UK";
				case "New York":
					return "USA";
				case "Paris":
					return "FRA"
			}
		}

		// $scope.addresses = {};

		$scope.$on("zipCodeUpdated", function(event, args) {
			$scope[args.type] = args.zipCode;
			console.log($scope[args.type]);
		})

		$scope.setAddress = function(type, zip) {
			ZipCodes.setZipCode(type,zip);
			console.log("Type: " + type + " " + zip);

		}

		$scope.copyAddress = function() {
			$scope.zip = $scope.billingZip;
		}
	});