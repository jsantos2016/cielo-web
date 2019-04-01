var app = angular.module("myApp", []);
var uri =  "http://localhost:8080/account";

app.controller("launchesCtrl", function($scope, $http) {
  $http.get(uri + "/extractLaunches")
    .then(function(response) {
      $scope.lauches = response.data.response;
    });
});