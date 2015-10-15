app.controller("CharacterListController", ["$scope", "storage",
  function($scope, storage) {
    $scope.characters = storage;
  }
])
