app.service('CharactersDataProviderService', function() {
  var self = this;
  this.charaters = [
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
    }
  ];
  this.lastCharacterId = 3;

  this.getAllCharaters = function() { // define an instance method
    return self.charaters;
  }

  this.addNewCharacter = function(name, season, chapter) {
    self.lastCharacterId++;
    var newCharacter = {"Id": self.lastCharacterId, "Name": name, "Season": season, "Chapter": chapter};
    self.charaters.push(newCharacter);
  }

  this.getCharater = function(id) {
    var character = {};
    angular.forEach(self.charaters, function(item, index) {
      if (item.Id == id) {
        character = item;
      }
    });
    return character;
  }

  this.updateCharacter = function(id, name, season, chapter) {
    var character = self.getCharater(id);
    character.Name = name;
    character.Season = season;
    character.Chapter = chapter;

    return character;
  }

  this.deleteCharacter = function (id) {
    var filteredCharacters = self.charaters.filter(function (c) { return c.Id != id; })
    self.charaters = filteredCharacters;
    return self.charaters;
  }

  this.addNewCharacter("Pablo", 3, 5);
  this.updateCharacter(2, "Ned Stark2", 8, 7);
});
