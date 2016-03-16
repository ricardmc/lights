'use strict';

angular.module('lightsOn', [
  'ngRoute',
  'board'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {templateUrl: 'board/board.html', controller: 'boardController'})
      .otherwise({redirectTo: '/'});
}])