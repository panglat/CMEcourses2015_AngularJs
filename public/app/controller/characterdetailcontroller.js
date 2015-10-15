app.controller("CharacterDetailController", ["$scope", "$routeParams", "storage",
  function($scope, $routeParams, storage) {
    angular.forEach(storage, function(item, index) {
      if (item.Id == $routeParams.Id) {
        $scope.character = item;
      }
    });
  }
])
