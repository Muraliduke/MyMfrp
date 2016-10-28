/*scroll controller for back to top*/
angularMFRP.controller('ScrollController', function($scope, $location, $anchorScroll, $window) {
    $scope.scrollFlag = false;
    $scope.scrollup = function(loc) {
		
        $location.hash(loc);
		
        $anchorScroll();
    }
    angular.element($window).bind("scroll", function() {
	
        if (this.pageYOffset > 200) {

            $scope.scrollFlag = true;
        } else {
            $scope.scrollFlag = false;
        }
        $scope.$apply()
    });
			
})

/*scroll controller for back to top*/