angular.module('todoApp', [])

.controller('GoThaiController', ['$scope', '$q', '$http', function($scope, $q, $http) {

  var questionNum = null;
  // var questionNum = 123;

  $scope.submitWord = function() {
    var params = JSON.stringify({word:$scope.word});
    var deferred = $q.defer();
    $http.post('http://localhost:4747/submitWord', params)
      .then(function(data){
        deferred.resolve(data);
      })
    return deferred.promise;
  }

  var loadQuestion = function() {
    var params = JSON.stringify({questionNumber:questionNum});
    var deferred = $q.defer();
    $http.post('http://localhost:4747/getQuestion', params)
      .then(function(data){
        $scope.currentQuestion = data.data;
        console.log(data)
        deferred.resolve(data);
      })
    return deferred.promise;
  }

  $scope.init = function() {
    loadQuestion();
  }
}]);