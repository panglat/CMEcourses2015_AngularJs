var app = angular.module('necroProdeApp', ["ngRoute"])
        .constant("VIEWS", {
          characterlistview: "view/characterlistview.html",
          homeview: "view/homeview.html"
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
