angular.module('todoApp', [])

.controller('GoThaiController', ['$scope', '$q', '$http', function($scope, $q, $http) {
  $scope.submitWord = function() {
    var deferred = $q.defer();
    $http.post('http://localhost:4747/submitWord', $scope.word)
      .then(function(data){
        deferred.resolve(data);
      })
    return deferred.promise;
  }
}]);