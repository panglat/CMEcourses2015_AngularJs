app.controller("CharacterDetailController", ["$scope", "$routeParams", "$location", "$sce", "CharactersDataProviderService", "WikipediaDataProviderService",
  function($scope, $routeParams, $location, $sce, CharactersDataProviderService, WikipediaDataProviderService) {
    var self = this;
    $scope.newCharacter = typeof($routeParams.Id) == "undefined";
    $scope.character = $scope.newCharacter ? {} : CharactersDataProviderService.getCharacter($routeParams.Id);
    $scope.img = "";
    $scope.title = "";
    $scope.extractHtml = "";

    $scope.updateCharacter = function() {
      CharactersDataProviderService.updateCharacter($scope.character.Id, $scope.character.Name, $scope.character.Season, $scope.character.Chapter);
      $location.path("/characters");
    };

    $scope.addNewCharacter = function () {
      CharactersDataProviderService.addNewCharacter($scope.character.Name, $scope.character.Season, $scope.character.Chapter);
      $location.path("/characters");
    };

    $scope.getCharacterInformationFromWikipedia = function (characterName) {
      WikipediaDataProviderService.getCharacterInformation(characterName)
        .then(
          function(data) {
            $scope.img = data.thumbnail;
            $scope.title = data.title;

            if(data.hasOwnProperty("extract")) {
              $scope.extractHtml = $sce.trustAsHtml(data.extract);
            } else {
              $scope.extractHtml = $sce.trustAsHtml("<h4>No information</h4");
            }
          },
          function(error) {
            $scope.error = error;
          });
      };

      if(!$scope.newCharacter) {
        $scope.getCharacterInformationFromWikipedia($scope.character.Name);
        }
  }
])
