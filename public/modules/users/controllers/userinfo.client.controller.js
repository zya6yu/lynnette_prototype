'use strict';

angular.module('users').controller('UserInfoController2', ['$scope', 'Authentication', '$rootScope',
    function($scope, Authentication, $rootScope) {
        $scope.authentication = Authentication;

        console.log(Authentication);

        $scope.displayName = Authentication.user.displayName;
        $scope.selectionLevel = Authentication.user.selectionLevel;
        $scope.completionLevel = Authentication.user.completionLevel;

        //$scope.displayName = "test name";

        $scope.$on('levelselect', function(event, data){
            console.log('UserInfoController received levelselect');
            console.log(data.level);
            console.log(data.mastered);
        });
    }
]);