app.controller("CharacterDetailController", ["$scope", "$routeParams", "CharactersDataProviderService",
  function($scope, $routeParams, CharactersDataProviderService) {
    $scope.character = CharactersDataProviderService.getCharater($routeParams.Id);
  }
])
