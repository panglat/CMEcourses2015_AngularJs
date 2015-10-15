var app = angular.module('necroProdeApp', ["ngRoute"])
        .value("storage", [
          {
            "Name": "Jon Snow",
            "Season": 4,
            "Chapter": 2
          },
          {
            "Name": "Ned Stark",
            "Season": 3,
            "Chapter": 4
          },
          {
            "Name": "Catelyn Stark",
            "Season": 7,
            "Chapter": 6
          },

        ])
        .constant("VIEWS", {
          characterlistview: "app/view/characterlistview.html",
          homeview: "app/view/homeview.html"
        })
        .config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
          $routeProvider.when("/", {
            controller: "HomeController",
            templateUrl: VIEWS.homeview
          }).when("/characters", {
            controller: "CharacterListController",
            templateUrl: VIEWS.characterlistview
          }).otherwise({
            redirectTo: "/"
          });
        }]);
