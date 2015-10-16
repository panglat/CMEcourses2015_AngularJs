app.service('WikipediaDataProviderService', ["$http", "$q", function($http, $q) {
  var self = this;
  this.getCharacterInformation = function(name) { // define an instance method
    var defered = $q.defer();

    var url = 'http://en.wikipedia.org/w/api.php?titles=' + name + '&action=query&format=json&callback=JSON_CALLBACK&prop=extracts|pageimages&piprop=thumbnail&pithumbsize=200';

    $http.jsonp(url).then(
      function(response) {
        var pageId = Object.keys(response.data.query.pages)[0];
        var result = response.data.query.pages[pageId];
        defered.resolve(result);
      }, function(response) {
        defered.reject(response.data)
    });

    return defered.promise;
  };

  }])
