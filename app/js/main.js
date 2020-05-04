angular.module('tribal', [])
  
.controller('SearchCtrl', [ '$scope', '$http', function($scope, $http) {
    $scope.search_str = "";
    $scope.media = [];
    $scope.loading_items = [0,1,2,3,4,5,6,7,8]
    $scope.apiURL = 'http://localhost:8080';

    $scope.search = function(){
        $scope.isLoading = true;
        $http({
            method: 'GET',
            url: $scope.apiURL+'/api/search/'+$scope.search_str
        }).then(function successCallback(response) {
            $scope.media = response.data;
        }, function errorCallback(response) {
            console.error(response);
        }).finally(function(){
            $scope.isLoading = false;
        });
    }



}]);