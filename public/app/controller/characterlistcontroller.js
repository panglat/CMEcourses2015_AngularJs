app.controller("CharacterListController", ["$scope", "storage", "CharactersDataProviderService",
  function($scope, storage, CharactersDataProviderService) {
    $scope.characters = CharactersDataProviderService.getAllCharaters();

    $scope.deleteCharacter = function(id) {
      $scope.characters = CharactersDataProviderService.deleteCharacter(id);
    };
  }
])
