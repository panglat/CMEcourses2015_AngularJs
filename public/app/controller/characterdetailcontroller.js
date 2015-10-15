app.controller("CharacterDetailController", ["$scope", "$routeParams", "$location", "CharactersDataProviderService",
  function($scope, $routeParams, $location, CharactersDataProviderService) {
    $scope.newCharacter = typeof($routeParams.Id) == "undefined";
    $scope.character = $scope.newCharacter ? {} : CharactersDataProviderService.getCharacter($routeParams.Id);

    $scope.updateCharacter = function() {
      CharactersDataProviderService.updateCharacter($scope.character.Id, $scope.character.Name, $scope.character.Season, $scope.character.Chapter);
      $location.path("/characters");
    };

    $scope.addNewCharacter = function () {
      CharactersDataProviderService.addNewCharacter($scope.character.Name, $scope.character.Season, $scope.character.Chapter);
      $location.path("/characters");
    };
  }
])
