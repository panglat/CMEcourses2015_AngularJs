var app = angular.module('necroProdeApp', ["ngRoute"])
        .value("storage", [
          {
            "Id": 1,
            "Name": "Jon Snow",
            "Season": 4,
            "Chapter": 2
          },
          {
            "Id": 2,
            "Name": "Ned Stark",
            "Season": 3,
            "Chapter": 4
          },
          {
            "Id": 3,
            "Name": "Catelyn Stark",
            "Season": 7,
            "Chapter": 6
          },

        ])
        .constant("VIEWS", {
          homeview: "app/view/homeview.html",
          characterlistview: "app/view/characterlistview.html",
          characterdetailview: "app/view/characterdetailview.html"
        })
        .config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
          $routeProvider.when("/", {
            controller: "HomeController",
            templateUrl: VIEWS.homeview
          }).when("/characters", {
            controller: "CharacterListController",
            templateUrl: VIEWS.characterlistview
          }).when("/character/:Id", {
            controller: "CharacterDetailController",
            templateUrl: VIEWS.characterdetailview
          }).when("/character/", {
            controller: "CharacterDetailController",
            templateUrl: VIEWS.characterdetailview
          }).otherwise({
            redirectTo: "/"
          });
        }]);
