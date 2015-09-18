
var mainControllerFunc = function($scope, starCraftData) {
	$scope.data = starCraftData; 
	$scope.sortFrom = '0'; 
	$scope.showSort = false;
	$scope.dataFilter = null; 
	$scope.perPage = 20; 
	$scope.page = 1; 


	$scope.sortData = function(column) {
		if (column.toString() === $scope.sortFrom) {
			$scope.showSort = !$scope.showSort;
		}
		else {
			$scope.showSort = false; 
		}
		$scope.sortFrom = column.toString();
	}


	$scope.pagination = function(next) {
		$scope.page += next;
	}

	$scope.totalPages = Math.ceil($scope.data.data.length / $scope.perPage)




















}
angular.module("app").controller('mainController', ['$scope', 'starCraftData', mainControllerFunc]);