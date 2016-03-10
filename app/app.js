'use strict';

angular.module('lightsOn', [
  'ngRoute',
  'lightsOn.board'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {templateUrl: 'board/board.html'}) //, controller: 'board/boardController.js'})
      .otherwise({redirectTo: '/'});
}])