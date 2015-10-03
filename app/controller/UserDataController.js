var UserModel = function(){
  var self = this;
  var Name = "";
  var Season = 0;
  var Chapter = 0;

  this.UserModel(name, season, chapter) {
    Name = name;
    Season = season;
    Chapter = chapter;
  }
};

app.controller("UserDataController", [$scope, function($scope) {
    $scope.users = [new UserModel("John Snow", 3, 4), new UserModel("Diego Maradona", 1, 2)];
}])
