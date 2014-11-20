'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};


		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);

angular.module('core').controller('UserInfoController', ['$scope', 'Authentication', 'Menus',
    function($scope, Authentication, Menus) {
        $scope.authentication = Authentication;
        //$scope.isCollapsed = false;
        //$scope.menu = Menus.getMenu('topbar');

        console.log(Authentication);

        $scope.displayName = Authentication.user.displayName;
        $scope.selectionLevel = Authentication.user.selectionLevel;
        $scope.completionLevel = Authentication.user.completionLevel;

        //$scope.toggleCollapsibleMenu = function() {
        //    $scope.isCollapsed = !$scope.isCollapsed;
        //};
        //
        //// Collapsing the menu after navigation
        //$scope.$on('$stateChangeSuccess', function() {
        //    $scope.isCollapsed = false;
        //});
    }
]);