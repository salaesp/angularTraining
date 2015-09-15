'use strict';

/**
 * @ngdoc overview
 * @name trainingApp
 * @description
 * # trainingApp
 *
 * Main module of the application.
 */
 angular
 .module('trainingApp', [
  'ngRoute'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}).controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  $scope.testmodel = 'hola';
}).controller('MainCtrl', function ($scope, testFactory, testService) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
  $scope.nameService = testService.getTest();
  $scope.nameFactory = testFactory.getTest();
}).service('testService', function(){
  this.getTest = function(){
    return { name: 'luis'}
  };
})
.factory('testFactory', function() {
  return {
    getTest: function() {
      return { name: 'Luis'}
    }
  }
})
.factory('UserDataFactory', function($http){
  return{
    getData: function(){
      return $http.get("http://jsonplaceholder.typicode.com/users");
    }
  }
});
